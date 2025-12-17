export const uploadProductImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No image uploaded" });
  }

  res.status(200).json({
    imageUrl: req.file.path
  });
};

export const uploadMultipleProductImages = async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No images uploaded" });
  }

  const imageUrls = req.files.map(file => file.path);

  res.status(200).json({
    images: imageUrls
  });
};