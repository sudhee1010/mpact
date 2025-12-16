import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.post("/", protect, isAdmin, (req, res) => {
  res.json({ message: "Product created (admin only)" });
});

export default router;
