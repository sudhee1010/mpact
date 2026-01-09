import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ProductPage = () => {
  const [qty, setQty] = useState(1);
  const [showReviewPopup, setShowReviewPopup] = useState(false);

  // ✅ IMAGES ARRAY
  const images = [
    "/images/stawberry.png",
    "/images/grapes.png",
    "/images/pista.png",
    "/images/mango.png",
  ];

  // ✅ ACTIVE IMAGE STATE
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <>
      {/* FONT + THUMB STYLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jersey+25&display=swap');

        .thumb-box {
          border: 2px solid transparent;
          border-radius: 10px;
          overflow: hidden;
          background: #2b2b2b;
          cursor: pointer;
          transition: transform 0.25s ease, border 0.25s ease, box-shadow 0.25s ease;
        }

        .thumb-box:hover {
          border-color: #ffe600;
          transform: scale(1.05);
         
        }

        .thumb-box.active {
          border-color: #ffe600;
        }
      `}</style>

      <div style={{ background: "#2f2f2f", color: "#fff" }}>
        {/* ================= PRODUCT HERO ================= */}
        <section
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            marginLeft: "100px",
            padding: "60px 40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
          }}
        >
          {/* LEFT IMAGE */}
          <div>
            <div
              style={{
                border: "2px solid #ffe600",
                borderRadius: 13,
                overflow: "hidden",
                background: "#fff",
                width: "95%",
                height: 560,
                marginLeft: "45px",
              }}
            >
              <img
                src={activeImage}
                alt="product"
                style={{
                  width: "90%",
                  height: 570,
                  objectFit: "cover",
                }}
              />
            </div>

            {/* THUMBNAILS */}
            <div
              style={{
                marginTop: 16,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12,
                 marginLeft: "47px",
                 width: "95%",

              }}
            >
              {images.map((src, i) => (
                <div
                  key={i}
                  className={`thumb-box ${
                    activeImage === src ? "active" : ""
                  }`}
                  onClick={() => setActiveImage(src)}
                >
                  <img
                    src={src}
                    alt={`thumb-${i}`}
                    style={{
                      width: "100%",
                      height: 130,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT DETAILS ================= */}
          <div style={{ maxWidth: 520 }}>
            <h1
              style={{
                fontFamily: "'Jersey 25', sans-serif",
                fontSize: 44,
                letterSpacing: 2,
                lineHeight: "1.1",
                marginBottom: 16,
                textTransform: "uppercase",
              }}
            >
              PROTEIN WAFERS – VARIETY
              <br />
              PACK OF 10
            </h1>

            {/* RATING */}
            <div style={{ display: "flex", gap: 10, marginBottom: 26 }}>
              <div style={{ color: "#ffc107", fontSize: 18 }}>★★★★★</div>
              <span style={{ color: "#ccc", fontSize: 14 }}>
                | 198 Reviews
              </span>
            </div>

            {/* PRICE */}
            <div
              style={{
                display: "flex",
                gap: 14,
                alignItems: "baseline",
                marginBottom: 30,
              }}
            >
              <span style={{ fontSize: 36, fontWeight: 800 }}>
                RS : 2000
              </span>
              <span
                style={{
                  color: "#777",
                  textDecoration: "line-through",
                }}
              >
                RS : 2999
              </span>
              <span style={{ color: "#00ff66", fontWeight: 700 }}>
                25% OFF
              </span>
            </div>

            {/* TAGS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, max-content)",
                gap: 14,
                marginBottom: 34,
              }}
            >
              {[
                "NO PRESERVATIVES",
                "JAGGERY BASED",
                "NO ADDED COLOURS",
                "80 % PEANUT",
                "NO GLUCOSE ADDED",
                "NO PRESERVATIVES",
              ].map((tag, i) => (
                <span
                  key={i}
                  style={{
                    border: "1.5px solid #ffe600",
                    padding: "10px 16px",
                    borderRadius: 6,
                    fontSize: 12,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
{/* QUANTITY */}
<div style={{ marginBottom: 34 }}>
  {/* LABEL ON TOP */}
  <div
    style={{
      fontSize: 14,
      marginBottom: 10,
      color: "#fff",
    }}
  >
    Quantity
  </div>

  {/* QUANTITY BOX */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    border: "2px solid #ffe600",
    borderRadius: 12,
    overflow: "hidden",
    height: 52,
    background: "#2f2f2f",
    width: "fit-content",
  }}
>
  {/* MINUS */}
  <button
    onClick={() => setQty(Math.max(1, qty - 1))}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "#ffe600";
      e.currentTarget.style.color = "#000";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "#fff";
    }}
    style={{
      width: 56,
      height: "100%",
      background: "transparent",
      border: "none",
      color: "#fff",
      fontSize: 22,
      cursor: "pointer",
      borderRight: "1px solid #ffe600",
      transition: "all 0.25s ease",
    }}
  >
    −
  </button>

  {/* VALUE */}
  <div
    style={{
      width: 56,
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 18,
      fontWeight: 700,
      color: "#fff",
      borderRight: "1px solid #ffe600",
    }}
  >
    {qty}
  </div>

  {/* PLUS */}
  <button
    onClick={() => setQty(qty + 1)}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "#ffe600";
      e.currentTarget.style.color = "#000";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "#fff";
    }}
    style={{
      width: 56,
      height: "100%",
      background: "transparent",
      border: "none",
      color: "#fff",
      fontSize: 22,
      cursor: "pointer",
      transition: "all 0.25s ease",
    }}
  >
    +
  </button>
