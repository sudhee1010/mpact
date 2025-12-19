import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

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
  return (
    <>
      <Navbar />

      <style>{`
  .page-wrapper {
    padding-top: 92px;
    background-color: #2e2e2e;
  }

  .products-page {
    max-width: 1800px;
    margin: auto;
    padding: clamp(16px, 4vw, 60px);
    min-height: 100vh;
  }

  .page-title {
    text-align: center;
    font-size: clamp(26px, 4vw, 48px);
    font-weight: 900;
    color: #ffeb00;
    margin: 24px 0 40px;
  }

  .section {
    margin-bottom: 64px;
  }

  .section-title {
    color: #ffffff;
    font-size: clamp(18px, 2.2vw, 24px);
    margin-bottom: 20px;
  }

  /* ✅ GRID FIX */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: clamp(14px, 2vw, 28px);
  }

  .product-card {
    background-color: #3a3a3a;
    border: 2px solid #ffeb00;
    padding: 14px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  /* ✅ IMAGE FIX */
  .product-card img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
    margin-bottom: 10px;
  }

  .product-title {
    font-size: 14px;
    color: #ffffff;
    margin-bottom: 6px;
    line-height: 1.3;
  }

  /* ✅ SPECS FIX */
  .specs {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: center;
    margin-bottom: 8px;
  }

  .spec {
    border: 1px solid #ffeb00;
    color: #ffeb00;
    font-size: 10px;
    padding: 4px 6px;
    border-radius: 3px;
  }

  /* Limit specs visually on small screens */
  @media (max-width: 480px) {
    .specs {
      max-height: 34px;
      overflow: hidden;
    }
  }

  .rating {
    color: #ffeb00;
    font-size: 13px;
    margin-bottom: 2px;
  }

  .reviews {
    color: #cccccc;
    font-size: 12px;
    margin-bottom: 6px;
  }

  .price-box {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 4px;
  }

  .old-price {
    color: #999;
    font-size: 12px;
    text-decoration: line-through;
  }

  .discount {
    color: #00ff7f;
    font-size: 12px;
    font-weight: bold;
  }

  .price {
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 10px;
  }

  /* ✅ BUTTON ALWAYS AT BOTTOM */
  .buy-btn {
    margin-top: auto;
    width: 100%;
    padding: 10px;
    background-color: #ffeb00;
    border: none;
    font-weight: bold;
    cursor: pointer;
  }

  .see-more {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
  }

  .see-more button {
    background-color: #ffeb00;
    border: none;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
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

              <div className="see-more">
                <button>SEE MORE →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

