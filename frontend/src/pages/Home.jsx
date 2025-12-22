import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

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

const videos = [
  "/images/video1.mp4",
  "/images/video1.mp4",
  "/images/video1.mp4",
  "/images/video1.mp4",
  "/images/video1.mp4",
];

export default function Home() {
  /* ================= STATE ================= */
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= REFS ================= */
  const wordSectionRef = useRef(null);
  const wordRefs = useRef([]);
  const fuelRef = useRef(null);
  const parallaxSectionRef = useRef(null);
  const stripsRef = useRef([]);

  /* ================= HERO SLIDER ================= */
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  /* ================= GSAP WORD + PARALLAX ================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordRefs.current,
        { color: "rgba(87, 78, 78, 0.35)", y: 14 },
        {
          color: "#ffffff",
          y: 0,
          stagger: 0.06,
          scrollTrigger: {
            trigger: wordSectionRef.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        fuelRef.current,
        { rotate: -6, y: 16 },
        {
          rotate: -3,
          y: -12,
          scrollTrigger: {
            trigger: wordSectionRef.current,
            start: "top 70%",
            end: "bottom 40%",
            scrub: true,
          },
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parallaxSectionRef.current,
          start: "top top",
          end: "+=900",
          scrub: true,
          pin: true,
        },
      });

      stripsRef.current.forEach((el, i) => {
        tl.fromTo(
          el,
          {
            clipPath: "inset(0 50% 0 50%)",
            y: 120,
            rotate: i % 2 === 0 ? -8 : 8,
            scale: 0.9,
          },
          {
            clipPath: "inset(0 0% 0 0%)",
            y: 0,
            rotate: i % 2 === 0 ? -3 : 3,
            scale: 1,
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ================= STYLES ================= */}
      <style>{`
*{margin:0;padding:0;box-sizing:border-box}
body{background:#2f2f2f;color:#fff;font-family:Arial,Helvetica,sans-serif}

/* HERO */
.hero{
  height:100vh;
  position:relative;
  overflow:hidden;
  background:#000;
}
.hero img{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  opacity:0;
  transition:.6s ease;
}
.hero img.active{opacity:1}

/* PRODUCTS */
.section-title{
  text-align:center;
  color:#ffeb00;
  font-size:2.6rem;
  font-weight:900;
  padding:60px 0 30px;
}
.product-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:26px;
  padding:0 50px 80px;
}
.product-card{
  background:#1c1c1c;
  border:2px solid #ffeb00;
  display:flex;
  flex-direction:column;
}
.product-card img{
  width:100%;
  height:300px;
  object-fit:cover;
}
.product-body{
  padding:14px;
}
.buy-btn{
  width:100%;
  background:#ffeb00;
  border:none;
  padding:10px;
  font-weight:900;
  cursor:pointer;
}

/* WORD SECTION */
.word-section{
  padding:120px 20px;
  background:#3a3a3a;
  text-align:center;
}
.word-line{
  font-size:clamp(42px,7vw,90px);
  font-weight:900;
  text-transform:uppercase;
}

.word{display:inline-block}
.fuel{
  background:#ffeb00;
  color:#000;
  display:inline-block;
  padding:16px 40px;
  margin:20px 0;
  font-size:clamp(48px,8vw,110px);
  font-weight:900;
}

/* VIDEOS */
.video-grid{
  display:grid;
  grid-template-columns:repeat(5,1fr);
  gap:24px;
  padding:0 40px 80px;
}
.video-card{
  border:2px solid #ffeb00;
  background:#000;
}
.video-card video{
  width:100%;
  height:320px;
  object-fit:cover;
}

/* PARALLAX */
.parallax-section{
  min-height:100vh;
  background:rgba(32,29,29,0.85);
  display:flex;
  align-items:center;
  justify-content:center;
}
.strip{
  margin:16px 0;
  padding:18px 50px;
  font-size:2.4rem;
  font-weight:900;
  text-transform:uppercase;
}
.strip:nth-child(1){background:#ffeb00;color:#000}
.strip:nth-child(2){background:#111}
.strip:nth-child(3){background:#e30000}
.strip:nth-child(4){background:#ffeb00;color:#000}

/* RESPONSIVE */
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
          {"STIR UP YOUR FEARLESS PAST AND".split(" ").map((w, j) => (
            <span key={j} className="word" ref={(el) => (wordRefs.current[j] = el)}>
              {w}&nbsp;
            </span>
          ))}
        </div>
        <div className="fuel" ref={fuelRef}>FUEL UP</div>
        <div className="word-line">
          {"YOUR FUTURE WITH EVERY GULP OF PERFECT PROTEIN"
            .split(" ")
            .map((w, j) => (
              <span
                key={j}
                className="word"
                ref={(el) => (wordRefs.current[20 + j] = el)}
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
            <video controls muted playsInline>
              <source src={src} type="video/mp4" />
            </video>
          </div>
        ))}
      </section>

      {/* ================= PARALLAX STRIPS ================= */}
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