</div>
</div>

 {/* ACTION BUTTONS */}
{/* ACTION BUTTONS */}
<div style={{ display: "flex", gap: 16 }}>
  {/* ADD TO CART */}
  <Link
    to="/cart"
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "#ffeb00";
      e.currentTarget.style.color = "#000";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "#2f2f2f";
      e.currentTarget.style.color = "#fff";
    }}
    style={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      background: "#2f2f2f",
      color: "#fff",
      padding: "18px 20px",
      fontSize: 23,
      fontWeight: 900,
      borderRadius: 14,
      border: "2px solid #ffeb00",
      cursor: "pointer",
      textTransform: "uppercase",
      letterSpacing: 1,
      transition: "all 0.25s ease",
      fontFamily: "'Jersey 25', sans-serif",
      textDecoration: "none",
    }}
  >
    <img src="/icons/bag.png" alt="cart" style={{ width: 30 }} />
    ADD TO CART
  </Link>

  {/* BUY NOW */}
  <button
    style={{
      flex: 1,
      background: "#ffeb00",
      color: "#000",
      fontFamily: "'Jersey 25', sans-serif",
      padding: "18px 20px",
      fontSize: 23,
      fontWeight: 900,
      borderRadius: 14,
      border: "none",
      cursor: "pointer",
      textTransform: "uppercase",
      letterSpacing: 1,
    }}
  >
    BUY NOW
  </button>
</div>


  
</div>
          </section>

        {/* ================= RECOMMENDED PRODUCTS ================= */}

<section style={{ padding: "40px 0" }}>
    <h2
      style={{
        marginBottom: 24,
        fontWeight: 700,
        textAlign: "left",
        marginLeft: 204,
      }}
    >
      Recommended products
    </h2>
  <div
    style={{
      display: "flex",
      gap: 18,
      padding: "0 40px",
      justifyContent: "center", // ✅ CENTER ALL DIVS
      alignItems: "center",     // ✅ ALIGN DIFFERENT SIZES
    }}
  >
    {[212, 212, 212, 212, 212].map((size, i) => (
      <div
        key={i}
        style={{
          width: size,
          height: size,
          borderRadius: 8,
          border: "2px solid #ffe600",
          overflow: "hidden",
          background: "#2b2b2b",
          flexShrink: 0,
          transition: "transform 0.35s ease", // ✅ SMOOTH ZOOM
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.08)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        <img
          src="/images/chocolate.webp"
          alt="product"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.35s ease",
          }}
        />
      </div>
    ))}
  </div>
</section>


            

        {/* REVIEWS */}
  <section
  style={{
    maxWidth: 1200,
    margin: "0 auto",
    padding: 40,
    color: "#fff",
  }}
