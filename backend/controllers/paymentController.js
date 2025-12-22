// import crypto from "crypto";
// import razorpay from "../utils/razorpay.js";
// import Order from "../models/Order.js";

// // ✅ Create Razorpay order
// export const createPaymentOrder = async (req, res) => {
//   const { orderId } = req.body;

//   const order = await Order.findById(orderId);
//   if (!order) {
//     return res.status(404).json({ message: "Order not found" });
//   }

//   const razorpayOrder = await razorpay.orders.create({
//     amount: order.totalAmount * 100, // paise
//     currency: "INR",
//     receipt: `order_${order._id}`
//   });

//   res.json({
//     razorpayOrderId: razorpayOrder.id,
//     amount: razorpayOrder.amount,
//     currency: razorpayOrder.currency,
//     key: process.env.RAZORPAY_KEY_ID
//   });
// };

// // ✅ Verify payment
// export const verifyPayment = async (req, res) => {
//   const {
//     razorpay_order_id,
//     razorpay_payment_id,
//     razorpay_signature,
//     orderId
//   } = req.body;

//   const body = razorpay_order_id + "|" + razorpay_payment_id;

//   const expectedSignature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//     .update(body.toString())
//     .digest("hex");

//   if (expectedSignature !== razorpay_signature) {
//     return res.status(400).json({ message: "Payment verification failed" });
//   }

//   const order = await Order.findById(orderId);
//   order.paymentStatus = "paid";
//   order.orderStatus = "placed";

//   await order.save();

//   res.json({ message: "Payment successful", order });
// };
