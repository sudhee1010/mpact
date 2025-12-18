import React from "react";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <>
      <style>{`
        .product-card {
          background: #3a3a3a;
          border: 1px solid #ffd400;
          padding: 20px;
          color: #fff;
        }

        .product-card h3 {
          margin-bottom: 10px;
        }

        .product-card button {
          background: #ffd400;
          border: none;
          padding: 10px 16px;
          font-weight: 700;
          cursor: pointer;
        }
      `}</style>

      <div className="product-card">
        <h3>Protein Bar</h3>
        <p>High protein snack for workouts</p>

        {/* ✅ Correct navigation */}
        <Link to="/checkout">
          <button>Add to Cart</button>
        </Link>
      </div>
    </>
  );
}
