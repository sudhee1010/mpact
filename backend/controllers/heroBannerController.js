import HeroBanner from "../models/HeroBanner.js";
import cloudinary from "../config/cloudinary.js";

/**
 * @desc    Get active hero banners (Public)
 * @route   GET /api/hero-banners
 */
export const getHeroBanners = async (req, res) => {
  const banners = await HeroBanner.find({ isActive: true })
    .sort({ order: 1, createdAt: -1 });

  res.json(banners);
};

/**
 * @desc    Upload hero banner (Admin)
 * @route   POST /api/hero-banners
 */
export const createHeroBanner = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Image required" });
  }

  const banner = await HeroBanner.create({
    image: {
      url: req.file.path,
      public_id: req.file.filename
    },
    title: req.body.title,
    order: req.body.order || 0
  });

  res.status(201).json(banner);
};

/**
 * @desc    Update banner status/order (Admin)
 * @route   PUT /api/hero-banners/:id
 */
export const updateHeroBanner = async (req, res) => {
  const banner = await HeroBanner.findById(req.params.id);

  if (!banner) {
    return res.status(404).json({ message: "Banner not found" });
  }

  if (req.body.isActive !== undefined)
    banner.isActive = req.body.isActive;

  if (req.body.order !== undefined)
    banner.order = req.body.order;

  if (req.body.title !== undefined)
    banner.title = req.body.title;

  await banner.save();
  res.json(banner);
};

/**
 * @desc    Delete hero banner (Admin)
 * @route   DELETE /api/hero-banners/:id
 */
export const deleteHeroBanner = async (req, res) => {
  const banner = await HeroBanner.findById(req.params.id);

  if (!banner) {
    return res.status(404).json({ message: "Banner not found" });
  }

  await cloudinary.uploader.destroy(banner.image.public_id);
  await banner.deleteOne();

  res.json({ message: "Banner deleted successfully" });
};
