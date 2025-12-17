import Order from "../models/Order.js";

// ✅ Admin: Get all orders
export const getAllOrders = async (req, res) => {
  const orders = await Order.find().populate("user", "name email");
  res.json(orders);
};

// ✅ Admin: Update order status
export const updateOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  order.orderStatus = req.body.status;
  await order.save();

  res.json(order);
};
