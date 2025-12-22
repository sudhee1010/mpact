import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);
  const stripsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stripsRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            clipPath: "inset(0 50% 0 50%)",
            y: 120,
            rotate: i % 2 === 0 ? -6 : 6,
            scale: 0.9,
            opacity: 0,
          },
          {
            clipPath: "inset(0 0% 0 0%)",
            y: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top+=${i * 120} center`,
              end: `top+=${i * 120 + 300} center`,
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        /* ===== GLOBAL ===== */
        .home-page {
          background: #1e1e1e;
          color: #fff;
        }

        /* ===== HERO ===== */
        .hero {
          max-width: 1200px;
          margin: auto;
          padding: 120px 20px;
        }

        .hero h1 {
          font-size: 48px;
          font-weight: 900;
        }

        .hero span {
          color: #ffd400;
        }

        /* ===== SPYLT SECTION ===== */
        .spylt-section {
          position: relative;
          height: 240vh;
          background: #1c1c1c;
        }

        .spylt-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spylt-stack {
          position: relative;
          width: 100%;
          max-width: 900px;
          height: 420px;
        }

        .spylt-strip {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          padding: 22px 64px;
          font-size: 48px;
          font-weight: 900;
          text-transform: uppercase;
          white-space: nowrap;
          box-shadow: 0 25px 60px rgba(0,0,0,0.5);
          will-change: transform, clip-path;
        }

        .spylt-strip:nth-child(1) {
          background: #c79264;
          color: #fff;
          top: 0;
          z-index: 4;
        }

        .spylt-strip:nth-child(2) {
          background: #f5ede4;
          color: #111;
          top: 80px;
          z-index: 3;
        }

        .spylt-strip:nth-child(3) {
          background: #8b3f2b;
          color: #fff;
          top: 160px;
          z-index: 2;
        }

        .spylt-strip:nth-child(4) {
          background: #c9b06c;
          color: #111;
          top: 240px;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .spylt-strip {
            font-size: 26px;
            padding: 14px 32px;
          }
        }
      `}</style>

      <div className="home-page">
        {/* HERO */}
        <section className="hero">
          <h1>
            Fuel Your <span>Workout</span><br />
            Power Your <span>Life</span>
          </h1>
          <Link to="/products">
            <button>Shop Now</button>
          </Link>
        </section>

        {/* ===== SPYLT ANIMATION ===== */}
        <section className="spylt-section" ref={sectionRef}>
          <div className="spylt-sticky">
            <div className="spylt-stack">
              {[
                "Shelf Stable",
                "Protein + Caffeine",
                "Infinitely Recyclable",
                "Lactose Free",
              ].map((text, i) => (
                <div
                  key={i}
                  className="spylt-strip"
                  ref={(el) => (stripsRef.current[i] = el)}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
