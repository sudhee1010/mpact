import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import Footer from "../components/Footer";

// Mock components - replace with your actual imports
const Navbar = () => <div style={{height: '60px', background: '#111', borderBottom: '2px solid #ffeb00'}}></div>;

/* ================= PRODUCT DATA ================= */
const PRODUCT_DATA = {
  "PROTEIN BARS": [
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
  ],

  "PEANUT BUTTER": [
    {
      id: 5,
      title: "Peanut Butter – Crunchy",
      oldPrice: 499,
      price: 350,
      discount: "30% OFF",
      rating: 5,
      reviews: 221,
      image: "/images/Product1.png",
      specs: ["100% PEANUTS", "NO PALM OIL", "NO ADDED SUGAR"],
    },
    {
      id: 6,
      title: "Peanut Butter – Smooth",
      oldPrice: 420,
      price: 320,
      discount: "24% OFF",
      rating: 4,
      reviews: 167,
      image: "/images/Product1.png",
      specs: ["SMOOTH TEXTURE", "HIGH PROTEIN", "NO PRESERVATIVES"],
    },
    {
      id: 7,
      title: "Peanut Butter – Honey",
      oldPrice: 520,
      price: 380,
      discount: "27% OFF",
      rating: 5,
      reviews: 190,
      image: "/images/Product1.png",
      specs: ["HONEY INFUSED", "NATURAL SWEET", "NO PALM OIL"],
    },
    {
      id: 8,
      title: "Peanut Butter – Dark Roast",
      oldPrice: 480,
      price: 360,
      discount: "25% OFF",
      rating: 4,
      reviews: 134,
      image: "/images/Product1.png",
      specs: ["DARK ROASTED", "RICH FLAVOUR", "NO ADDED SUGAR"],
    },
  ],

  "WAFERS": [
    {
      id: 9,
      title: "Protein Wafer – Chocolate",
      oldPrice: 199,
      price: 150,
      discount: "25% OFF",
      rating: 4,
      reviews: 112,
      image: "/images/Product1.png",
      specs: ["CRISPY WAFER", "LOW SUGAR", "HIGH PROTEIN"],
    },
    {
      id: 10,
      title: "Protein Wafer – Vanilla",
      oldPrice: 180,
      price: 140,
      discount: "22% OFF",
      rating: 3,
      reviews: 76,
      image: "/images/Product1.png",
      specs: ["VANILLA FLAVOUR", "LIGHT SNACK", "LOW FAT"],
    },
    {
      id: 11,
      title: "Protein Wafer – Strawberry",
      oldPrice: 210,
      price: 160,
      discount: "24% OFF",
      rating: 5,
      reviews: 148,
      image: "/images/Product1.png",
      specs: ["FRUIT FLAVOUR", "HIGH PROTEIN", "NO PRESERVATIVES"],
    },
    {
      id: 12,
      title: "Protein Wafer – Hazelnut",
      oldPrice: 230,
      price: 170,
      discount: "26% OFF",
      rating: 4,
      reviews: 101,
      image: "/images/Product1.png",
      specs: ["HAZELNUT RICH", "CRUNCHY", "ENERGY BOOST"],
    },
  ],
};

export default function Products() {
  const [quantities, setQuantities] = useState({});
  const [favorites, setFavorites] = useState({});

  const handleQuantityChange = (productId, delta) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta)
    }));
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

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
  color: black;
  -webkit-text-stroke: 2px #ffeb00;
  }

  .section {
    margin-bottom: 64px;
  }

  .section-title {
    color: #ffffff;
    font-size: clamp(18px, 2.2vw, 24px);
    margin-bottom: 20px;
    padding-left: 180px;
    max-width: 1401px;
  }

  /* ================= PRODUCT GRID ================= */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 291.51px);
  gap: 18px;
  justify-content: center;
  max-width: 1380px;
  margin: 30px auto;
  padding: 0 8px;
}

/* ================= PRODUCT CARD ================= */
.product-card {
  width: 291.51px;
  height: 635.17px;
  background: #151515;
  border: 1.34px solid #ffeb00;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.product-card:hover {
  // transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

/* ================= DISCOUNT BADGE ================= */
.discount-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #ff0000;
  color: white;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 800;
  border-radius: 4px;
  z-index: 10;
}

/* ================= FAVORITE BUTTON ================= */
.favorite-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #ffeb00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.favorite-btn:hover {
  background: rgba(255, 235, 0, 0.2);
  transform: scale(1.1);
}

.favorite-btn.active {
  background: #ffeb00;
}

.favorite-btn svg {
  width: 20px;
  height: 20px;
}

.favorite-btn.active svg {
  fill: #ff0000;
  stroke: #ff0000;
}

.favorite-btn:not(.active) svg {
  stroke: #ffeb00;
  fill: none;
}

