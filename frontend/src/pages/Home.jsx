import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAVBAR_HEIGHT = 72; // adjust if needed

export default function Home() {
  const sectionRef = useRef(null);
  const stripsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top+=" + NAVBAR_HEIGHT,
          end: "+=1000",        // short scroll distance
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      stripsRef.current.forEach((el, i) => {
        const baseTilt = i % 2 === 0 ? -10 : 10;
        const finalTilt = i % 2 === 0 ? -3 : 3;

        tl.fromTo(
          el,
          {
            clipPath: "inset(0 50% 0 50%)",
            opacity: 0,
            scale: 0.9,
            rotate: baseTilt,
            y: 120,
          },
          {
            clipPath: "inset(0 0% 0 0%)",
            opacity: 1,
            scale: 1,
            rotate: finalTilt,
            y: 0,
            ease: "power3.out",
            duration: 1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          background: #1e1e1e;
        }

        /* PAGE CONTENT OFFSET FOR NAVBAR */
        .home-page {
          padding-top: ${NAVBAR_HEIGHT}px;
          color: #fff;
        }

        /* HERO */
        .hero {
          max-width: 1200px;
          margin: auto;
          padding: 120px 20px;
        }

        .hero h1 {
          font-size: 52px;
          font-weight: 900;
          line-height: 1.1;
        }

        .hero span {
          color: #ffd400;
        }

        .hero button {
          margin-top: 24px;
          padding: 14px 28px;
          font-weight: 800;
          background: #ffd400;
          border: none;
          cursor: pointer;
        }

        /* SPYLT SECTION */
        .spylt-section {
          pading: 10px;
          height: calc(100vh - ${NAVBAR_HEIGHT}px);
          background: #1c1c1c;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spylt-stack {
          display: flex;
          flex-direction: column;
          gap: 32px;
          align-items: center;
        }

        .spylt-strip {
          padding: 28px 72px;
          font-size: 50px;          /* 🔥 BIG TEXT */
          font-weight: 900;
          text-transform: uppercase;
          white-space: nowrap;
          box-shadow: 0 30px 70px rgba(0,0,0,0.6);
          clip-path: inset(0 50% 0 50%);
          opacity: 0;
          will-change: transform, clip-path, opacity;
        }

        .spylt-strip:nth-child(1) {
          background: #c79264;
          color: #fff;
        }

        .spylt-strip:nth-child(2) {
          background: #f5ede4;
          color: #111;
        }

        .spylt-strip:nth-child(3) {
          background: #8b3f2b;
          color: #fff;
        }

        .spylt-strip:nth-child(4) {
          background: #c9b06c;
          color: #111;
        }

        @media (max-width: 900px) {
          .spylt-strip {
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

        {/* 100vh SPYLT SECTION */}
        <section className="spylt-section" ref={sectionRef}>
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
        </section>
      </div>
    </>
  );
}
