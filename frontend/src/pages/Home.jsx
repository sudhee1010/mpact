import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const NAVBAR_HEIGHT = 92;

export default function Home() {
  const wordSectionRef = useRef(null);
  const wordRefs = useRef([]);
  const fuelRef = useRef(null);

  const parallaxSectionRef = useRef(null);
  const stripsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* WORD SCROLL COLOR */
      gsap.fromTo(
        wordRefs.current,
        { color: "rgba(255,255,255,0.35)", y: 12 },
        {
          color: "#e3e1d4ff",
          y: 0,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wordSectionRef.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: true,
          },
        }
      );

      /* FUEL SLAB FLOAT */
      gsap.fromTo(
        fuelRef.current,
        { rotate: -6, y: 10 },
        {
          rotate: -3,
          y: -10,
          scrollTrigger: {
            trigger: wordSectionRef.current,
            start: "top 70%",
            end: "bottom 40%",
            scrub: true,
          },
        }
      );

      /* PARALLAX SECTION (PIN SAFE) */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parallaxSectionRef.current,
          start: "top top+=" + NAVBAR_HEIGHT,
          end: "+=900",
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      stripsRef.current.forEach((el, i) => {
        const base = i % 2 === 0 ? -8 : 8;
        const final = i % 2 === 0 ? -3 : 3;

        tl.fromTo(
          el,
          {
            clipPath: "inset(0 50% 0 50%)",
            y: 120,
            rotate: base,
            scale: 0.9,
          },
          {
            clipPath: "inset(0 0% 0 0%)",
            y: 0,
            rotate: final,
            scale: 1,
            ease: "power3.out",
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          background: #0f0f0f;
        }

        .home-page {
          padding-top: ${NAVBAR_HEIGHT}px;
          color: #f5f5f5;
          position: relative;
          z-index: 1;
        }

        /* HERO */
        .hero {
          max-width: 1200px;
          margin: auto;
          padding: 140px 20px 120px;
        }

        .hero h1 {
          font-size: 52px;
          font-weight: 900;
          line-height: 1.1;
        }

        .hero span {
          color: #f5f5f5ff;
        }

        .hero button {
          margin-top: 24px;
          padding: 14px 28px;
          font-weight: 800;
          background: #ffd400;
          border: none;
          color: #000;
          cursor: pointer;
        }

        /* WORD SECTION */
        .word-section {
          min-height: 100vh;
          padding: 140px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #141414;
          position: relative;
          z-index: 2;
        }

        .word-wrap {
          max-width: 1000px;
          text-align: center;
        }

        .word-line {
          font-size: clamp(44px, 7vw, 96px);
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.05;
        }

        .word {
          display: inline-block;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .word:hover {
          color: #e9e7deff;
          transform: translateY(-4px);
        }

        .fuel {
          display: inline-block;
          background: #ffd400;
          color: #000;
          padding: 16px 60px;
          margin: 28px 0;
          font-size: clamp(48px, 8vw, 110px);
          font-weight: 900;
          transform: rotate(-4deg);
        }

        .fade {
          opacity: 0.25;
        }

        /* PARALLAX SECTION */
        .parallax-section {
          min-height: 100vh;
          background: #0b0b0b;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          z-index: 1;
        }

        .strip-stack {
          display: flex;
          flex-direction: column;
          gap: 32px;
          align-items: center;
        }

        .strip {
          padding: 28px 72px;
          font-size: 50px;
          font-weight: 900;
          text-transform: uppercase;
          white-space: nowrap;
          text-align: center;
          box-shadow: 0 30px 70px rgba(0,0,0,0.7);
        }

        .strip:nth-child(1) { background:#ffd400; color:#000; }
        .strip:nth-child(2) { background:#f5f5f5; color:#000; }
        .strip:nth-child(3) { background:#1e1e1e; color:#ffd400; }
        .strip:nth-child(4) { background:#2a2a2a; color:#f5f5f5; }

        @media (max-width: 900px) {
          .strip {
            font-size: 34px;
            padding: 18px 36px;
          }
        }
      `}</style>

      <div className="home-page">
        {/* HERO */}
        <section className="hero">
          <h1>
            Fuel Your <span>Workout</span>
            <br />
            Power Your <span>Life</span>
          </h1>
          <Link to="/products">
            <button>Shop Now</button>
          </Link>
        </section>

        {/* WORD SECTION */}
        <section className="word-section" ref={wordSectionRef}>
          <div className="word-wrap">
            {["STIR UP YOUR", "FEARLESS PAST AND"].map((line, i) => (
              <div className="word-line" key={i}>
                {line.split(" ").map((w, j) => (
                  <span
                    key={j}
                    className="word"
                    ref={(el) => (wordRefs.current[i * 10 + j] = el)}
                  >
                    {w}&nbsp;
                  </span>
                ))}
              </div>
            ))}

            <div className="fuel" ref={fuelRef}>FUEL UP</div>

            {["YOUR FUTURE", "WITH EVERY","GULP OF PERFECT PROTEIN"].map((line, i) => (
              <div className="word-line" key={i + 2}>
                {line.split(" ").map((w, j) => (
                  <span
                    key={j}
                    className="word"
                    ref={(el) => (wordRefs.current[(i + 2) * 10 + j] = el)}
                  >
                    {w}&nbsp;
                  </span>
                ))}
              </div>
            ))}

            {/* <div className="word-line fade">
  {"GULP OF PERFECT PROTEIN".split(" ").map((w, j) => (
    <span
      key={j}
      className="word"
      ref={(el) => (wordRefs.current[40 + j] = el)}
    >
      {w}&nbsp;
    </span>
  ))}
</div> */}

          </div>
        </section>

        {/* PARALLAX */}
        <section className="parallax-section" ref={parallaxSectionRef}>
          <div className="strip-stack">
            {[
              "Shelf Stable",
              "Protein + Caffeine",
              "Infinitely Recyclable",
              "Lactose Free",
            ].map((text, i) => (
              <div
                key={i}
                className="strip"
                ref={(el) => (stripsRef.current[i] = el)}
              >
                {text}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
