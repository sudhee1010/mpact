import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <div style={{ background: "rgba(24, 23, 23, 1)", color: "#fff", fontFamily: "Arial" }}>
    

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
        <div style={{ background: "#353434ff", padding: 20, borderRadius: 12 }}>
          <img
            src="/images/proteins.avif"
            alt="product"
            style={{ width: "100%", borderRadius: 12 }}
          />
        </div>

        <div>
          <h1 style={{ fontSize: 36, fontWeight: 800 }}>
            PROTEIN WAFERS – <br /> VARIETY PACK OF 10
          </h1>
          <p style={{ color: "#ffe600" }}>★★★★★ (198 Reviews)</p>
          <p style={{ color: "#4ade80", fontWeight: "bold" }}>25% OFF</p>
          <h2>RS : 2000</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "No Preservatives",
              "Jaggery Based",
              "No Glucose Added",
              "80% Peanut",
              "No Added Colours",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  border: "1px solid #ffe600",
                  padding: "6px 12px",
                  borderRadius: 20,
                  fontSize: 12,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            style={{
              marginTop: 20,
              background: "#ffe600",
              border: "none",
              padding: "12px 32px",
              fontWeight: "bold",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            BUY NOW
          </button>
        </div>
      </section> 
       {/* EXPLORE */}
      <section style={{ textAlign: "center", padding: 60 }}>
        <h1 style={{ color: "#ffe600", fontSize: 48 }}>
         
        </h1>
        <div
          style={{
            maxWidth: 1200,
            margin: "40px auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                background: "#353434ff",
                padding: 20,
                borderRadius: 12,
              }}
            >
              <img
                src="/images/chocolate.webp"
                alt="product"
                style={{ width: "100%", borderRadius: 12 }}
              />
              <p>Protein Wafers</p>
              <button
                style={{
                  marginTop: 10,
                  background: "#ffe600",
                  border: "none",
                  padding: "8px 20px",
                  fontWeight: "bold",
                  borderRadius: 6,
                }}
              >
                BUY NOW
              </button>
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
            background: "#171717ff",
            border: "1px solid #ffe600",
            borderRadius: 10,
            padding: 16,
            height: "50%",
          }}
        >
          <img
            src="/images/ajmal.jpg"
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
            background: "#171717ff",
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



      {/* EXPLORE */}
      <section style={{ textAlign: "center", padding: 60 }}>
        <h1 style={{ color: "#ffe600", fontSize: 48 }}>
          EXPLORE OUR RANGE
        </h1>
        <div
          style={{
            maxWidth: 1200,
            margin: "40px auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                background: "#353434ff",
                padding: 20,
                borderRadius: 12,
              }}
            >
              <img
                src="/images/creatien.jpg"
                alt="product"
                style={{ width: "100%", borderRadius: 12 }}
              />
              <p>Protein Wafers</p>
              <button
                style={{
                  marginTop: 10,
                  background: "#ffe600",
                  border: "none",
                  padding: "8px 20px",
                  fontWeight: "bold",
                  borderRadius: 6,
                }}
              >
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default ProductPage;
