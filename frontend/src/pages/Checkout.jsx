import React, { useState } from "react";
import {
  Home,
  Briefcase,
  CreditCard,
  Smartphone,
  Truck,
  ArrowLeft,
} from "lucide-react";

const Checkout = () => {
  const [step, setStep] = useState(2); // 2 = Address, 3 = Payment
  const [addressType, setAddressType] = useState("home");
  const [paymentMethod, setPaymentMethod] = useState("upi");

  return (
    <div className="page">
      {/* STEPS */}
      <div className="steps">
        <div className="step done">✔ Cart</div>
        <div className={`step ${step === 2 ? "active" : ""}`}>2 Address</div>
        <div className={`step ${step === 3 ? "active" : ""}`}>3 Payment</div>
      </div>

      {/* CONTENT */}
      <div className="content">
        {step === 2 && (
          <>
            <h1>DELIVERY ADDRESS</h1>
            <p className="subtitle">
              Enter your delivery details to proceed with your order
            </p>

            <div className="card">
              <label>Address Type</label>
              <div className="row">
                <button
                  className={addressType === "home" ? "active" : ""}
                  onClick={() => setAddressType("home")}
                >
                  <Home size={16} /> Home
                </button>
                <button
                  className={addressType === "work" ? "active" : ""}
                  onClick={() => setAddressType("work")}
                >
                  <Briefcase size={16} /> Work
                </button>
              </div>

              <label>Contact Information</label>
              <div className="grid2">
                <input placeholder="Full Name" />
                <input placeholder="Phone Number" />
              </div>
              <input placeholder="Email Address" />

              <label>Delivery Address</label>
              <input placeholder="House / Flat No., Building Name" />
              <input placeholder="Street, Area, Locality" />

              <div className="grid3">
                <input placeholder="City" />
                <input placeholder="State" />
                <input placeholder="Pincode" />
              </div>

              <div className="actions">
                <button className="outline">Back to Cart</button>
                <button className="primary" onClick={() => setStep(3)}>
                  CONTINUE TO PAYMENT
                </button>
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h1>SELECT PAYMENT METHOD</h1>

            <div className="payment-layout">
              {/* LEFT */}
              <div className="payment-options">
                {/* UPI */}
                <div
                  className={`pay-card ${
                    paymentMethod === "upi" ? "active" : ""
                  }`}
                  onClick={() => setPaymentMethod("upi")}
                >
                  <div className="pay-title">
                    <Smartphone /> UPI Payment
                  </div>
                  {paymentMethod === "upi" && (
                    <>
                      <input placeholder="Enter UPI ID (e.g. name@upi)" />
                      <div className="upi">
                        <span>PhonePe</span>
                        <span>Paytm</span>
                        <span>Google Pay</span>
                      </div>
                    </>
                  )}
                </div>

                {/* CARD */}
                <div
                  className={`pay-card ${
                    paymentMethod === "card" ? "active" : ""
                  }`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <div className="pay-title">
                    <CreditCard /> Credit / Debit Card
                  </div>
                  {paymentMethod === "card" && (
                    <>
                      <input placeholder="Card Number" />
                      <input placeholder="Cardholder Name" />
                      <div className="grid2">
                        <input placeholder="MM/YY" />
                        <input placeholder="CVV" />
                      </div>
                    </>
                  )}
                </div>

                {/* COD */}
                <div
                  className={`pay-card ${
                    paymentMethod === "cod" ? "active" : ""
                  }`}
                  onClick={() => setPaymentMethod("cod")}
                >
                  <div className="pay-title">
                    <Truck /> Cash on Delivery
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="summary">
                <h3>ORDER SUMMARY</h3>
                <div className="row-s">
                  <span>Subtotal</span>
                  <span>₹2000</span>
                </div>
                <div className="row-s green">
                  <span>Discount</span>
                  <span>-₹200</span>
                </div>
                <div className="row-s">
                  <span>Packing Charges</span>
                  <span>₹50</span>
                </div>
                <hr />
                <div className="total">
                  <span>Total</span>
                  <span>₹1850</span>
                </div>
                <button className="primary full">PROCEED TO PAY</button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* INTERNAL CSS */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .page {
          min-height: 100vh;
          background: #3a3a3a;
          color: white;
          font-family: 'Jersey 25', sans-serif;
        }

        .header {
          background: #facc15;
          color: black;
          padding: 16px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 22px;
          font-weight: 900;
          display: flex;
          gap: 10px;
          align-items: center;
          cursor: pointer;
        }

        .nav span {
          margin: 0 12px;
          font-weight: bold;
          cursor: pointer;
        }

        .steps {
          display: flex;
          justify-content: center;
          gap: 24px;
          padding: 16px;
          border-bottom: 1px solid #facc15;
        }

        .step {
          color: #9ca3af;
        }

        .step.active {
          color: #facc15;
          font-weight: bold;
        }

        .step.done {
          color: #22c55e;
        }

        .content {
          max-width: 1100px;
          margin: auto;
          padding: 40px 16px;
        }

        h1 {
          margin-bottom: 8px;
        }

        .subtitle {
          color: #cbd5f5;
          margin-bottom: 24px;
        }

        .card {
          border: 2px solid #facc15;
          border-radius: 12px;
          padding: 24px;
          background: #1f1f1f;
        }

        label {
          display: block;
          margin: 16px 0 8px;
          color: #facc15;
        }

        input {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 1.5px solid #facc15;
          background: #2b2b2b;
          color: white;
          margin-bottom: 12px;
        }

        .row {
          display: flex;
          gap: 12px;
        }

        .row button {
          flex: 1;
          padding: 12px;
          border: 2px solid #facc15;
          background: transparent;
          color: white;
          border-radius: 8px;
          cursor: pointer;
        }

        .row button.active {
          background: #facc15;
          color: black;
        }

        .grid2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .grid3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .actions {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .primary {
          background: #facc15;
          border: none;
          padding: 14px;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          color: black;
        }

        .outline {
          background: transparent;
          border: 2px solid #facc15;
          padding: 14px;
          border-radius: 10px;
          color: white;
          cursor: pointer;
        }

        .payment-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        .pay-card {
          border: 2px solid #555;
          padding: 16px;
          border-radius: 12px;
          margin-bottom: 16px;
          cursor: pointer;
        }

        .pay-card.active {
          border-color: #facc15;
          background: rgba(250, 204, 21, 0.1);
        }

        .pay-title {
          display: flex;
          gap: 10px;
          align-items: center;
          font-weight: bold;
          margin-bottom: 12px;
        }

        .upi span {
          background: white;
          color: black;
          padding: 6px 12px;
          border-radius: 8px;
          margin-right: 8px;
          font-size: 12px;
        }

        .summary {
          border: 2px solid #facc15;
          padding: 20px;
          border-radius: 12px;
          height: fit-content;
        }

        .row-s {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
        }

        .row-s.green {
          color: #22c55e;
        }

        .total {
          display: flex;
          justify-content: space-between;
          font-size: 20px;
          color: #facc15;
          font-weight: bold;
          margin: 12px 0;
        }

        .full {
          width: 100%;
          margin-top: 12px;
        }

        @media (max-width: 900px) {
          .payment-layout {
            grid-template-columns: 1fr;
          }

          .grid2,
          .grid3 {
            grid-template-columns: 1fr;
          }

          .actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Checkout;





// import React from "react";
// import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";


// export default function Checkout() {
//   const navigate = useNavigate();

//   const handlePaymentChange = (method) => {
//     if (method === "bank") {
//       navigate("/payment");
//     }
//   };

//   return (
//     <>
//       <style>{`
//         .checkout-page {
//           min-height: 100vh;
//           padding: 60px 0;
//           color: #fff;
//         }

//         .checkout-container {
//           max-width: 1200px;
//           margin: auto;
//           display: grid;
//           grid-template-columns: 1.2fr 1fr;
//           gap: 60px;
//         }

//         /* ===== LEFT ===== */
//         .billing-section h2 {
//           margin-bottom: 25px;
//           font-family: 'Jersey 25';
//           font-weight: 400;
//           font-size: 36px;
//         }

//         .billing-form label {
//           display: block;
//           font-size: 13px;
//           margin-bottom: 6px;
//           color: #cfcfcf;
//         }

//         .billing-form input {
//           width: 100%;
//           padding: 12px;
//           background: #989890ff;
//           border: none;
//           margin-bottom: 18px;
//           color: #000;
//           border-radius: 4px;
//         }

//         .save-info {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           font-size: 12px;
//           margin-top: 10px;
//         }

//         .save-info input {
//           width: 16px;
//           height: 16px;
//           accent-color: #ffeb00;
//         }

//         /* ===== RIGHT ===== */
//         .order-section {
//           background: transparent;
//         }

//         .order-item {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           margin-bottom: 18px;
//         }

//         .order-item img {
//           width: 36px;
//           height: 36px;
//           object-fit: contain;
//         }

//         .order-info {
//           flex: 1;
//           display: flex;
//           justify-content: space-between;
//           font-size: 13px;
//         }

//         .order-summary {
//           border-top: 1px solid #555;
//           border-bottom: 1px solid #555;
//           padding: 16px 0;
//           margin: 20px 0;
//         }

//         .order-summary div {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 10px;
//           font-size: 14px;
//         }

//         .order-summary .total {
//           font-weight: bold;
//           font-size: 15px;
//         }

//         /* PAYMENT */
//         .payment-methods label {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           margin-bottom: 10px;
//           font-size: 14px;
//         }

//         .payment-methods input {
//           accent-color: #ffeb00;
//         }

//         .card-icons {
//           display: flex;
//           gap: 10px;
//           margin: 10px 0 16px 26px;
//         }

//         .card-icons img {
//           height: 20px;
//         }

//         /* COUPON */
//         .coupon-section {
//           display: flex;
//           gap: 12px;
//           margin: 20px 0;
//         }

//         .coupon-section input {
//           flex: 1;
//           padding: 10px;
//           background: #333;
//           border: 1px solid #666;
//           color: #fff;
//           border-radius: 4px;
//         }

//         .coupon-section button {
//           background: #ffeb00;
//           border: none;
//           padding: 10px 16px;
//           font-weight: 600;
//           cursor: pointer;
//         }

//         /* PLACE ORDER */
//         .place-order-btn {
//           background: #ffeb00;
//           border: none;
//           padding: 14px;
//           width: 180px;
//           font-weight: 700;
//           cursor: pointer;
//           border-radius: 4px;
//         }

//         @media (max-width: 900px) {
//           .checkout-container {
//             grid-template-columns: 1fr;
//           }
//             /* ===== LARGE DESKTOPS / 4K ===== */
// @media (min-width: 1400px) {
//   .checkout-container {
//     max-width: 1400px;
//     gap: 80px;
//   }

//   .billing-section h2 {
//     font-size: 40px;
//   }

//   .billing-form input {
//     padding: 14px;
//     font-size: 15px;
//   }

//   .place-order-btn {
//     width: 220px;
//     padding: 16px;
//     font-size: 16px;
//   }
// }

// /* ===== LAPTOPS & NORMAL DESKTOPS ===== */
// @media (max-width: 1399px) {
//   .checkout-container {
//     padding: 0 30px;
//   }
// }

// /* ===== TABLETS ===== */
// @media (max-width: 900px) {
//   .checkout-container {
//     grid-template-columns: 1fr;
//     gap: 40px;
//     padding: 0 20px;
//   }

//   .place-order-btn {
//     width: 100%;
//   }
// }

// /* ===== MOBILE DEVICES ===== */
// @media (max-width: 600px) {
//   .checkout-page {
//     padding: 30px 0;
//   }

//   .billing-section h2 {
//     font-size: 26px;
//     text-align: center;
//   }

//   .billing-form label {
//     font-size: 12px;
//   }

//   .billing-form input {
//     padding: 10px;
//     font-size: 14px;
//   }

//   .order-info {
//     flex-direction: column;
//     gap: 6px;
//   }

//   .coupon-section {
//     flex-direction: column;
//   }

//   .coupon-section button {
//     width: 100%;
//   }

//   .place-order-btn {
//     width: 100%;
//     font-size: 15px;
//   }
// }

// /* ===== VERY SMALL PHONES ===== */
// @media (max-width: 360px) {
//   .billing-section h2 {
//     font-size: 22px;
//   }

//   .order-info p {
//     font-size: 12px;
//   }

//   .order-summary div {
//     font-size: 12px;
//   }

//   .place-order-btn {
//     font-size: 14px;
//     padding: 14px;
//   }
// }

//         }
//       `}</style>
//       <Navbar />
//       <div className="checkout-page">
//         <div className="checkout-container">

//           {/* LEFT */}
//           <div className="billing-section">
//             <h2>Billing Details</h2>

//             <form className="billing-form">
//               <label>First Name *</label>
//               <input type="text" />

//               <label>Company Name</label>
//               <input type="text" />

//               <label>Street Address *</label>
//               <input type="text" />

//               <label>Apartment, floor, etc. (optional)</label>
//               <input type="text" />

//               <label>Town / City *</label>
//               <input type="text" />

//               <label>Phone Number *</label>
//               <input type="text" />

//               <label>Email Address *</label>
//               <input type="email" />

//               <div className="save-info">
//                 <input type="checkbox" />
//                 <span>
//                   Save this information for faster check-out next time
//                 </span>
//               </div>
//             </form>
//           </div>

//           {/* RIGHT */}
//           <div className="order-section">

//             <div className="order-item">
//               <img src="/images/product.jpg" alt="" />
//               <div className="order-info">
//                 <p>PROTEIN WAFERS – VARIETY PACK</p>
//                 <span>$25</span>
//               </div>
//             </div>

//             <div className="order-item">
//               <img src="/images/product.jpg" alt="" />
//               <div className="order-info">
//                 <p>PROTEIN WAFERS – VARIETY PACK</p>
//                 <span>$11</span>
//               </div>
//             </div>

//             <div className="order-summary">
//               <div>
//                 <span>Subtotal:</span>
//                 <span>$1750</span>
//               </div>
//               <div>
//                 <span>Shipping:</span>
//                 <span>Free</span>
//               </div>
//               <div className="total">
//                 <span>Total:</span>
//                 <span>$1750</span>
//               </div>
//             </div>

//             <div className="payment-methods">
//               <label>
//                 <input
//                   type="radio"
//                   name="payment"
//                   onChange={() => handlePaymentChange("bank")}
//                 />
//                 Bank
//               </label>

//               <div className="card-icons">
//                 <img src="/images/visa.png" alt="Visa" />
//                 <img src="/images/mastercard.png" alt="Mastercard" />
//                 <img src="/images/gpay.png" alt="Google Pay" />
//               </div>

//               <label>
//                 <input
//                   type="radio"
//                   name="payment"
//                   defaultChecked
//                 />
//                 Cash on delivery
//               </label>
//             </div>


//             <div className="coupon-section">
//               <input type="text" placeholder="Coupon Code" />
//               <button>Apply Coupon</button>
//             </div>

//             <Link to="/success">
//               <button className="place-order-btn">Place Order</button>
//             </Link>

//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
