// import Order from "../models/Order.js";
// import Cart from "../models/Cart.js";
// import sendEmail from "../utils/sendEmail.js";

// // ✅ PLACE ORDER (Checkout)
// export const placeOrder = async (req, res) => {
//   try {
//     const { shippingAddress, paymentMethod } = req.body;

//     const cart = await Cart.findOne({ user: req.user._id }).populate(
//       "items.product"
//     );

//     if (!cart || cart.items.length === 0) {
//       return res.status(400).json({ message: "Cart is empty" });
//     }

//     const orderItems = cart.items.map((item) => ({
//       product: item.product._id,
//       name: item.product.name,
//       quantity: item.quantity,
//       price: item.price,
//       image: item.product.images[0]
//     }));

//     const order = await Order.create({
//       user: req.user._id,
//       orderItems,
//       shippingAddress,
//       paymentMethod,
//       totalAmount: cart.totalPrice,
//       orderStatus: "placed",
//       paymentStatus: "pending"
//     });

//     await sendEmail({
//       to: req.user.email,
//       subject: "Order Placed Successfully",
//       text: `Your order (${order._id}) has been placed successfully. We will notify you once it is shipped.`
//     });

//     // Clear cart after order
//     cart.items = [];
//     cart.totalPrice = 0;
//     await cart.save();

//     res.status(201).json(order);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // ✅ Get logged-in user's orders
// export const getMyOrders = async (req, res) => {
//   const orders = await Order.find({ user: req.user._id });
//   res.json(orders);
// };

// // ✅ Get single order
// export const getOrderById = async (req, res) => {
//   const order = await Order.findById(req.params.id).populate(
//     "user",
//     "name email"
//   );

//   if (!order) {
//     return res.status(404).json({ message: "Order not found" });
//   }

//   res.json(order);
// };





// import Order from "../models/Order.js";
// import Cart from "../models/Cart.js";
// import sendEmail from "../utils/sendEmail.js";

// // ✅ PLACE ORDER (Checkout)
// export const placeOrder = async (req, res) => {
//   try {
//     const { shippingAddress, paymentMethod } = req.body;

//     const cart = await Cart.findOne({ user: req.user._id }).populate(
//       "items.product"
//     );

//     if (!cart || cart.items.length === 0) {
//       return res.status(400).json({ message: "Cart is empty" });
//     }

//     // 🔹 Prepare order items
//     const orderItems = cart.items.map((item) => ({
//       product: item.product._id,
//       name: item.product.name,
//       quantity: item.quantity,
//       price: item.price,
//       image: item.product.images[0]
//     }));

//     // 🔹 TAX CALCULATION (Client requirement 3.4)
//     const TAX_RATE = 0.05; // 5%
//     const taxAmount = cart.totalPrice * TAX_RATE;
//     const grandTotal = cart.totalPrice + taxAmount;

//     // 🔹 Create order
//     const order = await Order.create({
//       user: req.user._id,
//       orderItems,
//       shippingAddress,
//       paymentMethod,
//       taxAmount,
//       totalAmount: grandTotal,
//       orderStatus: "placed",
//       paymentStatus: "pending"
//     });

//     // 🔹 Send order placed email
//     await sendEmail({
//       to: req.user.email,
//       subject: "Order Placed Successfully",
//       text: `Your order (${order._id}) has been placed successfully.
//      Total: ₹${grandTotal} (including tax).`
//     });

//     // 🔹 Clear cart after order
//     cart.items = [];
//     cart.totalPrice = 0;
//     await cart.save();

//     res.status(201).json(order);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // ✅ Get logged-in user's orders
// export const getMyOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({ user: req.user._id }).sort({
//       createdAt: -1
//     });
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // ✅ Get single order
// export const getOrderById = async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id).populate(
//       "user",
//       "name email"
//     );

//     if (!order) {
//       return res.status(404).json({ message: "Order not found" });
//     }

//     res.json(order);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };









import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import Coupon from "../models/Coupon.js";
import sendEmail from "../utils/sendEmail.js";

// ✅ PLACE ORDER (Checkout)
export const placeOrder = async (req, res) => {
  try {
    const { shippingAddress, paymentMethod } = req.body;

    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.product"
    );

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // 🔹 Prepare order items (UNCHANGED)
    const orderItems = cart.items.map((item) => ({
      product: item.product._id,
      name: item.product.name,
      quantity: item.quantity,
      price: item.price,
      image: item.product.images[0]
    }));

    // 🔹 BASE AMOUNT
    let finalAmount = cart.totalPrice;

    // 🔹 APPLY COUPON LOGIC (ADDED)
    if (cart.appliedCoupon) {
      finalAmount = Math.max(
        cart.totalPrice - cart.appliedCoupon.discount,
        0
      );

      // 🔹 Lock coupon for user
      const coupon = await Coupon.findOne({
        code: cart.appliedCoupon.code
      });

      if (coupon && !coupon.usedBy.includes(req.user._id)) {
        coupon.usedBy.push(req.user._id);
        coupon.usageCount += 1;
        await coupon.save();
      }

      // 🔹 Product-level coupon logic
      if (cart.appliedCoupon?.products?.length) {
        for (const p of cart.appliedCoupon.products) {
          const rule = coupon.applicableProducts.find(
            (r) => r.product.toString() === p.product.toString()
          );

          if (rule && !rule.usedBy.includes(req.user._id)) {
            rule.usedBy.push(req.user._id);
          }
        }
        await coupon.save();
      }
    }

    // 🔹 TAX CALCULATION (Client requirement 3.4)
    const TAX_RATE = 0.05; // 5%
    const taxAmount = finalAmount * TAX_RATE;
    const grandTotal = finalAmount + taxAmount;

    // 🔹 Create order (UNCHANGED)
    const order = await Order.create({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      taxAmount,
      totalAmount: grandTotal,
      orderStatus: "placed",
      paymentStatus: "pending"
    });

    // 🔹 Send order placed email (UNCHANGED)
    await sendEmail({
      to: req.user.email,
      subject: "Order Placed Successfully",
      text: `Your order (${order._id}) has been placed successfully.
Total: ₹${grandTotal} (including tax).`
    });

    // 🔹 Clear cart after order (UNCHANGED)
    cart.items = [];
    cart.totalPrice = 0;
    cart.appliedCoupon = null;
    await cart.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get logged-in user's orders
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get single order
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
