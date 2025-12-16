import express from "express";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem
} from "../controllers/cartController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getCart);
router.post("/add", protect, addToCart);
router.patch("/update", protect, updateCartItem);
router.delete("/remove/:productId", protect, removeCartItem);

export default router;
