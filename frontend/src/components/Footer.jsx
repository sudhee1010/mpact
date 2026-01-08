
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* ================= INTERNAL CSS ================= */}
      <style>{`
       @import url('https://fonts.googleapis.com/css2?family=Jersey+25&display=swap');


.footer {
  background: #3a3a3a;
  color: #ffffff;
  padding: 80px 100px 40px;
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr;
  align-items: center;
  gap: 60px;
}

/* LEFT LINKS */
.footer-links {
  display: flex;
  gap: 80px;
  font-size: 14px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

/* 🔥 FIXED LINK STYLES */
.footer-links a {
  color: #d0d0d0;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.9;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #ffee00;
}

.footer-links a.active {
  color: #ffee00;
  font-weight: 600;
}

/* CENTER SECTION */
.footer-center {
  text-align: center;
}

.footer-center h1 {
  font-family: 'Jersey 25', sans-serif;
  // font-size: 150px;
  font-weight: 400;
  color: #ffee00;
  margin-bottom: 30px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.social-icons span {
  width: 56px;
  height: 56px;
  border: 1px solid rgba(255,255,255,0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
}

/* RIGHT SECTION */
.footer-right p {
  font-size: 13px;
  line-height: 1.6;
  max-width: 300px;
  opacity: 0.85;
  margin-bottom: 20px;
}

.newsletter {
  border-bottom: 2px solid #ffee00;
  display: inline-block;
  padding-bottom: 6px;
  color: #ffee00;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
}

/* BOTTOM BAR */
.footer-bottom {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  opacity: 0.7;
}

.footer-logo {
  font-family: 'Jersey 25', sans-serif;
  font-size: 24px;
  color: #ffee00;
}

.footer-bottom-icons {
  display: flex;
  gap: 14px;
}

.footer-bottom-icons span {
  width: 32px;
  height: 32px;
  border: 1px solid rgba(255,255,255,0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
}

/* ===== LARGE DESKTOPS / 4K ===== */
@media (min-width: 1400px) {
  .footer {
    padding: 100px 140px 50px;
  }

  .footer-center h1 {
    font-size: 72px;
  }
}

/* ===== LAPTOPS ===== */
@media (max-width: 1200px) {
  .footer {
    padding: 80px 60px 40px;
  }

  .footer-top {
    gap: 40px;
  }
}

/* ===== TABLETS ===== */
@media (max-width: 900px) {
  .footer-top {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 50px;
  }

  .footer-links {
    justify-content: center;
    gap: 60px;
  }

  .footer-right p {
    margin: auto;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}

/* ===== MOBILE ===== */
@media (max-width: 600px) {
  .footer {
    padding: 60px 20px 30px;
  }

  .footer-links {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  // .footer-center h1 {
  //   font-size: 150px;
  // }

  .social-icons span {
    width: 44px;
    height: 44px;
  }
}

/* ===== SMALL MOBILE ===== */
@media (max-width: 360px) {
  .footer-center h1 {
    font-size: 36px;
  }

  .footer-right p {
    font-size: 12px;
  }

  .footer-logo {
    font-size: 20px;
  }
}


      `}</style>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        {/* TOP */}
        <div className="footer-top">
          {/* LEFT */}
          <div className="footer-links">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/blog">Blogs</Link>
        </li>
      </ul>
    </div>
            {/* CENTER */}
          <div className="footer-center">
            <h1># GET IT NOW</h1>
            <div className="social-icons">
              <span>▶</span>
              <span>◎</span>
              <span>♪</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="footer-right">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="newsletter">ENTER YOUR MAIL</div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <div className="footer-logo">MPACT</div>
          <div>Copyright @ MPACT 2025 - All Rights Reserved</div>
          <div className="footer-bottom-icons">
            <span>●</span>
            <span>◯</span>
            <span>◎</span>
          </div>
        </div>
      </footer>
    </>
  );
}
