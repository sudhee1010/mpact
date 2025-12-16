import Category from "../models/Category.js";

export const createCategory = async (req, res) => {
  const { name } = req.body;

  const exists = await Category.findOne({ name });
  if (exists) {
    return res.status(400).json({ message: "Category already exists" });
  }

  const category = await Category.create({ name });
  res.status(201).json(category);
};


export const getCategories = async (req, res) => {
  const categories = await Category.find({ isActive: true }).sort("name");
  res.json(categories);
};


export const updateCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  category.name = req.body.name || category.name;
  await category.save();

  res.json(category);
};


export const deleteCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  category.isActive = false;
  await category.save();

  res.json({ message: "Category removed" });
};
