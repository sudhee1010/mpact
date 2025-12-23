import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

/* ================= DATA ================= */
const heroImages = [
  "/images/img1.jpg",
  "/images/ajmal.jpg",
  "/images/product1.png",
];

const FALLBACK_PRODUCT_IMG = "/images/product1.png";

const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: "EXTRA HUNGRY?\nPROTEIN BAR",
  price: "₹299",
  img: `/images/product${(i % 4) + 1}.png`,
}));

const videos = Array.from({ length: 5 }).map(() => "/images/video1.mp4");

export default function Home() {
  /* ================= STATE ================= */
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= REFS ================= */
  const wordSectionRef = useRef(null);
  const fuelRef = useRef(null);
  const parallaxSectionRef = useRef(null);

  const wordRefs = useRef([]);
  const stripsRef = useRef([]);

  /* ================= HERO SLIDER ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const slideNext = () =>
    setCurrentSlide((p) => (p + 1) % heroImages.length);

  const slidePrev = () =>
    setCurrentSlide((p) => (p === 0 ? heroImages.length - 1 : p - 1));

  /* ================= GSAP ANIMATIONS ================= */
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    if (!parallaxSectionRef.current) return;

    const ctx = gsap.context(() => {

      /* ================= WORDS ================= */
      gsap.fromTo(
        wordRefs.current.filter(Boolean),
        { y: 20, opacity: 0.3 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          scrollTrigger: {
            trigger: wordSectionRef.current,
            start: "top 80%",
            scrub: true,
          },
        }
      );

      /* ================= FUEL – CENTER OPEN PARALLAX ================= */
      const fuelTL = gsap.timeline({
        scrollTrigger: {
          trigger: fuelRef.current,
          start: "top center",
          end: "+=100",
          scrub: true,
        },
      });

      fuelTL.fromTo(
        fuelRef.current,
        {
          clipPath: "inset(0 50% 0 50%)", // 🔥 closed from center
          scale: 0.9,
          rotate: -6,
          y: 60,
        },
        {
          clipPath: "inset(0 0% 0 0%)",   // 🔥 opens outward
          scale: 1.05,
          rotate: 0,
          y: -5,
          ease: "none",
        }
      );

    /* ================= PARALLAX STRIPS ================= */
    /* PARALLAX (SAFE PIN) */ const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parallaxSectionRef.current,
          start: "top top", end: "+=800", scrub: true, pin: true,
        },
      });
      stripsRef.current.forEach((el, i) => {
        tl.fromTo(el,
          { clipPath: "inset(0 50% 0 50%)", y: 100, rotate: i % 2 ? 6 : -6, },
          { clipPath: "inset(0 0% 0 0%)", y: 0, rotate: i % 2 ? 2 : -2, });
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill()); ctx.revert();
      wordRefs.current = []; stripsRef.current = [];
    };
  },

    []);
  return (
    <>
      {/* ================= STYLES ================= */}
      <style>{`
*{margin:0;padding:0;box-sizing:border-box}
body{background:#2f2f2f;color:#fff;font-family:Arial}

.hero{height:100vh;position:relative;overflow:hidden;background:#000}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:.6s}
.hero img.active{opacity:1}

.hero-btn{
  position:absolute;top:50%;transform:translateY(-50%);
  background:rgba(0,0,0,.5);border:2px solid #ffeb00;
  color:#ffeb00;font-size:48px;width:64px;height:64px;
  cursor:pointer;z-index:5
}
.hero-btn:hover{background:#ffeb00;color:#000}
.hero-btn.prev{left:30px}
.hero-btn.next{right:30px}

.section-title{
  text-align:center;font-size:2.6rem;font-weight:900;
  color:#ffeb00;padding:70px 0 30px
}

.product-grid{
  display:grid;grid-template-columns:repeat(4,1fr);
  gap:26px;padding:0 50px 80px
}
.product-card{
  background:#1c1c1c;border:2px solid #ffeb00;
}
.product-card img{width:100%;height:280px;object-fit:cover}
.product-body{padding:14px}
.buy-btn{
  width:100%;padding:10px;background:#ffeb00;
  border:none;font-weight:900;cursor:pointer
}

.word-section{
  padding:100px 20px;text-align:center;background:#3a3a3a
}
.word-line{
  font-size:clamp(40px,7vw,90px);
  font-weight:900;text-transform:uppercase
}
.word{display:inline-block}

.fuel {
  background: #ffeb00;
  color: #000;

  display: inline-block;
  padding: 20px 26px;

  font-size: clamp(38px, 4vw, 48px); /* 🔥 smaller, controlled */
  font-weight: 900;
  letter-spacing: 0.12em;

  will-change: transform, clip-path;
  transform-origin: center;
}


.video-grid{
  display:grid;grid-template-columns:repeat(5,1fr);
  gap:24px;padding:0 40px 80px
}
.video-card{border:2px solid #ffeb00}
.video-card video{width:100%;height:320px;object-fit:cover}

.parallax-section{
  min-height:100vh;background:#201d1d;
  display:flex;align-items:center;justify-content:center
}
.strip{
  margin:16px 0;padding:18px 50px;
  font-size:2.4rem;font-weight:900
}
.strip:nth-child(1){background:#ffeb00;color:#000}
.strip:nth-child(2){background:#111}
.strip:nth-child(3){background:#e30000}
.strip:nth-child(4){background:#ffeb00;color:#000}

@media(max-width:1024px){
  .product-grid{grid-template-columns:repeat(2,1fr)}
  .video-grid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:600px){
  .product-grid,.video-grid{grid-template-columns:1fr;padding:0 20px}
}
      `}</style>

      {/* ================= HERO ================= */}
      <section className="hero">
        {heroImages.map((img, i) => (
          <img
            key={i}
            src={img}
            className={i === currentSlide ? "active" : ""}
            alt=""
          />

        ))}
        <button className="hero-btn prev" onClick={slidePrev}>‹</button>
        <button className="hero-btn next" onClick={slideNext}>›</button>
      </section>

      {/* ================= PRODUCTS ================= */}
      <div className="section-title">FIND OUR PRODUCTS</div>
      <section className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img
              src={p.img}
              alt={p.title}
              onError={(e) => (e.currentTarget.src = FALLBACK_PRODUCT_IMG)}
            />

            <div className="product-body">
              <h4>{p.title}</h4>
              <div>{p.price}</div>
              <button className="buy-btn">BUY NOW</button>
            </div>
          </div>
        ))}
      </section>

      {/* ================= WORD SECTION ================= */}
      <section className="word-section" ref={wordSectionRef}>
        <div className="word-line">
          {"STIR UP YOUR FEARLESS PAST AND".split(" ").map((w, i) => (
            <span key={i} className="word" ref={(el) => (wordRefs.current[i] = el)}>
              {w}&nbsp;
            </span>
          ))}
        </div>

        <div className="fuel" ref={fuelRef}>FUEL UP</div>

        <div className="word-line">
          {"YOUR FUTURE WITH EVERY GULP OF PERFECT PROTEIN"
            .split(" ")
            .map((w, i) => (
              <span
                key={i}
                className="word"
                ref={(el) => (wordRefs.current[20 + i] = el)}
              >
                {w}&nbsp;
              </span>
            ))}
        </div>
      </section>

      {/* ================= VIDEOS ================= */}
      <div className="section-title">WATCH IMPACT TAKE OVER</div>
      <section className="video-grid">
        {videos.map((src, i) => (
          <div className="video-card" key={i}>
            <video src={src} muted playsInline controls />
          </div>
        ))}
      </section>

      {/* ================= PARALLAX ================= */}
      <section className="parallax-section" ref={parallaxSectionRef}>
        <div>
          {[
            "SHELF STABLE",
            "PROTEIN + CAFFEINE",
            "INFINITELY RECYCLABLE",
            "LACTOSE FREE",
          ].map((t, i) => (
            <div key={i} className="strip" ref={(el) => (stripsRef.current[i] = el)}>
              {t}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
