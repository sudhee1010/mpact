import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ProductPage = () => {
  const [qty, setQty] = useState(1);

  const qtyBtn = {
    background: "transparent",
    color: "#fff",
    border: "none",
    padding: "10px 14px",
    cursor: "pointer",
    fontSize: 18,
  };

  return (
    <div style={{ color: "#fff", fontFamily: "Arial", background: "#1c1c1c" }}>
      {/* PRODUCT SECTION */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: 40,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
        }}
      >
        {/* LEFT SIDE */}
        <div>
          {/* MAIN IMAGE */}
          <div
            style={{
              background: "#242323ff",
              padding: 0,
              borderRadius: 12,
              marginBottom: 17,
            }}
          >
            <img
              src="/images/proteins.avif"
              alt="product"
              style={{ width: "100%", borderRadius: 12 }}
            />
          </div>

          {/* THUMBNAILS */}
          <div
            style={{
              height: "200px",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
              
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  backgroundImage: `url('/images/chocolate.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 120,
                  padding: 1,
                  borderRadius: 8,
                  border: "1px solid #ffffffff",
                  cursor: "pointer",
                  
                }}
              >
               
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 10 }}>
            PROTEIN WAFERS – <br /> VARIETY PACK OF 10
          </h1>

          <p style={{ color: "#ffe600", marginBottom: 4 }}>
            ★★★★★ (198 Reviews)
          </p>

          <p style={{ color: "#4ade80", fontWeight: "bold" }}>25% OFF</p>

          <h2 style={{ marginBottom: 16 }}>RS : 2000</h2>

          {/* TAGS */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "NO PRESERVATIVES",
              "JAGGERY BASED",
              "NO GLUCOSE ADDED",
               "80% PEANUT",
              "NO ADDED COLOURS" 

            ].map((tag) => (
              <span
                key={tag}
                style={{
                  border: "1px solid #ffe600",
                  padding: "6px 12px",
                  borderRadius: 6,
                  fontSize: 15,
                  color: "#ffffffff",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* DESCRIPTION */}
          <p
            style={{
              color: "#ccc",
              fontSize: 14,
              lineHeight: 1.6,
              margin: "20px 0",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

     {/* QTY + BUY + CART */}
<div
  style={{
    display: "flex",
    gap: 16,
    alignItems: "center",
    marginBottom: 24,
  }}
>
  {/* QUANTITY */}
  <div
    style={{
      display: "flex",
      border: "1px solid #555",
      borderRadius: 6,
      alignItems: "center",
    }}
  >
    <button
      style={qtyBtn}
      onClick={() => setQty((prev) => Math.max(1, prev - 1))}
    >
      -
    </button>

    <div
      style={{
        padding: "10px 16px",
        minWidth: 40,
        textAlign: "center",
      }}
    >
      {qty}
    </div>

    <button
      style={qtyBtn}
      onClick={() => setQty((prev) => prev + 1)}
    >
      +
    </button>
  </div>

  {/* BUY NOW */}
  <Link to="/checkout" style={{ flex: 1 }}>
    <button
      style={{
        width: "100%",
        background: "#ffe600",
        border: "none",
        padding: "14px",
        fontWeight: "bold",
        borderRadius: 8,
        cursor: "pointer",
        fontSize: 16,
      }}
    >
      BUY NOW
    </button>
  </Link>

  {/* CART BUTTON */}
  <Link to="/cart" style={{ flex: 1 }}>
<button
  title="Add to cart"
  onClick={() => {
    console.log("Added to cart", { qty });
  }}
  style={{
    width: 52,
    height: 47,
    background: "#ffe600",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <img
    src="/icons/bag.png"
    alt="cart"
    style={{
      width: 24,
      height: 24,
      objectFit: "contain",
    }}
  />
</button>
</Link>
</div>


          {/* RECOMMENDED PRODUCTS */}
          <h3 style={{ marginBottom: 12 }}>Recommended products</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              // <div
              //   key={i}
              //   style={{
              //     background: "#2a2a2a",
              //     padding: 10,
              //     borderRadius: 8,
              //     border: "1px solid #ffffffff",
              //   }}
              // >
              //   <img
              //     src={`/images/chocolate.webp`}
              //     alt="recommended"
              //     style={{
              //       width: "100%",
              //       height: 90,
              //       objectFit: "contain",
              //     }}
              //   />
              // </div>
                     <div
                key={i}
                style={{
                  backgroundImage: `url('/images/goku.jpeg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 120,
                  padding: 1,
                  borderRadius: 8,
                  border: "1px solid #ffffffff",
                  cursor: "pointer",
                  
                }}
              >
               
              </div>
            ))}
          </div>
        </div>
      </section>
    
