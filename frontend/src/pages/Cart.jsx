import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

/* ================= CART DATA ================= */
const CART_ITEMS = [
  {
    id: 1,
    title: "PROTEIN WAFERS – VARIETY PACK OF 10",
    oldPrice: 49,
    price: 399,
    rating: 5,
    reviews: 15,
    image: "/images/product1.png",
    specs: [
      "NO PRESERVATIVES",
      "JAGGERY BASED",
      "NO ADDED COLOURS",
      "NO GLUCOSE ADDED",
      "80% PEANUT",
    ],
  },
  {
    id: 2,
    title: "PROTEIN WAFERS – VARIETY PACK OF 10",
    oldPrice: 499,
    price: 399,
    rating: 4,
    reviews: 38,
    image: "/images/product1.png",
    specs: [
      "NO PRESERVATIVES",
      "JAGGERY BASED",
      "NO ADDED COLOURS",
      "NO GLUCOSE ADDED",
      "80% PEANUT",
    ],
  },
];

export default function Cart() {
  /* ================= PRICE CALCULATIONS ================= */
  const packingCharges = 20;

  const totalMRP = CART_ITEMS.reduce(
    (sum, item) => sum + item.oldPrice,
    0
  );

  const totalPrice = CART_ITEMS.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const totalDiscount = totalMRP - totalPrice;

  const finalAmount = totalPrice + packingCharges;

  return (
    <>
      <Navbar />

      <style>{`
        body {
          background: #2f2f2f;
          color: #fff;
        }

        .cart-page {
          max-width: 1600px;
          margin: auto;
          padding: clamp(16px, 4vw, 60px);
          min-height: 100vh;
        }

        .cart-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        .cart-item {
          display: flex;
          gap: 30px;
          margin-bottom: 50px;
        }

        .cart-img {
          width: 160px;
          height: 200px;
          background: #1f1f1f;
          border-radius: 8px;
          overflow: hidden;
        }

        .cart-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cart-details h3 {
          font-size: 16px;
          margin-bottom: 10px;
        }

        .specs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 12px;
        }

        .spec {
          border: 1px solid #ffeb00;
          color: #ffeb00;
          padding: 4px 8px;
          font-size: 11px;
          border-radius: 3px;
        }

        .rating {
          color: #ffeb00;
          font-size: 13px;
          margin-bottom: 6px;
        }

        .price del {
          color: #aaa;
          margin-right: 6px;
        }

        .price span {
          font-weight: 800;
          font-size: 16px;
        }

        .price-box {
          border-left: 1px solid #aaa;
          padding-left: 30px;
        }

        .price-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .discount {
          color: #00c853;
          font-weight: bold;
        }

        .total {
          color: #00c853;
          font-weight: bold;
        }

        .place-order {
          margin-top: 30px;
          text-align: center;
        }

        .place-order button {
          background: #ffeb00;
          border: none;
          padding: 14px 40px;
          font-weight: bold;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .cart-layout {
            grid-template-columns: 1fr;
          }

          .price-box {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid #aaa;
            padding-top: 30px;
          }
        }
      `}</style>

      <div className="cart-page">
        <div className="cart-layout">
          {/* LEFT */}
          <div>
            {CART_ITEMS.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-img">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="cart-details">
                  <h3>{item.title}</h3>

                  <div className="specs">
                    {item.specs.map((spec, i) => (
                      <span className="spec" key={i}>{spec}</span>
                    ))}
                  </div>

                  <div className="rating">
                    {"★".repeat(item.rating)} | {item.reviews} Reviews
                  </div>

                  <div className="price">
                    <del>RS : {item.oldPrice}</del>
                    <span>RS : {item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="price-box">
            <h3>PRICE DETAILS</h3>

            <div className="price-row">
              <span>Price ({CART_ITEMS.length} items)</span>
              <span>RS : {totalMRP}</span>
            </div>

            <div className="price-row discount">
              <span>Discount</span>
              <span>- RS : {totalDiscount}</span>
            </div>

            <div className="price-row">
              <span>Packing & other charges</span>
              <span>RS : {packingCharges}</span>
            </div>

            <div className="price-row total">
              <span>Total Amount</span>
              <span>RS : {finalAmount}</span>
            </div>

            <div className="place-order">
              <Link to="/checkout">
                <button>PLACE ORDER</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
