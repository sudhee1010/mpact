import Coupon from "../models/Coupon.js";
import Cart from "../models/Cart.js";

/**
 * @desc    Create coupon (Admin)
 * @route   POST /api/coupons
 */
export const createCoupon = async (req, res) => {
  const coupon = await Coupon.create(req.body);
  res.status(201).json(coupon);
};

/**
 * @desc    Get all coupons (Admin)
 * @route   GET /api/coupons
 */
export const getCoupons = async (req, res) => {
  const coupons = await Coupon.find().sort({ createdAt: -1 });
  res.json(coupons);
};

/**
 * @desc    Apply coupon to specific products
 * @route   POST /api/coupons/apply
 * @access  User
 */
export const applyCoupon = async (req, res) => {
  const { code } = req.body;

  // 1️⃣ Fetch cart with products
  const cart = await Cart.findOne({ user: req.user._id }).populate(
    "items.product"
  );

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  // 2️⃣ Fetch coupon
  const coupon = await Coupon.findOne({
    code: code.toUpperCase(),
    isActive: true
  });

  if (!coupon) {
    return res.status(400).json({ message: "Invalid coupon" });
  }

  // 3️⃣ Expiry check
  if (coupon.expiryDate < new Date()) {
    return res.status(400).json({ message: "Coupon expired" });
  }

  let totalDiscount = 0;
  const appliedProducts = [];

  // 4️⃣ Loop cart items and apply coupon ONLY to allowed products
  for (const item of cart.items) {
    const rule = coupon.applicableProducts.find(
      (p) => p.product.toString() === item.product._id.toString()
    );

    if (!rule) continue;

    // ❌ Usage limit reached for this product
    if (rule.usedBy.length >= rule.usageLimit) continue;

    // ❌ Same user reuse prevention
    if (rule.usedBy.includes(req.user._id)) continue;

    let discount = 0;

    if (coupon.discountType === "percentage") {
      discount =
        (item.price * coupon.discountValue) / 100;
    } else {
      discount = coupon.discountValue;
    }

    totalDiscount += discount;

    appliedProducts.push({
      product: item.product._id,
      discount
    });
  }

  // 5️⃣ No eligible products found
  if (totalDiscount === 0) {
    return res.status(400).json({
      message: "Coupon not applicable to cart products"
    });
  }

  // 6️⃣ Save coupon to cart
  cart.appliedCoupon = {
    code: coupon.code,
    discount: totalDiscount,
    products: appliedProducts
  };

  await cart.save();

  res.json({
    originalAmount: cart.totalPrice,
    discount: totalDiscount,
    finalAmount: cart.totalPrice - totalDiscount
  });
};

/**
 * @desc    Coupon analytics (Admin)
 * @route   GET /api/coupons/analytics
 */
export const getCouponAnalytics = async (req, res) => {
  const coupons = await Coupon.find()
    .populate("applicableProducts.usedBy", "name email")
    .select("code applicableProducts discountType discountValue");

  res.json(coupons);
};
