import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import MotivationalSection from "./MotivationalSection";
import VideoShowcaseSection from "./VideoShowcaseSection";
import FeaturesSection from "./FeaturesSection";
import Footer from "../components/Footer";

/* IMAGES */
import proteinGym from "../assets/rrs/protein-gym.jpg";
import img1 from "../assets/rrs/img1.jpg";
import Gym02 from "../assets/rrs/Gym02.jpg";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  /* FONT */
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Jersey+25&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  /* SCROLL */
  // const lastScrollY = useRef(0);
  // const [scrollDir, setScrollDir] = useState("down");

 useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  /* HERO */
  const heroSlides = [
    { id: 1, image: proteinGym },
    { id: 2, image: img1 },
    { id: 3, image: Gym02 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((p) => (p === heroSlides.length - 1 ? 0 : p + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  /* PRODUCTS */
  const products = [
    {
      id: 1,
      title: "EXTRA HUNGRY?",
      brand: "SNICKERS",
      name: "PROTEIN WAFERS – VARIETY PACK",
      price: 2000,
      image: img1,
      specs: ["NO PRESERVATIVES", "JAGGERY BASED", "HIGH PROTEIN"],
    },
    {
      id: 2,
      title: "EXTRA HUNGRY?",
      brand: "SNICKERS",
      name: "PROTEIN WAFERS – VARIETY PACK",
      price: 2000,
      image: proteinGym,
      specs: ["NO PRESERVATIVES", "JAGGERY BASED", "HIGH PROTEIN"],
    },
    {
      id: 3,
      title: "EXTRA HUNGRY?",
      brand: "SNICKERS",
      name: "PROTEIN WAFERS – VARIETY PACK",
      price: 2000,
      image: proteinGym,
      specs: ["NO PRESERVATIVES", "JAGGERY BASED", "HIGH PROTEIN"],
    },
    {
      id: 4,
      title: "EXTRA HUNGRY?",
      brand: "SNICKERS",
      name: "PROTEIN WAFERS – VARIETY PACK",
      price: 2000,
      image: proteinGym,
      specs: ["NO PRESERVATIVES", "JAGGERY BASED", "HIGH PROTEIN"],
    },
  ];

  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }

        .page {
          background: #000;
          color: #fff;
          font-family: 'Jersey 25', sans-serif;
          overflow-x: hidden;
        }

        /* HERO */
        .hero { background: #000; padding-top: 10px; }
        
        .hero-slider {
          position: relative;
          height: 590px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-slide {
          position: absolute;
          opacity: 0;
          transform: scale(0.95);
          transition: 0.7s ease;
        }
        .hero-slide.active {
          opacity: 1;
          transform: scale(1);
        }
        .hero-slide img {
          max-width: 900px;
          width: 100%;
          object-fit: contain;
        }
        /* HERO HEADER CONTROLS */
        .hero-header-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin: 22px 0;
        }

        /* ARROW BUTTONS */
        .nav-arrow {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: none;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .35s cubic-bezier(.16,1,.3,1);
        }

        .nav-arrow:hover {
          background: rgba(255,255,255,0.18);
          transform: scale(1.1);
        }

        /* DOT CONTAINER */
        .nav-dots {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* DOT */
        .nav-dot {
          width: 8px;
          height: 8px;
          background: #555;
          border-radius: 50%;
          transition: all .4s cubic-bezier(.16,1,.3,1);
        }

        /* ACTIVE → YELLOW PILL */
        .nav-dot.active {
          width: 28px;
          height: 8px;
          border-radius: 999px;
          background: #facc15;
        }


        /* PRODUCTS SECTION */
                
        .products-section {
          padding: 40px 16px 80px; background: #111;
        }

        .products-section h2 {
          text-align: center;
          font-size: 64px;
          color: #facc15;
          margin-bottom: 40px;
        }

        .products-grid {
          max-width: 1400px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 22px;
        }

        /* CARD */
        .product-card {
          background: linear-gradient(rgba(120,70,20,.45), #000);
          border: 2px solid rgba(180,120,40,.4);
          border-radius: 16px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(90px) scale(.95); /* DOWN → UP */
          transition: transform .7s cubic-bezier(.16,1,.3,1),
          opacity .6s ease;
        }

        /* REVERSE: UP → DOWN */
        .product-card.reverse {
          transform: translateY(-90px) scale(.95);
        }

        .product-card.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .product-card.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .product-card:hover {
          border-color: #facc15;
          box-shadow: 0 30px 60px rgba(0,0,0,.8);
        }

        /* IMAGE */
        .product-image {
          position: relative;
          height: 380px;
          background: radial-gradient(circle at bottom, #3b1d00, #000 70%);
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .product-image img {
          height: 100%;
          width: auto;
          object-fit: contain;
          transition: transform .6s ease;
        }

        .product-card:hover img {
          transform: scale(1.12);
        }

        /* TITLE ON IMAGE */
        .product-title-wrapper {
          position: absolute;
          top: 14px;
          width: 100%;
          text-align: center;
          z-index: 5;
        }

        .product-title {
          font-size: 24px;
          font-weight: 900;
          text-shadow: 0 4px 8px rgba(0,0,0,.7);
        }

        .product-brand {
          display: inline-block;
          background: #1d4ed8;
          color: #fff;
          font-size: 12px;
          font-weight: 900;
          padding: 2px 10px;
          transform: skewX(-12deg);
          margin-top: 4px;
        }
          .badge {
          position: absolute;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;              /* always above image */
          pointer-events: none;   /* prevents hover conflict */
          text-align: center;
        }

        .badge span {
          font-size: 22px;
          font-weight: 900;
          color: #fff;
          text-shadow: 0 4px 10px rgba(0,0,0,0.8);
        }

        .badge small {
          display: inline-block;
          margin-top: 4px;
          background: #1d4ed8;
          color: #fff;
          padding: 2px 10px;
          font-size: 12px;
          font-weight: 900;
          border-radius: 3px;
        }


        /* BODY */
        .card-body {
          padding: 16px;
          background: linear-gradient(#111, #000);
        }

        .product-name {
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        /* SPECS */
        .specs {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px;
          margin-bottom: 12px;
        }

        .spec {
          border: 1px solid rgba(250,204,21,.6);
          font-size: 10px;
          font-weight: 800;
          padding: 4px;
          text-align: center;
          color: #facc15;
        }

        /* PRICE + BUTTON */
        .price {
          font-size: 20px;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .buy {
          width: 100%;
          background: #facc15;
          color: #000;
          border: none;
          padding: 12px;
          font-weight: 900;
          border-radius: 8px;
          cursor: pointer;
        }

        .buy:hover {
          background: #ffd84d;
        }
        .store-locator {
          background: #facc15; 
          padding: 120px 16px; 
          text-align: center; 
        } 
        .store-locator h2 { 
          font-size: 64px; 
          font-weight: 900; 
          color: #000; 
          margin-bottom: 48px; 
        } 
        .store-map { 
          width: 100%; 
          max-width: 900px; 
          border-radius: 16px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.35); 
        }

      `}</style>

      <div className="page">
        {/* HERO */}
        <section className="hero">
          <div className="hero-slider">
            {heroSlides.map((slide, i) => (
              <div
                key={slide.id}
                className={`hero-slide ${i === currentSlide ? "active" : ""}`}
              >
                <img src={slide.image} alt="Hero" />
              </div>
            ))}
          </div>

          <div className="hero-header-controls">
            <button
              className="nav-arrow"
              onClick={() =>
                setCurrentSlide(p => p === 0 ? heroSlides.length - 1 : p - 1)
              }
            >
              <ChevronLeft />
            </button>

            <div className="nav-dots">
              {heroSlides.map((_, i) => (
                <span
                  key={i}
                  className={`nav-dot ${currentSlide === i ? "active" : ""}`}
                />
              ))}
            </div>

            <button
              className="nav-arrow"
              onClick={() =>
                setCurrentSlide(p => p === heroSlides.length - 1 ? 0 : p + 1)
              }
            >
              <ChevronRight />
            </button>
          </div>
        </section>


        {/* PRODUCTS (ONE WAY) */}
        <section className="products-section">
          <h2>FIND OUR PRODUCTS</h2>

          <div className="products-grid">
            {products.map((p, i) => {
              const triggerPoint = 300 + i * 50;
              const visible = scrollY > triggerPoint;

              return (
                <div
                  key={p.id}
                  className={`product-card ${visible ? "show" : ""}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="product-image">
                    <div className="badge">
                      <span>{p.title}</span>
                      <small>{p.brand}</small>
                    </div>
                    <img src={p.image} alt={p.name} />
                  </div>
                  

                 <div className="card-body">
                    <div className="product-name">{p.name}</div>

                    <div className="specs">
                      {p.specs.map((s, idx) => (
                        <span key={idx} className="spec">{s}</span>
                      ))}
                    </div>

                    <div className="price">₹ {p.price}</div>
                    <button className="buy">PLACE ORDER</button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <MotivationalSection />
        <FeaturesSection />
        <VideoShowcaseSection />


        <section className="store-locator">
          <h2>FIND OUR NEAREST STORE</h2>
          <img src="/store-map.png" // ✅ valid image 
            alt="Store locator map" className="store-map"
          />
        </section>



        <Footer />
      </div>
    </>
  );
}
