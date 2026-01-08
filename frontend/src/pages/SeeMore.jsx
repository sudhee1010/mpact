import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";

/* ================= COMPONENT ================= */

export default function ProductPage({
  products = [],
  totalPages = 1,
  onPageChange = () => {},
}) {
  const [page, setPage] = useState(1);

  const data = useMemo(() => {
    return products.length ? products : MOCK_PRODUCTS;
  }, [products]);

  const handleNext = useCallback(() => {
    if (page < totalPages) {
      const next = page + 1;
      setPage(next);
      onPageChange(next);
    }
  }, [page, totalPages, onPageChange]);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        handleNext();
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleNext]);

  return (
    <>
      <div className="page">
        <header className="header">
          <h1>Products</h1>
        </header>

        <div className="products">
          {data.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* ================= INTERNAL CSS ================= */}
      <style jsx>{`
        body {
          margin: 0;
          background: #0d0d0d;
          font-family: Inter, system-ui, sans-serif;
        }

        .page {
          max-width: 1380px;
          margin: auto;
          padding: 20px 20px 40px;
          color: #fff;
        }

        .products {
          display: grid;
          grid-template-columns: repeat(auto-fill, 291.51px);
          gap: 18px;
          justify-content: center;
        }

        /* ===== CARD ===== */
        .card {
          width: 291.51px;
          height: 635.17px;
          background: #151515;
          border-radius: 6.69px;
          border: 1.34px solid #ffeb00;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 42px rgba(255, 235, 0, 0.25);
        }

        /* ===== IMAGE ===== */
        .imageWrap {
          position: relative;
          height: 300px; /* increased height */
          overflow: hidden;
        }

        .imageWrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .card:hover img {
          transform: scale(1.06);
        }

        .discount {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #ff4d4f;
          color: #fff;
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: 700;
          z-index: 2;
        }

        .fav {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #111;
          border: none;
          padding: 6px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 2;
        }

        .fav svg {
          width: 18px;
          height: 18px;
          fill: none;
          stroke: #fff;
          stroke-width: 2;
        }

        .fav:hover svg {
          stroke: #ffeb00;
        }

        /* ===== INFO ===== */
        .info {
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }

        .info h3 {
          font-size: 14px;
          font-weight: 800;
          line-height: 1.3;
        }

        .specs {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .specs span {
          font-size: 10px;
          border: 1px solid #ffeb00;
          padding: 3px 6px;
          border-radius: 4px;
          color: #ffeb00;
          white-space: nowrap;
        }

        .rating {
          color: #ffeb00;
          font-size: 12px;
          font-weight: 600;
        }

        .rating span {
          color: #aaa;
          margin-left: 6px;
        }

        .price {
          font-size: 12px;
          color: #888;
          line-height: 1.2;
        }

        .price strong {
          color: #ffeb00;
          font-size: 18px;
          display: block;
        }

        .price .off {
          color: #4caf50;
          font-size: 12px;
          font-weight: 600;
        }

        /* ===== QTY ===== */
        .qty {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 4px;
        }

        .qty button {
          width: 28px;
          height: 28px;
          border-radius: 4px;
          border: 1px solid #ffeb00;
          background: transparent;
          color: #ffeb00;
          cursor: pointer;
          font-weight: 700;
        }

        /* ===== ACTIONS ===== */
        .actions {
          margin-top: auto;
          display: flex;
          gap: 8px;
        }

        .cartBtn,
        .buyBtn {
          flex: 1;
          padding: 10px;
          border-radius: 6px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .cartBtn {
          background: transparent;
          border: 1px solid #ffeb00;
          color: #fff;
        }

        .cartBtn:hover {
          background: #ffeb00;
          color: #000;
        }

        .buyBtn {
          background: #111;
          border: 1px solid #ffeb00;
          color: #ffeb00;
        }

        .buyBtn:hover {
          background: #ffeb00;
          color: #000;
        }
      `}</style>
    </>
  );
}

/* ================= CARD ================= */

