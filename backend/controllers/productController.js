// import Product from "../models/Product.js";

// // @desc    Get all products (with search & filter)
// // @route   GET /api/products
// export const getProducts = async (req, res) => {
//   const keyword = req.query.keyword
//     ? {
//         name: {
//           $regex: req.query.keyword,
//           $options: "i"
//         }
//       }
//     : {};

//   const products = await Product.find({ ...keyword, isActive: true })
//     .populate("category", "name")
//     .sort({ createdAt: -1 });

//   res.json(products);
// };

// // @desc    Get single product
// // @route   GET /api/products/:id
// export const getProductById = async (req, res) => {
//   const product = await Product.findById(req.params.id).populate(
//     "category",
//     "name"
//   );

//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   res.json(product);
// };

// // @desc    Create product (Admin)
// // @route   POST /api/products
// export const createProduct = async (req, res) => {
//   const product = new Product(req.body);
//   const createdProduct = await product.save();
//   res.status(201).json(createdProduct);
// };

// // @desc    Update product (Admin)
// // @route   PUT /api/products/:id
// export const updateProduct = async (req, res) => {
//   const product = await Product.findById(req.params.id);

//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   Object.assign(product, req.body);
//   const updatedProduct = await product.save();
//   res.json(updatedProduct);
// };

// // @desc    Delete product (Admin)
// // @route   DELETE /api/products/:id
// export const deleteProduct = async (req, res) => {
//   const product = await Product.findById(req.params.id);

//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   await product.deleteOne();
//   res.json({ message: "Product removed" });
// };








import Product from "../models/Product.js";
import Category from "../models/Category.js";
import cloudinary from "../config/cloudinary.js";

/**
 * @desc    Get all products (search + only active)
 * @route   GET /api/products
 * @access  Public
 */
export const getProducts = async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i"
        }
      }
    : {};

  const products = await Product.find({
    ...keyword,
    isActive: true
  })
    .populate({
      path: "category",
      match: { isActive: true },
      select: "name"
    })
    .sort({ createdAt: -1 });

  res.json(products);
};

/**
 * @desc    Get single product
 * @route   GET /api/products/:id
 * @access  Public
 */
export const getProductById = async (req, res) => {
  const product = await Product.findOne({
    _id: req.params.id,
    isActive: true
  }).populate("category", "name");

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

/**
 * @desc    Create product
 * @route   POST /api/products
 * @access  Admin
 */
export const createProduct = async (req, res) => {
  const { category } = req.body;

  // ✅ Validate category
  const categoryExists = await Category.findOne({
    _id: category,
    isActive: true
  });

  if (!categoryExists) {
    return res.status(400).json({ message: "Invalid category" });
  }

  const product = await Product.create(req.body);
  res.status(201).json(product);
};

/**
 * @desc    Update product
 * @route   PUT /api/products/:id
 * @access  Admin
 */
export const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product || !product.isActive) {
    return res.status(404).json({ message: "Product not found" });
  }

  // ✅ If category is updated, validate it
  if (req.body.category) {
    const categoryExists = await Category.findOne({
      _id: req.body.category,
      isActive: true
    });

    if (!categoryExists) {
      return res.status(400).json({ message: "Invalid category" });
    }
  }

  Object.assign(product, req.body);
  const updatedProduct = await product.save();

  res.json(updatedProduct);
};

/**
 * @desc    Delete product (Soft delete)
 * @route   DELETE /api/products/:id
 * @access  Admin
 */
export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product || !product.isActive) {
    return res.status(404).json({ message: "Product not found" });
  }

  // ✅ Soft delete
  product.isActive = false;
  await product.save();

  res.json({ message: "Product removed successfully" });
};

/* ================= DELETE IMAGE ================= */

export const deleteProductImage = async (req, res) => {
  const { productId, imageId } = req.params;

  const product = await Product.findById(productId);
  if (!product || !product.isActive) {
    return res.status(404).json({ message: "Product not found" });
  }

  const image = product.images.find(
    img => img._id.toString() === imageId
  );

  if (!image) {
    return res.status(404).json({ message: "Image not found" });
  }

  // Delete from Cloudinary
  await cloudinary.uploader.destroy(image.public_id);

  // Remove from DB
  product.images = product.images.filter(
    img => img._id.toString() !== imageId
  );

  await product.save();

  res.json({ message: "Image deleted successfully" });
};

/* ================= UPDATE IMAGE ================= */

export const updateProductImage = async (req, res) => {
  const { productId, imageId } = req.params;

  if (!req.file) {
    return res.status(400).json({ message: "No image uploaded" });
  }

  const product = await Product.findById(productId);
  if (!product || !product.isActive) {
    return res.status(404).json({ message: "Product not found" });
  }

  const index = product.images.findIndex(
    img => img._id.toString() === imageId
  );

  if (index === -1) {
    return res.status(404).json({ message: "Image not found" });
  }

  // Delete old image
  await cloudinary.uploader.destroy(
    product.images[index].public_id
  );

  // Replace with new image
  product.images[index] = {
    url: req.file.path,
    public_id: req.file.filename
  };

  await product.save();

  res.json({
    message: "Image updated successfully",
    image: product.images[index]
  });
};

