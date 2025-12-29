import Banner from "../models/Banner.js";

// ✅ Get all active banners (for homepage carousel)
export const getActiveBanners = async (req, res) => {
  try {
    const banners = await Banner.find({ isActive: true })
      .sort({ order: 1 });

    res.status(200).json(banners);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch banners",
      error: error.message,
    });
  }
};

// ✅ Add new banner (Admin)
export const createBanner = async (req, res) => {
  try {
    const banner = new Banner(req.body);
    await banner.save();

    res.status(201).json(banner);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create banner",
      error: error.message,
    });
  }
};

// ✅ Update banner
export const updateBanner = async (req, res) => {
  try {
    const updated = await Banner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update banner",
      error: error.message,
    });
  }
};

// ✅ Delete banner
export const deleteBanner = async (req, res) => {
  try {
    await Banner.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Banner deleted" });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete banner",
      error: error.message,
    });
  }
};
