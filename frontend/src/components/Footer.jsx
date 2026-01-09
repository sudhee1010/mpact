// import React from "react";
// import { motion } from "framer-motion";
// import { Youtube } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import imgInstagramCopy1 from "../assets/instagram.png";
// import imgTikTokCopy1 from "../assets/tiktok.png";

// const Footer = ({ getItNowY }) => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <style>{`
//         .footer {
//           background: #333;
//           padding: 80px 0;
//           position: relative;
//         }

//         .footer-container {
//           max-width: 1535px;
//           margin: auto;
//           padding: 0 24px;
//         }

//         .get-it-now {
//           text-align: center;
//           margin-bottom: 80px;
//         }

//         .get-it-now h2 {
//           font-family: 'Khand', sans-serif;
//           font-size: clamp(50px, 10vw, 150px);
//           color: #ffed23;
//           line-height: 1;
//         }

//         .footer-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//           gap: 48px;
//           margin-bottom: 60px;
//         }

//         .footer-links button {
//           background: none;
//           border: none;
//           color: #fff;
//           font-size: 18px;
//           margin-bottom: 12px;
//           cursor: pointer;
//           text-align: left;
//           transition: color 0.3s;
//         }

//         .footer-links button:hover {
//           color: #ffed23;
//         }

//         .social-icons {
//           display: flex;
//           gap: 24px;
//           align-items: center;
//         }

//         .social-btn {
//           width: 98px;
//           height: 98px;
//           border-radius: 50%;
//           border: 1px solid #fff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: transparent;
//           cursor: pointer;
//           transition: all 0.3s;
//         }

//         .social-btn:hover {
//           background: #ffed23;
//           border-color: #ffed23;
//         }

//         .social-btn img,
//         .social-btn svg {
//           width: 28px;
//           height: 28px;
//         }

//         .social-btn:hover img {
//           filter: brightness(0);
//         }

//         .social-btn:hover svg {
//           color: #000;
//         }

//         .newsletter h3 {
//           font-family: 'Khand', sans-serif;
//           font-size: 36px;
//           color: #ffed23;
//           margin-bottom: 10px;
//         }

//         .newsletter p {
//           color: #fff;
//           font-size: 14px;
//           margin-bottom: 16px;
//           line-height: 1.6;
//         }

//         .newsletter input {
//           width: 100%;
//           background: transparent;
//           border: none;
//           border-bottom: 1px solid #ffed23;
//           padding: 8px 0;
//           color: #fff;
//           outline: none;
//           font-size: 16px;
//           margin-bottom: 20px;
//         }

//         .newsletter input::placeholder {
//           color: rgba(255,255,255,0.6);
//         }

//         .subscribe-btn {
//           background: #ffed23;
//           padding: 10px 24px;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//           font-family: 'Jersey 25', sans-serif;
//           font-size: 16px;
//           transition: background 0.3s;
//         }

//         .subscribe-btn:hover {
//           background: #ffd700;
//         }

//         .footer-bottom {
//           border-top: 1px solid rgba(255,255,255,0.2);
//           padding-top: 30px;
//           display: flex;
//           flex-wrap: wrap;
//           gap: 20px;
//           align-items: center;
//           justify-content: space-between;
//         }

//         .brand {
//           font-family: 'Jersey 25', sans-serif;
//           font-size: 40px;
//           color: #ffed23;
//           cursor: pointer;
//         }

//         .copyright {
//           font-family: 'Jersey 25', sans-serif;
//           font-size: 16px;
//           color: #fff;
//           text-align: center;
//         }

//         .mini-socials {
//           display: flex;
//           gap: 12px;
//         }

//         .mini-btn {
//           width: 28px;
//           height: 28px;
//           border-radius: 50%;
//           border: 1px solid #fff;
//           background: transparent;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s;
//         }

//         .mini-btn:hover {
//           background: #ffed23;
//           border-color: #ffed23;
//         }

//         .mini-btn img {
//           width: 10px;
//           height: 10px;
//         }

//         .mini-btn:hover img {
//           filter: brightness(0);
//         }
//       `}</style>

//       <footer className="footer">
//         <div className="footer-container">
//           <motion.div className="get-it-now" style={{ y: getItNowY }}>
//             <h2># GET IT NOW</h2>
//           </motion.div>

//           <div className="footer-grid">
//             {/* Links */}
//             <div className="footer-links">
//               <button onClick={() => navigate("/")}>Home</button>
//               <button onClick={() => navigate("/products")}>Products</button>
//               <button onClick={() => navigate("/about")}>About us</button>
//               <button onClick={() => navigate("/blog")}>Blogs</button>
//               <button onClick={() => navigate("/faq")}>FAQ</button>
//             </div>

//             {/* Social */}
//             <div className="social-icons">
//               <button className="social-btn">
//                 <img src={imgInstagramCopy1} alt="Instagram" />
//               </button>
//               <button className="social-btn">
//                 <img src={imgTikTokCopy1} alt="TikTok" />
//               </button>
//               <button className="social-btn">
//                 <Youtube />
//               </button>
//             </div>

//             {/* Newsletter */}
//             <div className="newsletter">
//               <h3>ENTER YOUR MAIL</h3>
//               <p>
//                 Get Exclusive Early Access and Stay Informed About Product
//                 Updates, Events, and More!
//               </p>
//               <input type="email" placeholder="your@email.com" />
//               <button className="subscribe-btn">SUBSCRIBE</button>
//             </div>
//           </div>

