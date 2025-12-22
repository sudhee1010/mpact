import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <style>{`
        .home-page {
          background: #2f2f2f;
          color: #fff;
        }

        /* HERO */
        .hero {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          max-width: 1200px;
          margin: auto;
          padding: 80px 20px;
          align-items: center;
        }

        .hero h1 {
          font-size: 46px;
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .hero h1 span {
          color: #ffd400;
        }

        .hero p {
          color: #cfcfcf;
          margin-bottom: 30px;
          max-width: 500px;
        }

        .hero button {
          background: #ffd400;
          border: none;
          padding: 14px 28px;
          font-weight: 700;
          cursor: pointer;
        }

        .hero-image {
          height: 360px;
          background: #1f1f1f;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #ffd400;
        }

        /* CATEGORIES */
        .categories {
          max-width: 1200px;
          margin: auto;
          padding: 60px 20px;
        }

        .categories h2 {
          text-align: center;
          margin-bottom: 40px;
          font-size: 28px;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .category-card {
          background: #3a3a3a;
          padding: 30px;
          text-align: center;
          border: 1px solid #ffd400;
        }

        .category-card h3 {
          margin-bottom: 10px;
        }

        .category-card p {
          font-size: 13px;
          color: #cfcfcf;
          margin-bottom: 16px;
        }

        .category-card a {
          color: #ffd400;
          text-decoration: none;
          font-weight: 600;
        }

        /* FEATURES */
        .features {
          background: #1f1f1f;
          padding: 60px 20px;
        }

        .features-grid {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          text-align: center;
        }

        .feature {
          padding: 20px;
        }

        .feature h4 {
          margin-bottom: 10px;
          color: #ffd400;
        }

        .feature p {
          font-size: 13px;
          color: #cfcfcf;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>

      <div className="home-page">

        {/* HERO SECTION */}
        <section className="hero">
          <div>
            <h1>
              Fuel Your <span>Workout</span><br />
              Power Your <span>Life</span>
            </h1>
            <p>
              Premium protein, supplements, and nutrition designed to help
              you train harder, recover faster, and grow stronger.
            </p>

            <Link to="/products">
              <button>Shop Now</button>
            </Link>
          </div>

          <div className="hero-image">
            <span>PRODUCT IMAGE</span>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="categories">
          <h2>Shop by Category</h2>

          <div className="category-grid">
            <div className="category-card">
              <h3>Protein Bars</h3>
              <p>Quick energy & high protein snacks</p>
              <Link to="/products">Explore</Link>
            </div>

            <div className="category-card">
              <h3>Peanut Butter</h3>
              <p>Healthy fats for muscle growth</p>
              <Link to="/products">Explore</Link>
            </div>

            <div className="category-card">
              <h3>Wafers</h3>
              <p>Delicious & nutritious treats</p>
              <Link to="/products">Explore</Link>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features">
          <div className="features-grid">
            <div className="feature">
              <h4>High Quality</h4>
              <p>Premium ingredients tested for purity</p>
            </div>

            <div className="feature">
              <h4>Fast Shipping</h4>
              <p>Quick delivery across the country</p>
            </div>

            <div className="feature">
              <h4>Trusted Brand</h4>
              <p>Loved by athletes and fitness enthusiasts</p>
            </div>

            <div className="feature">
              <h4>Secure Payment</h4>
              <p>100% safe and secure checkout</p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