const ProductCard = ({ product }) => {
  const [qty, setQty] = useState(1);

  return (
    <div className="card">
      <div className="imageWrap">
        <span className="discount">25% OFF</span>
        <img src={product.image} alt={product.title} />
        <button className="fav">
          <HeartIcon />
        </button>
      </div>

      <div className="info">
        <h3>{product.title}</h3>

        <div className="specs">
          {product.specs.map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>

        <div className="rating">
          ★★★★☆ <span>({product.reviews})</span>
        </div>

        <div className="price">
          <del>₹{product.oldPrice}</del>
          <strong>₹{product.price}</strong>
          <span className="off">25% OFF</span>
        </div>

        <div className="qty">
          <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>

        <div className="actions">
          <button className="cartBtn">Add to Cart</button>
          <button className="buyBtn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

/* ================= MOCK DATA (UNCHANGED) ================= */

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "Protein Bar – Caramel",
    price: 190,
    oldPrice: 240,
    rating: 4,
    reviews: 98,
    image: "/images/Product1.png",
    specs: ["SOFT CARAMEL", "HIGH PROTEIN", "NO ADDED COLOURS"],
  },
  {
    id: 2,
    title: "Protein Bar – Chocolate",
    price: 195,
    oldPrice: 250,
    rating: 5,
    reviews: 112,
    image: "/images/Product1.png",
    specs: ["RICH CHOCOLATE", "20g PROTEIN", "LOW SUGAR"],
  },
  {
    id: 3,
    title: "Protein Bar – Peanut Butter",
    price: 200,
    oldPrice: 260,
    rating: 4,
    reviews: 87,
    image: "/images/Product1.png",
    specs: ["PEANUT BUTTER", "HIGH FIBER", "ENERGY BOOST"],
  },
  {
    id: 4,
    title: "Protein Bar – Almond Crunch",
    price: 210,
    oldPrice: 270,
    rating: 5,
    reviews: 145,
    image: "/images/Product1.png",
    specs: ["ALMOND CRUNCH", "GLUTEN FREE", "HIGH PROTEIN"],
  },
  {
    id: 5,
    title: "Protein Bar – Cookies & Cream",
    price: 220,
    oldPrice: 290,
    rating: 4,
    reviews: 134,
    image: "/images/Product1.png",
    specs: ["COOKIES & CREAM", "LOW CARB", "HIGH PROTEIN"],
  },
  {
    id: 6,
    title: "Protein Bar – Vanilla Bliss",
    price: 185,
    oldPrice: 235,
    rating: 4,
    reviews: 76,
    image: "/images/Product1.png",
    specs: ["VANILLA FLAVOR", "NO ARTIFICIAL SWEETENERS", "HIGH PROTEIN"],
  },
  {
    id: 7,
    title: "Protein Bar – Coffee Mocha",
    price: 205,
    oldPrice: 265,
    rating: 5,
    reviews: 158,
    image: "/images/Product1.png",
    specs: ["COFFEE MOCHA", "CAFFEINE BOOST", "LOW SUGAR"],
  },
  {
    id: 8,
    title: "Protein Bar – Dark Chocolate",
    price: 215,
    oldPrice: 275,
    rating: 5,
    reviews: 191,
    image: "/images/Product1.png",
    specs: ["DARK CHOCOLATE", "ANTIOXIDANTS", "HIGH PROTEIN"],
  },
  {
    id: 9,
    title: "Protein Bar – Strawberry",
    price: 195,
    oldPrice: 245,
    rating: 4,
    reviews: 69,
    image: "/images/Product1.png",
    specs: ["STRAWBERRY FLAVOR", "FRUIT INFUSED", "LOW FAT"],
  },
  {
    id: 10,
    title: "Protein Bar – Banana Nut",
    price: 210,
    oldPrice: 270,
    rating: 4,
    reviews: 103,
    image: "/images/Product1.png",
    specs: ["BANANA NUT", "NATURAL FLAVORS", "ENERGY BOOST"],
  },
  {
    id: 11,
    title: "Protein Bar – Honey Oats",
    price: 180,
    oldPrice: 230,
    rating: 4,
    reviews: 94,
    image: "/images/Product1.png",
    specs: ["HONEY OATS", "WHOLE GRAINS", "DIGESTION FRIENDLY"],
  },
  {
    id: 12,
    title: "Protein Bar – Coconut Crunch",
    price: 205,
    oldPrice: 260,
    rating: 5,
    reviews: 167,
    image: "/images/Product1.png",
    specs: ["COCONUT CRUNCH", "MCT FATS", "HIGH PROTEIN"],
  },
  {
    id: 13,
    title: "Protein Bar – Orange Zest",
    price: 190,
    oldPrice: 240,
    rating: 4,
    reviews: 58,
    image: "/images/Product1.png",
    specs: ["ORANGE ZEST", "VITAMIN C", "REFRESHING TASTE"],
  },
  {
    id: 14,
    title: "Protein Bar – Mint Chocolate",
    price: 215,
    oldPrice: 275,
    rating: 5,
    reviews: 121,
    image: "/images/Product1.png",
    specs: ["MINT CHOCOLATE", "COOLING EFFECT", "LOW SUGAR"],
  },
  {
    id: 15,
    title: "Protein Bar – Blueberry",
    price: 200,
    oldPrice: 255,
    rating: 4,
    reviews: 73,
    image: "/images/Product1.png",
    specs: ["BLUEBERRY", "ANTIOXIDANTS", "IMMUNITY BOOST"],
  },
  {
    id: 16,
    title: "Protein Bar – Classic Mix",
    price: 185,
    oldPrice: 235,
    rating: 4,
    reviews: 89,
    image: "/images/Product1.png",
    specs: ["MIXED FLAVORS", "DAILY PROTEIN", "ALL-NATURAL"],
  },
];

/* ================= ICON ================= */

const HeartIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 21s-6.7-4.4-9.3-7.6C-1.1 8.5 2.3 3 7.3 5.1 9 6 10.2 7.4 12 9c1.8-1.6 3-3 4.7-3.9 5-2.1 8.4 3.4 4.6 8.3C18.7 16.6 12 21 12 21z" />
  </svg>
);
