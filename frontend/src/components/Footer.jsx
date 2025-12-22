export default function Footer() {
  return (
    <>
      {/* ================= INTERNAL CSS ================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jersey+25&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #2f2f2f;
            color: #ffffff;
            font-family: "Segoe UI", Arial, sans-serif;
        }
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
        }

        .footer-links li {
          margin-bottom: 10px;
          opacity: 0.85;
          cursor: pointer;
        }

        /* CENTER SECTION */
        .footer-center {
          text-align: center;
        }

        .footer-center h1 {
          font-family: 'Khand', sans-serif;
          font-size: 64px;
          font-weight: 700;
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
      `}</style>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        {/* TOP */}
        <div className="footer-top">
          {/* LEFT */}
          <div className="footer-links">
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>FAQ</li>
            </ul>
            <ul>
              <li>About us</li>
              <li>Blogs</li>
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