>
  {/* ================= REVIEWS ================= */}
  <section style={{ maxWidth: 1200, margin: "0 auto", padding: 40 }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 32,
        fontFamily: "'Jersey 25', sans-serif",
        fontSize: 24, 
     
      }}
    >
      <div>
        <h2>Customer Reviews</h2>
        
        <div style={{ color: "#ffe600" }}></div>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        {/* WRITE A REVIEW */}
        <button
          onClick={() => setShowReviewPopup(true)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          style={{
            background: "#ffe600",
            padding: "10px 18px",
            fontWeight: "bold",
            borderRadius: 6,
            border: "none",
            
            cursor: "pointer",
            transition: "transform 0.2s ease",
            fontFamily: "'Jersey 25', sans-serif",
            fontSize: 19,
            
          }}
        >
          WRITE A REVIEW
        </button>

        {/* TOP RATED */}
        <button
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          style={{
            background: "transparent",
            border: "1px solid #ffe600",
            color: "#ffffffff",
            padding: "10px 18px",
            borderRadius: 6,
            cursor: "pointer",
            transition: "transform 0.2s ease",
            fontFamily: "'Jersey 25', sans-serif",
            fontSize: 20,
            
          }}
        >
          TOP RATED
        </button>
      </div>
    </div>
  </section>



          {/* ================= REVIEW POPUP ================= */}
          {showReviewPopup && (
  <div
    onClick={() => setShowReviewPopup(false)}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.75)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      padding: "16px",
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        width: "100%",
        maxWidth: 1200,
        background: "#3a3a3a",
        borderRadius: 26,
        border: "2px solid #ffe600",
        padding: "clamp(20px, 4vw, 50px)",
        color: "#fff",
      }}
    >
      {/* TITLE */}
      <h2
        style={{
          fontFamily: "'Jersey 25', sans-serif",
          textAlign: "center",
          letterSpacing: 2,
          marginBottom: "clamp(20px, 4vw, 40px)",
          fontSize: "clamp(20px, 3vw, 28px)",
        }}
      >
        PROTEIN WAFERS – VARIETY PACK OF 10
      </h2>

      {/* USER */}
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          marginBottom: "clamp(20px, 4vw, 40px)",
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: "50%",
            background: "#1db954",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            fontWeight: "bold",
            flexShrink: 0,
          }}
        >
          J
        </div>
        <div>
          <div style={{ fontSize: 18 }}>John</div>
          <div style={{ fontSize: 14, opacity: 0.8 }}>
            Posting publicaly along this site
          </div>
        </div>
      </div>

      {/* STARS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(12px, 3vw, 30px)",
          marginBottom: "clamp(20px, 4vw, 40px)",
          flexWrap: "wrap",
        }}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            style={{
              fontSize: "clamp(30px, 6vw, 46px)",
              color: "#ffc107",
            }}
          >
            ★
          </span>
        ))}
      </div>

      {/* TEXTAREA */}
      <div
        style={{
          border: "2px solid #ffe600",
          borderRadius: 20,
          padding: "clamp(16px, 3vw, 24px)",
          marginBottom: "clamp(20px, 4vw, 30px)",
        }}
      >
        <textarea
          placeholder="Write your review here..."
          style={{
            
            width: "100%",
            minHeight: 120,
            maxHeight: 220,
            background: "transparent",
            border: "none",
            outline: "none",
            resize: "vertical",
            color: "#ddd",
            fontSize: "clamp(14px, 2.5vw, 15px)",
            lineHeight: 1.7,
          }}
        />
      </div>

      {/* ADD IMAGE */}
      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <button
          style={{
            background: "#4a4a2f",
            color: "#fff",
            border: "none",
            padding: "12px 26px",
            borderRadius: 30,
            cursor: "pointer",
            fontSize: "clamp(14px, 2.5vw, 15px)",
          }}
        >
          📷 Add Photos & images
        </button>
      </div>

      {/* ACTIONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => setShowReviewPopup(false)}
          style={{
            background: "#ffe600",
            color: "#000",
            border: "none",
            padding: "12px 26px",
            fontWeight: 700,
            borderRadius: 8,
            cursor: "pointer",
            minWidth: 120,
          }}
        >
          Cancel
        </button>

        <button
          onClick={() => setShowReviewPopup(false)}
          style={{
            background: "#ffe600",
            color: "#000",
            border: "none",
            padding: "12px 30px",
            fontWeight: 700,
            borderRadius: 8,
            cursor: "pointer",
            minWidth: 120,
          }}
        >
          Post
        </button>
      </div>
    </div>
  </div>
)}



          {/* Reviews Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 1fr",
              gap: 30,
            }}
          >
            {/* Left – Image Reviews */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    // background: "#171717ff",
                    border: "1px solid #ffe600",
                    borderRadius: 10,
                    padding: 16,
                    height: "50%",
                  }}
                >
                  <img
                    src="/images/image2.jpg"
                    alt="review"
                    style={{
                      width: "100%",
                      borderRadius: 10,
                      marginBottom: 12,
                    }}
                  />

                  <strong>Sanju</strong>
                  <div style={{ color: "#ffe600", margin: "6px 0" }}>★★★★★</div>

                  <p style={{ fontSize: 13, lineHeight: 1.6 }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy text
                    ever since the 1500s.
                  </p>
                </div>
              ))}
            </div>

            {/* Right – Text Reviews */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    // background: "#171717ff",
                    border: "1px solid #ffe600",
                    borderRadius: 12,
                    padding: 20,
                    height: "30%",
                    width: "120%",

                  }}
                >
                  <strong>Sanju</strong>
                  <div style={{ color: "#ffe600", margin: "6px 0" }}>★★★★★</div>

                  <p style={{ fontSize: 13, lineHeight: 1.6 }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy text
                    ever since the 1500s.
                  </p>
                </div>

              ))}
            </div>
          </div>

        </section>