/* ================= IMAGE ================= */
.product-image-container {
  position: relative;
  width: 100%;
  height: 360px;
  overflow: hidden;
}

.product-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product-card:hover img {
  transform: scale(1.06);
}

/* ================= TITLE ================= */
.product-title {
  font-size: 14px;
  font-weight: 800;
  line-height: 1.3;
  color: #ffffff;
  padding: 12px 12px 0;
}

/* ================= SPECS ================= */
.specs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 6px 12px;
}

.spec {
  font-size: 10px;
  border: 1px solid #ffeb00;
  padding: 3px 6px;
  border-radius: 4px;
  color: #ffeb00;
  white-space: nowrap;
}

/* ================= RATING ================= */
.rating {
  color: #ffeb00;
  font-size: 12px;
  font-weight: 600;
  padding: 0 12px;
}

.reviews {
  color: #aaa;
  font-size: 12px;
  padding: 0 12px;
}

/* ================= PRICE ================= */
.price-box {
  padding: 6px 12px 0;
}

.old-price {
  font-size: 12px;
  color: #888;
  text-decoration: line-through;
}

.price {
  padding: 0 12px;
  font-size: 20px;
  color: #4caf50;
  font-weight: 800;
  line-height: 1.2;
}

.discount-text {
  display: inline-block;
  margin-left: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #4caf50;
}

/* ================= QUANTITY SELECTOR ================= */
.quantity-selector {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
}

.quantity-btn {
  width: 32px;
  height: 32px;
  background: transparent;
  border: 2px solid #ffeb00;
  color: #ffeb00;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.quantity-btn:hover {
  background: #ffeb00;
  color: #000;
}

.quantity-display {
  min-width: 30px;
  text-align: center;
  color: #ffeb00;
  font-size: 16px;
  font-weight: 700;
}

/* ================= ACTION BUTTONS ================= */
.action-buttons {
  display: flex;
  gap: 8px;
  padding: 0 12px 12px;
  margin-top: auto;
}

.add-to-cart-btn,
.buy-btn {
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  font-family: "Jersey 25", cursive;
  font-weight: 800;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.25s ease;
  border: 1px solid #ffeb00;
}

.add-to-cart-btn {
  background: transparent;
  color: #ffeb00;
}

.add-to-cart-btn:hover {
  background: rgba(255, 235, 0, 0.1);
}

.buy-btn {
  background: #ffeb00;
  color: #000;
}

.buy-btn:hover {
  background: #fff;
  border-color: #fff;
}

/* ================= MOBILE FIX ================= */
@media (max-width: 480px) {
  .product-card {
    width: 100%;
  }

  .product-image-container {
    height: 300px;
  }

  .specs {
    max-height: 34px;
    overflow: hidden;
  }
}

  .see-more {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
    max-width: 1401px;
  }

  .see-more button {
    background-color: #ffeb00;
    border: none;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
  }

  /* ================= MOBILE & TABLET FIXS ================= */
@media (max-width: 1024px) {
  .section-title {
    padding-left: 0;
    text-align: center;
  }

  .see-more {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 18px;
    margin-bottom: 16px;
  }

  .see-more button {
    width: auto;
    padding: 10px 24px;
  }
}

`}</style>

      <div className="page-wrapper">
        <div className="products-page">
          <h1 className="page-title">FIND OUR PRODUCTS</h1>

          {Object.keys(PRODUCT_DATA).map((section) => (
            <div className="section" key={section}>
              <h2 className="section-title">{section}</h2>

              <div className="product-grid">
                {PRODUCT_DATA[section].map((product) => (
                  <div className="product-card" key={product.id}>
                    <div className="discount-badge">{product.discount}</div>
                    
                    <button 
                      className={`favorite-btn ${favorites[product.id] ? 'active' : ''}`}
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart />
                    </button>

                    <div className="product-image-container">
                      <img src={product.image} alt={product.title} />
                    </div>

                    <div className="product-title">{product.title}</div>

                    <div className="specs">
                      {product.specs.map((spec, i) => (
                        <span className="spec" key={i}>
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="rating">
                      {"★".repeat(product.rating)}
                      {"☆".repeat(5 - product.rating)}
                    </div>

                    <div className="reviews">({product.reviews})</div>

                    <div className="price-box">
                      <span className="old-price">₹{product.oldPrice}</span>
                    </div>

                    <div className="price">₹{product.price}</div>

                    <div className="quantity-selector">
                      <button 
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(product.id, -1)}
                      >
                        −
                      </button>
                      <span className="quantity-display">
                        {quantities[product.id] || 1}
                      </span>
                      <button 
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(product.id, 1)}
                      >
                        +
                      </button>
                    </div>

                    <div className="action-buttons">
                      <button className="add-to-cart-btn">Add to Cart</button>
                      <Link to="/productspec">
                        <button className="buy-btn">BUY NOW</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="see-more">
                <Link to="/seeMore">
                  <button>SEE MORE →</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}