//           {/* Bottom */}
//           <div className="footer-bottom">
//             <p className="brand" onClick={() => navigate("/")}>MPACT</p>
//             <p className="copyright">
//               COPYRIGHT@MPACT2025 - ALL RIGHTS RESERVED
//             </p>
//             <div className="mini-socials">
//               <button className="mini-btn">
//                 <img src={imgInstagramCopy1} alt="" />
//               </button>
//               <button className="mini-btn">
//                 <img src={imgTikTokCopy1} alt="" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };
// export default Footer;




import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <footer className="mpact-footer">
        <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Khand:wght@500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

    .mpact-footer {
      background: #3a3a3a;
      color: #ffffff;
      padding-top: 20px;
      font-family: 'Inter', sans-serif;
    }
      .social-icon {
  transition: 
    transform 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease,
    box-shadow 0.25s ease;
}

.social-icon:hover {
  transform: scale(1.08);
  border-color: #ffeb3b;
  color: #ffeb3b;
  box-shadow: 0 0 18px rgba(255, 235, 59, 0.45);
}


    .footer-wrapper {
      max-width: 1400px;
      margin: auto;
      padding: 0 60px;
    }

    /* MAIN HEADING */
    .footer-hash {
      text-align: center;
      font-size: 76px;
      font-weight: 700;
      color: #ffeb3b;
      letter-spacing: 2px;
      font-family: 'Khand', sans-serif;
    }

    .footer-main {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      gap: 40px;
    }

    /* LEFT LINKS */
    .footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 5px;   /* row gap | column gap */
  font-size: 15px;
  font-weight: 500;
}


    .footer-links a {
      color: white;
      text-decoration: none;
    }

   .footer-links a {
  position: relative;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

/* underline animation */
.footer-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background: #ffeb3b;
  transition: width 0.3s ease;
}

.footer-links a:hover {
  color: #ffeb3b;
}

.footer-links a:hover::after {
  width: 100%;
}


    /* SOCIAL ICONS */
    .footer-social {
  display: flex;
  justify-content: center;
  gap: 26px;
}

.social-icon {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: transparent;
}


    /* SUBSCRIBE */
    .footer-subscribe h3 {
      color: #ffeb3b;
      font-size: 28px;
      margin-bottom: 10px;
      font-family: 'Khand', sans-serif;
      font-weight: 600;
    }

    .footer-subscribe p {
      font-size: 14px;
      color: #d0d0d0;
      line-height: 1.6;
      margin-bottom: 18px;
    }

    .footer-subscribe input {
      width: 100%;
      background: transparent;
      border: none;
      border-bottom: 1px solid #ffeb3b;
      padding: 10px 0;
      color: white;
      outline: none;
      font-size: 14px;
      margin-bottom: 22px;
    }

    .footer-subscribe button {
      background: #ffeb3b;
      color: black;
      border: none;
      padding: 12px 28px;
      font-weight: 600;
      cursor: pointer;
      font-size: 14px;
      font-family: 'Khand', sans-serif;
    }

    /* DIVIDER */
    .footer-divider {
      margin-top: 80px;
      border-top: 1px solid #555;
    }

    /* BOTTOM */
    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 25px 40px;
      font-size: 13px;
      color: #cfcfcf;
    }

    .footer-logo {
      font-size: 22px;
      color: #ffeb3b;
      font-weight: 700;
      font-family: 'Khand', sans-serif;
    }

    .footer-icons {
      display: flex;
      gap: 14px;
    }

    .footer-icons span {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid #777;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      cursor: pointer;
    }

    @media (max-width: 900px) {
      .footer-main {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .footer-links {
        align-items: center;
      }

      .footer-bottom {
        flex-direction: column;
        gap: 10px;
      }
    }
  `}</style>

        <div className="footer-wrapper">
          <div className="footer-hash"># GET IT NOW</div>

          <div className="footer-main">
            {/* LINKS */}
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="#">Terms & Conditions</a>

              <a href="/products">Products</a>
              <a href="#">Privacy Policy</a>

              <a href="about">About us</a>
              <a href="#">Return Policy</a>

              <a href="#">Blogs</a>
              <a href="/help">Help and Support</a>
            </div>


            {/* SOCIAL */}
            <div className="footer-social">
              <div className="social-icon">
                <Instagram size={26} strokeWidth={1.8} />
              </div>

              <div className="social-icon">
                <SiTiktok size={26} />
              </div>

              <div className="social-icon">
                <Youtube size={26} strokeWidth={1.8} />
              </div>
            </div>


            {/* SUBSCRIBE */}
            <div className="footer-subscribe">
              <h3>ENTER YOUR MAIL</h3>
              <p>
                Get Exclusive Early Access and Stay Informed About Product
                Updates, Events, and More!
              </p>
              <input type="email" placeholder="your@email.com" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-logo">MPACT</div>
          <div>COPYRIGHT © MPACT 2025 – ALL RIGHTS RESERVED</div>
          <div className="footer-icons">
            <span>
              <Instagram size={16} strokeWidth={1.8} />
            </span>
            <span><SiTiktok size={16} /></span>
            <span>
              <Youtube size={16} strokeWidth={1.8} />
            </span>

          </div>
        </div>
      </footer>

    </>);
};