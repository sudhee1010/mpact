import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


export default function Checkout() {
  const navigate = useNavigate();

  const handlePaymentChange = (method) => {
    if (method === "bank") {
      navigate("/payment");
    }
  };

  return (
    <>
      <style>{`
        .checkout-page {
          min-height: 100vh;
          padding: 60px 0;
          color: #fff;
        }

        .checkout-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
        }

        /* ===== LEFT ===== */
        .billing-section h2 {
          margin-bottom: 25px;
          font-family: 'Jersey 25';
          font-weight: 400;
          font-size: 36px;
        }

        .billing-form label {
          display: block;
          font-size: 13px;
          margin-bottom: 6px;
          color: #cfcfcf;
        }

        .billing-form input {
          width: 100%;
          padding: 12px;
          background: #989890ff;
          border: none;
          margin-bottom: 18px;
          color: #000;
          border-radius: 4px;
        }

        .save-info {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          margin-top: 10px;
        }

        .save-info input {
          width: 16px;
          height: 16px;
          accent-color: #ffeb00;
        }

        /* ===== RIGHT ===== */
        .order-section {
          background: transparent;
        }

        .order-item {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        }

        .order-item img {
          width: 36px;
          height: 36px;
          object-fit: contain;
        }

        .order-info {
          flex: 1;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }

        .order-summary {
          border-top: 1px solid #555;
          border-bottom: 1px solid #555;
          padding: 16px 0;
          margin: 20px 0;
        }

        .order-summary div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-size: 14px;
        }

        .order-summary .total {
          font-weight: bold;
          font-size: 15px;
        }

        /* PAYMENT */
        .payment-methods label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          font-size: 14px;
        }

        .payment-methods input {
          accent-color: #ffeb00;
        }

        .card-icons {
          display: flex;
          gap: 10px;
          margin: 10px 0 16px 26px;
        }

        .card-icons img {
          height: 20px;
        }

        /* COUPON */
        .coupon-section {
          display: flex;
          gap: 12px;
          margin: 20px 0;
        }

        .coupon-section input {
          flex: 1;
          padding: 10px;
          background: #333;
          border: 1px solid #666;
          color: #fff;
          border-radius: 4px;
        }

        .coupon-section button {
          background: #ffeb00;
          border: none;
          padding: 10px 16px;
          font-weight: 600;
          cursor: pointer;
        }

        /* PLACE ORDER */
        .place-order-btn {
          background: #ffeb00;
          border: none;
          padding: 14px;
          width: 180px;
          font-weight: 700;
          cursor: pointer;
          border-radius: 4px;
        }

        @media (max-width: 900px) {
          .checkout-container {
            grid-template-columns: 1fr;
          }
            /* ===== LARGE DESKTOPS / 4K ===== */
@media (min-width: 1400px) {
  .checkout-container {
    max-width: 1400px;
    gap: 80px;
  }

  .billing-section h2 {
    font-size: 40px;
  }

  .billing-form input {
    padding: 14px;
    font-size: 15px;
  }

  .place-order-btn {
    width: 220px;
    padding: 16px;
    font-size: 16px;
  }
}

/* ===== LAPTOPS & NORMAL DESKTOPS ===== */
@media (max-width: 1399px) {
  .checkout-container {
    padding: 0 30px;
  }
}

/* ===== TABLETS ===== */
@media (max-width: 900px) {
  .checkout-container {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 20px;
  }

  .place-order-btn {
    width: 100%;
  }
}

/* ===== MOBILE DEVICES ===== */
@media (max-width: 600px) {
  .checkout-page {
    padding: 30px 0;
  }

  .billing-section h2 {
    font-size: 26px;
    text-align: center;
  }

  .billing-form label {
    font-size: 12px;
  }

  .billing-form input {
    padding: 10px;
    font-size: 14px;
  }

  .order-info {
    flex-direction: column;
    gap: 6px;
  }

  .coupon-section {
    flex-direction: column;
  }

  .coupon-section button {
    width: 100%;
  }

  .place-order-btn {
    width: 100%;
    font-size: 15px;
  }
}

/* ===== VERY SMALL PHONES ===== */
@media (max-width: 360px) {
  .billing-section h2 {
    font-size: 22px;
  }

  .order-info p {
    font-size: 12px;
  }

  .order-summary div {
    font-size: 12px;
  }

  .place-order-btn {
    font-size: 14px;
    padding: 14px;
  }
}

        }
      `}</style>
      <Navbar />
      <div className="checkout-page">
        <div className="checkout-container">

          {/* LEFT */}
          <div className="billing-section">
            <h2>Billing Details</h2>

            <form className="billing-form">
              <label>First Name *</label>
              <input type="text" />

              <label>Company Name</label>
              <input type="text" />

              <label>Street Address *</label>
              <input type="text" />

              <label>Apartment, floor, etc. (optional)</label>
              <input type="text" />

              <label>Town / City *</label>
              <input type="text" />

              <label>Phone Number *</label>
              <input type="text" />

              <label>Email Address *</label>
              <input type="email" />

              <div className="save-info">
                <input type="checkbox" />
                <span>
                  Save this information for faster check-out next time
                </span>
              </div>
            </form>
          </div>

          {/* RIGHT */}
          <div className="order-section">

            <div className="order-item">
              <img src="/images/product.jpg" alt="" />
              <div className="order-info">
                <p>PROTEIN WAFERS – VARIETY PACK</p>
                <span>$25</span>
              </div>
            </div>

            <div className="order-item">
              <img src="/images/product.jpg" alt="" />
              <div className="order-info">
                <p>PROTEIN WAFERS – VARIETY PACK</p>
                <span>$11</span>
              </div>
            </div>

            <div className="order-summary">
              <div>
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div>
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="total">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>

            <div className="payment-methods">
              <label>
                <input
                  type="radio"
                  name="payment"
                  onChange={() => handlePaymentChange("bank")}
                />
                Bank
              </label>

              <div className="card-icons">
                <img src="/images/visa.png" alt="Visa" />
                <img src="/images/mastercard.png" alt="Mastercard" />
                <img src="/images/gpay.png" alt="Google Pay" />
              </div>

              <label>
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                />
                Cash on delivery
              </label>
            </div>


            <div className="coupon-section">
              <input type="text" placeholder="Coupon Code" />
              <button>Apply Coupon</button>
            </div>

            <Link to="/success">
              <button className="place-order-btn">Place Order</button>
            </Link>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