<section style={{ padding: "64px 0", background: "#2f2f2f" }}>
  {/* HOVER + ZOOM (CARD ONLY) */}
  <style>{`
    .range-card {
      transition: transform 0.35s ease, box-shadow 0.35s ease;
      will-change: transform;
    }

    .range-card:hover {
      transform: scale(1.05);
      box-shadow: 0 18px 36px rgba(0,0,0,0.45);
    }
  `}</style>

  {/* TITLE */}
<h1
  style={{
    fontFamily: "'Jersey 25', sans-serif",
    fontSize: 56,
    fontWeight: 900,
    textTransform: "uppercase",
    color: "#ffe600",

    maxWidth: 2100,          // 🔥 controls text length
    margin: "0 auto 56px",  // 🔥 centers between cards
    textAlign: "center",

    letterSpacing: "1px",   // 🔥 more horizontal stretch
    lineHeight: "1.00",     // 🔥 matches Figma feel
  }}
>
  Explore Our Range
</h1>


  {/* PRODUCT GRID */}
  <div
    style={{
      maxWidth: 1230,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 28,
      padding: "0 32px",
    }}
  >
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="range-card"
        style={{
          background: "#3a3a3a",
          border: "2px solid #ffe600",
          borderRadius: 14,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: 500,
        }}
      >
        {/* IMAGE */}
        <div style={{ height: 330, overflow: "hidden" }}>
          <img
            src="/images/chocolate.webp"
            alt="Protein Wafer"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* CONTENT */}
        <div style={{ padding: "18px 18px 16px" }}>
          <div
            style={{
              fontWeight: 900,
              fontSize: 12,
              letterSpacing: "0.6px",
              marginBottom: 6,
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: "16px",
            }}
          >
            PROTEIN WAFERS – VARIETY PACK OF 10
          </div>

          <div
            style={{
              fontSize: 12,
              marginBottom: 10,
              opacity: 0.85,
              color: "#fff",
            }}
          >
            10
          </div>

          {/* PRICE */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 14,
              color: "#fff",
            }}
          >
            <span style={{ fontWeight: 800, fontSize: 14 }}>
              RS : 2000
            </span>
            <span
              style={{
                textDecoration: "line-through",
                color: "#9a9a9a",
                fontSize: 13,
              }}
            >
              RS : 2999
            </span>
          </div>

          {/* BUTTON */}
          <Link to="/checkout">
            <button
              style={{
                width: "100%",
                height: 42,
                background: "#ffe600",
                color: "#000",
                border: "none",
                fontWeight: 900,
                cursor: "pointer",
                borderRadius: 8,
                fontSize: 14,
                letterSpacing: "0.5px",
              }}
            >
              BUY NOW
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>


        <Footer />
      </div>
    </>
  );
};


export default ProductPage;