{/* EXPLORE */}
<section style={{ padding: "60px 0", background: "#1c1c1c" }}>
  {/* PRODUCT GRID */}
  <div
    style={{
      maxWidth: 1300,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 30,
      padding: "0 30px",
    }}
  >
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        style={{
          background: "#353434ff",
          border: "1px solid #ffe600",
          padding: 16,
          borderRadius: 6,
          textAlign: "center",
        }}
      >
        {/* IMAGE BOX */}
        <div
          style={{
            borderRadius: 6,
            marginBottom: 12,
          }}
        >
          <img
            src="/images/chocolate.webp"
            alt="Protein Bar"
            style={{
              width: "100%",
              height: 220,
              objectFit: "contain",
            }}
          />
        </div>

        {/* PRODUCT NAME */}
        <p style={{ color: "#fff", fontSize: 16, marginBottom: 10 }}>
          Protein Powder
        </p>

        {/* TAGS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 10,
          }}
        >
          {[
            "No Preservatives",
            "Jaggery Based",
            "No Glucose Added",
            "80% Peanut",
            "No Added Colours",
          ].map((tag, idx) => (
            <span
              key={idx}
              style={{
                border: "1px solid #ffe600",
                color: "#fff",
                fontSize: 11,
                padding: "4px 8px",
                borderRadius: 4,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* RATING */}
        <div style={{ color: "#ffe600", marginBottom: 4 }}>
          ★★★★★
        </div>

        {/* REVIEWS */}
        <div style={{ color: "#ccc", fontSize: 12, marginBottom: 8 }}>
          ⭐ 120 Reviews
        </div>

        {/* PRICE */}
        <div style={{ marginBottom: 6 }}>
          <span
            style={{
              color: "#999",
              textDecoration: "line-through",
              marginRight: 6,
            }}
          >
            ₹240
          </span>
          <span style={{ color: "#00ff66", fontSize: 13 }}>
            25% OFF
          </span>
        </div>

        <div
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 12,
          }}
        >
          RS : 180
        </div>

          <Link to="/checkout" style={{ flex: 1 }}>
        {/* BUTTON */}
        <button
          style={{
            width: "100%",
            background: "#ffe600",
            color: "#000",
            border: "none",
            padding: "12px 0",
            fontWeight: 700,
            cursor: "pointer",
            borderRadius: 4,
          }}
        >
          Buy Now
        </button>
        </Link>
      </div>
    ))}
  </div>

  {/* SEE MORE BUTTON */}
  <div
    style={{
      maxWidth: 1300,
      margin: "30px auto 0",
      padding: "0 30px",
      display: "flex",
      justifyContent: "flex-end",
    }}
  >
    <button
      style={{
        background: "#ffe600",
        color: "#000",
        border: "none",
        padding: "10px 20px",
        fontWeight: 700,
        cursor: "pointer",
        borderRadius: 4,
      }}
    >
      SEE MORE →
    </button>
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
  {/* Header */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 32,
    }}
  >
    <div>
      <h2 style={{ margin: 0 }}>REVIEWS (111)</h2>
      <div style={{ color: "#ffe600", marginTop: 6 }}>★★★★★</div>
    </div>

    <div style={{ display: "flex", gap: 12 }}>
      <button
        style={{
          background: "#ffe600",
          border: "none",
          padding: "10px 18px",
          fontWeight: "bold",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        WRITE A REVIEW
      </button>

      <button
        style={{
          background: "transparent",
          border: "1px solid #ffe600",
          color: "#ffe600",
          padding: "10px 18px",
          fontWeight: "bold",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        TOP RATED
      </button>
    </div>
  </div>

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
            src="/images/mpact.png"
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


<section style={{ padding: "60px 0", background: "#1c1c1c" }}>
  <h1
    style={{
      fontFamily: "'Khand', sans-serif", // closest match to Figma
      fontSize: "90px",
      fontWeight: 900,
      textAlign: "center",
      textTransform: "uppercase",
      color: "transparent",
      WebkitTextStroke: "2px #ffe600",
      textStroke: "4px #ffe600", // fallback
      lineHeight: "400px",
      letterSpacing: "1px",
      margin: 0,
    }}
  >
    Explore Our Range
  </h1>



{/* PRODUCT GRID WRAPPER */}
<div style={{ position: "relative", paddingBottom: 40 }}>
  {/* PRODUCT GRID */}
  <div
    style={{
      maxWidth: 1500,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 30,
      padding: "0 30px",
    }}
  >
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        style={{
          background: "#3a3a3a",
          border: "2px solid #ffe600",
          padding: 16,
          borderRadius: 6,
          textAlign: "center",
        }}
      >
        {/* IMAGE BOX */}
        <div
          style={{
            borderRadius: 6,
            marginBottom: 12,
          }}
        >
          <img
            src="/images/chocolate.webp"
            alt="Protein Bar"
            style={{
              width: "100%",
              height: 220,
              objectFit: "contain",
            }}
          />
        </div>

        {/* PRODUCT NAME */}
        <p style={{ color: "#fff", fontSize: 16, marginBottom: 10 }}>
          Protein Pow
        </p>

        {/* TAGS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 10,
          }}
        >
          {[
            "No Preservatives",
            "Jaggery Based",
            "No Glucose Added",
            "80% Peanut",
            "No Added Colours",
          ].map((tag, idx) => (
            <span
              key={idx}
              style={{
                border: "1px solid #ffe600",
                color: "#fff",
                fontSize: 11,
                padding: "4px 8px",
                borderRadius: 4,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* RATING */}
        <div style={{ color: "#ffe600", marginBottom: 4 }}>★★★★★</div>

        {/* REVIEWS */}
        <div style={{ color: "#ccc", fontSize: 12, marginBottom: 8 }}>
          ⭐ 120 Reviews
        </div>

        {/* PRICE */}
        <div style={{ marginBottom: 6 }}>
          <span
            style={{
              color: "#999",
              textDecoration: "line-through",
              marginRight: 6,
            }}
          >
            ₹240
          </span>
          <span style={{ color: "#00ff66", fontSize: 13 }}>25% OFF</span>
        </div>

        <div
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 12,
          }}
        >
          RS : 180
        </div>
  <Link to="/checkout" style={{ flex: 1 }}>
        <button
          style={{
            width: "100%",
            background: "#ffe600",
            color: "#000",
            border: "none",
            padding: "12px 0",
            fontWeight: 700,
            cursor: "pointer",
            borderRadius: 4,
          }}
        >
          Buy Now
        </button>
      </Link>
      </div>
    ))}
  </div>

  {/* SEE MORE BUTTON */}
  <div
    style={{
      maxWidth: 1500,
      margin: "20px auto 0",
      padding: "0 30px",
      display: "flex",
      justifyContent: "flex-end",
    }}
  >
    <button
      style={{
        background: "#ffe600",
        color: "#000",
        border: "none",
        padding: "10px 20px",
        fontWeight: 700,
        cursor: "pointer",
        borderRadius: 4,
      }}
    >
      SEE MORE →
    </button>
  </div>
  </div>
</section>


     <Footer />
    </div>
  );
};

export default ProductPage;
