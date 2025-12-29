import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

/* ================= PRODUCT DATA ================= */
const PRODUCT_DATA = {
  "PROTIEN BARS": [
    {
      id: 1,
      title: "Protein Bar – Chocolate",
      oldPrice: 299,
      price: 180,
      discount: "40% OFF",
      rating: 5,
      reviews: 199,
      image: "/images/Product1.png",
      specs: ["NO PRESERVATIVES", "HIGH PROTEIN", "NO ADDED SUGAR"],
    },
    {
      id: 2,
      title: "Protein Bar – Peanut",
      oldPrice: 260,
      price: 200,
      discount: "23% OFF",
      rating: 4,
      reviews: 142,
      image: "/images/Product1.png",
      specs: ["JAGGERY BASED", "NO GLUCOSE", "RICH PEANUT"],
    },
    {
      id: 3,
      title: "Protein Bar – Almond",
      oldPrice: 280,
      price: 220,
      discount: "21% OFF",
      rating: 5,
      reviews: 175,
      image: "/images/Product1.png",
      specs: ["ALMOND RICH", "NO PRESERVATIVES", "HIGH ENERGY"],
    },
    {
      id: 4,
      title: "Protein Bar – Caramel",
      oldPrice: 240,
      price: 190,
      discount: "20% OFF",
      rating: 4,
      reviews: 98,
      image: "/images/Product1.png",
      specs: ["SOFT CARAMEL", "NO ADDED COLOURS", "HIGH PROTEIN"],
    },
    {
      id: 5,
      title: "Protein Bar – Caramel",
      oldPrice: 240,
      price: 190,
      discount: "20% OFF",
      rating: 4,
      reviews: 98,
      image: "/images/Product1.png",
      specs: ["SOFT CARAMEL", "NO ADDED COLOURS", "HIGH PROTEIN"],
    },
    {
      id: 6,
      title: "Protein Bar – Caramel",
      oldPrice: 240,
      price: 190,
      discount: "20% OFF",
      rating: 4,
      reviews: 98,
      image: "/images/Product1.png",
      specs: ["SOFT CARAMEL", "NO ADDED COLOURS", "HIGH PROTEIN"],
    },
    {
      id: 7,
      title: "Protein Bar – Caramel",
      oldPrice: 240,
      price: 190,
      discount: "20% OFF",
      rating: 4,
      reviews: 98,
      image: "/images/Product1.png",
      specs: ["SOFT CARAMEL", "NO ADDED COLOURS", "HIGH PROTEIN"],
    },
    {
      id: 8,
      title: "Protein Bar – Caramel",
      oldPrice: 240,
      price: 190,
      discount: "20% OFF",
      rating: 4,
      reviews: 98,
      image: "/images/Product1.png",
      specs: ["SOFT CARAMEL", "NO ADDED COLOURS", "HIGH PROTEIN"],
    },
    {
      id: 9,
      title: "Protein Bar – Caramel",
      oldPrice: 240,
      price: 190,
      discount: "20% OFF",
      rating: 4,
      reviews: 98,
      image: "/images/Product1.png",
      specs: ["SOFT CARAMEL", "NO ADDED COLOURS", "HIGH PROTEIN"],
    },
    {
      id: 10,
      title: "Protein Bar – Caramel",
      oldPrice: 240,
      price: 190,
      discount: "20% OFF",
      rating: 4,
      reviews: 98,
      image: "/images/Product1.png",
      specs: ["SOFT CARAMEL", "NO ADDED COLOURS", "HIGH PROTEIN"],
    },
    {
      id: 11,
      title: "Protein Bar – Caramel",
      oldPrice: 240,
      price: 190,
      discount: "20% OFF",
      rating: 4,
      reviews: 98,
      image: "/images/Product1.png",
      specs: ["SOFT CARAMEL", "NO ADDED COLOURS", "HIGH PROTEIN"],
    },
    {
      id: 12,
      title: "Protein Bar – Caramel",
      oldPrice: 240,
      price: 190,
      discount: "20% OFF",
      rating: 4,
      reviews: 98,
      image: "/images/Product1.png",
      specs: ["SOFT CARAMEL", "NO ADDED COLOURS", "HIGH PROTEIN"],
    },
  ],
};

export default function Products() {
  return (
    <>
      <Navbar />

      <style>{`
.page-wrapper {
  padding-top: 35px;
}

.products-page {
  max-width: 1800px;
  margin: auto;
  padding: clamp(16px, 4vw, 60px);
  min-height: 100vh;
}

.page-title {
  text-align: center;
  font-family: 'Jersey 25', cursive;
  font-size: clamp(32px, 6vw, 72px);
  font-weight: 400;
  margin: 24px 0 40px;
  color: transparent;
  -webkit-text-stroke: 2px #ffeb00;
}

/* ===== GRID ===== */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

/* ===== CARD ===== */
.product-card {
  background: #2f2f2f;
  border: 2px solid #ffeb00;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ===== IMAGE ===== */
.product-card img {
  width: 100%;
  height: 320px;
  object-fit: cover;
}

/* ===== CONTENT ===== */
.product-title {
  padding: 12px;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
}

/* ===== SPECS ===== */
.specs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  padding: 0 10px 10px;
}

.spec {
  border: 1px solid #ffeb00;
  color: #ffeb00;
  font-size: 10px;
  padding: 4px 6px;
  border-radius: 3px;
}

/* ===== RATING ===== */
.rating {
  text-align: center;
  color: #ffeb00;
  font-size: 13px;
}

.reviews {
  text-align: center;
  color: #bdbdbd;
  font-size: 12px;
  margin-bottom: 8px;
}

/* ===== PRICE ===== */
.price-box {
  text-align: center;
  font-size: 12px;
}

.old-price {
  color: #888;
  text-decoration: line-through;
}

.discount {
  color: #00ff7f;
  font-weight: bold;
  margin-left: 6px;
}

.price {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin: 8px 0;
}

/* ===== BUTTON ===== */
.buy-btn {
  margin-top: auto;
  width: 100%;
  padding: 14px;
  background-color: #ffeb00;
  border: none;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
}

.buy-btn:hover {
  background: #fff200;
}

@media (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}

`}</style>

      <div className="page-wrapper">
        <div className="products-page">
          <h1 className="page-title">FIND OUR PRODUCTS</h1>

          {/* ✅ ALL CARDS – NO HEADINGS */}
          <div className="product-grid">
            {PRODUCT_DATA["PROTIEN BARS"].map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className="product-title">{product.title}</div>

                <div className="specs">
                  {product.specs.map((spec, i) => (
                    <span className="spec" key={i}>{spec}</span>
                  ))}
                </div>

                <div className="rating">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </div>

                <div className="reviews">⭐ {product.reviews} Reviews</div>

                <div className="price-box">
                  <span className="old-price">₹{product.oldPrice}</span>
                  <span className="discount">{product.discount}</span>
                </div>

                <div className="price">RS : {product.price}</div>

                <Link to="/productspec">
                  <button className="buy-btn">Place Order</button>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
