import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* ================= INTERNAL CSS ================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jersey+25&display=swap');

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 92px;
          background-color: #ffd400;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 60px;
          z-index: 1000;
        }

        /* LOGO */
        .nav-logo {
          font-family: 'Jersey 25', sans-serif;
          font-size: 48px;
          font-weight: 400;
          letter-spacing: -0.04em;
          color: #000;
          text-decoration: none;
        }

        /* CENTER LINKS */
        .nav-links {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 48px;
        }

        .nav-links a {
          font-family: 'Jersey 25', sans-serif;
          font-size: 20px;
          font-weight: 400;
          color: #000;
          text-decoration: none;
        }

        .nav-links a:hover {
          opacity: 0.7;
        }

        /* RIGHT ICONS */
        .nav-icons {
          display: flex;
          gap: 24px;
          align-items: center;
        }

        .nav-icons img {
          width: 21px;
          height: 21px;
          cursor: pointer;
        }

        /* PAGE OFFSET FIX */
        .page-wrapper {
          padding-top: 92px;
        }

        /* ===== LARGE DESKTOPS / 4K ===== */
@media (min-width: 1400px) {
  .navbar {
    padding: 0 100px;
  }

  .nav-logo {
    font-size: 56px;
  }

  .nav-links a {
    font-size: 22px;
  }
}

/* ===== LAPTOPS ===== */
@media (max-width: 1200px) {
  .navbar {
    padding: 0 40px;
  }

  .nav-links {
    gap: 32px;
  }
}

/* ===== TABLETS ===== */
@media (max-width: 900px) {
  .nav-links {
    display: none; /* hide center menu */
  }

  .navbar {
    padding: 0 30px;
  }

  .nav-logo {
    font-size: 42px;
  }
}

/* ===== MOBILE ===== */
@media (max-width: 600px) {
  .navbar {
    height: 72px;
    padding: 0 20px;
  }

  .nav-logo {
    font-size: 34px;
  }

  .nav-icons img {
    width: 18px;
    height: 18px;
  }

  .page-wrapper {
    padding-top: 72px;
  }
}

/* ===== SMALL MOBILE ===== */
@media (max-width: 360px) {
  .nav-logo {
    font-size: 30px;
  }

  .nav-icons {
    gap: 16px;
  }
}


      `}</style>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        {/* LOGO */}
        <Link to="/" className="nav-logo">
          MPACT
        </Link>

        {/* CENTER MENU */}
        <div className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/products">PRODUCTS</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/blog">BLOG</Link>
        </div>

        {/* RIGHT ICONS */}
        <div className="nav-icons">
          <img src="/icons/search.png" alt="Search" />
          <img src="/icons/avatar.png" alt="User" />
          <img src="/icons/bag.png" alt="Cart" />
        </div>
      </nav>
    </>
  );
}
