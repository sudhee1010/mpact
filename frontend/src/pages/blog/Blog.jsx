
import  Navbar  from "../../components/Navbar";
// import Footer from "../../components/Footer";
import React from 'react'
import { useNavigate } from "react-router-dom";

import  { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Calendar, Clock, UserCircle } from 'lucide-react';

const MPACTBlog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  
  const navigate=useNavigate();

  function navigateFunction() {
    navigate("/Nutrition");
  }

 const filters = ['All', 'Nutrition', 'Recipes', 'Wellness', 'Ingredients', 'Fitness', 'Sustainability'];

  const featuredArticles = [
    {
      id: 1,
      tag: 'Nutrition',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop',
      title: 'The Science Behind Protein Absorption: What You Need to Know',
      description: 'Understanding how your body processes protein can help you maximize your fitness gains and overall health.',
      tags: ['#Protein', '#Health', '#Science'],
      date: 'Dec 8, 2025',
      author: 'Mike Chen',
      readTime: '7 min read'
    },
    {
      id: 2,
      tag: 'Recipes',
      image: 'https://images.unsplash.com/photo-1533777324565-a040eb52facd?w=800&h=600&fit=crop',
      title: '10 Quick and Healthy Breakfast Ideas for Busy Mornings',
      description: 'Start your day right with these nutritious breakfast options that take less than 15 minutes to prepare.',
      tags: ['#Breakfast', '#Healthy Eating', '#Quick Meals'],
      date: 'Dec 5, 2025',
      author: 'Mike Chen',
      readTime: '7 min read'
    }
  ];

  const latestArticles = [
    {
      id: 3,
      tag: 'Wellness',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
      title: 'How Natural Ingredients Boost Wellness',
      description: 'Discover the power of natural, whole-food ingredients and their impact on sustained energy throughout the day.',
      tags: ['#Energy', '#Nutrition', '#Ingredients'],
      date: 'Dec 1, 2025',
      author: 'Emily Rodriguez',
      readTime: '5 min read'
    },
    {
      id: 4,
      tag: 'Nutrition',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop',
      title: 'The Ultimate Guide to Reading Nutrition Labels',
      description: 'Learn how to decode nutrition labels and make informed choices about the food you eat.',
      tags: ['#Education', '#Health', '#Nutrition'],
      date: 'Dec 28, 2025',
      author: 'Dr. Sarah Lee',
      readTime: '6 min read'
    },
    {
      id: 5,
      tag: 'Nutrition',
      image: 'https://images.unsplash.com/photo-1523251451807-aab9b844ed3f?w=400&h=300&fit=crop',
      title: 'Peanut Butter Power: Benefits Beyond Protein',
      description: 'Peanut butter is more than just a protein source. Explore its hidden health benefits and creative uses.',
      tags: ['#Peanut Butter', '#Protein', '#Health Benefits'],
      date: 'Dec 26, 2025',
      author: 'Mike Chen',
      readTime: '5 min read'
    },
    {
      id: 6,
      tag: 'Fitness',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop',
      title: 'Pre-Workout vs Post-Workout Nutrition: What\'s Best?',
      description: 'Timing is everything when it comes to fueling your workouts. Here\'s what science says about meal timing.',
      tags: ['#Pre-Workout', '#Nutrition', '#Fitness'],
      date: 'Dec 23, 2025',
      author: 'Emily Rodriguez',
      readTime: '6 min read'
    },
    {
      id: 7,
      tag: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop',
      title: 'Sustainable Snacking: How We Source Our Ingredients',
      description: 'Take a behind-the-scenes look at our commitment to sustainable and ethically-sourced ingredient sourcing.',
      tags: ['#Sustainability', '#Ingredients', '#Ethics'],
      date: 'Dec 20, 2025',
      author: 'Dr. Sarah Lee',
      readTime: '7 min read'
    },
    {
      id: 8,
      tag: 'Recipes',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
      title: '5 Creative Ways to Use Protein Wafers in Your Recipes',
      description: 'Think protein wafers are just a snack? Think again! Here are some delicious recipes that might surprise your meals.',
      tags: ['#Recipes', '#Creative', '#Protein Wafers'],
      date: 'Dec 18, 2025',
      author: 'Mike Chen',
      readTime: '5 min read'
    },
    {
      id: 9,
      tag: 'Ingredients',
      image: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=400&h=300&fit=crop',
      title: 'Understanding Jaggery: The Ancient Sweetener Making a Comeback',
      description: 'Why jaggery is becoming the go-to natural sweetener and how it compares to refined sugar.',
      tags: ['#Jaggery', '#Natural', '#Sweeteners'],
      date: 'Dec 15, 2025',
      author: 'Emily Rodriguez',
      readTime: '5 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        /* Mobile First - Base styles */
        .top-bar {
          background-color: #1f2937;
          padding: 0.75rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
        }

        .main-header {
          // background-color: #facc15;
          // color: #000;
          // position: sticky;
          // top: 0;
          // z-index: 50;
        }

        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .desktop-nav {
          display: none;
          gap: 2rem;
        }

        .mobile-menu-btn {
          display: block;
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-nav {
          padding: 1rem;
          border-top: 1px solid rgba(0,0,0,0.1);
        }

        .mobile-nav a {
          display: block;
          padding: 0.75rem 0;
          color: #000;
          text-decoration: none;
        }

        .header-icons {
          display: none;
          gap: 1rem;
        }

        .hero-section {
          padding: 2rem 1rem 1rem;
          background-color: #1f2937;
        }

        .hero-title {
          font-size: 2rem;
          font-weight: 700;
          text-align: left;
          margin-bottom: 0.5rem;
        }

        .hero-description {
          font-size: 0.875rem;
          color: #9ca3af;
          margin-bottom: 1rem;
        }

        .search-container {
          margin-bottom: 1rem;
        }

        .search-input {
          width: 100%;
          background-color: transparent;
          border: 1px solid #4b5563;
          border-radius: 0.25rem;
          padding: 0.5rem;
          color: #fff;
          font-size: 0.875rem;
        }

        .search-input:focus {
          outline: none;
          border-color: #facc15;
        }

        .filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .filter-btn {
          background-color: #374151;
          color: #fff;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .filter-btn.active {
          background-color: #facc15;
          color: #000;
        }

        .filter-btn:hover {
          background-color: #4b5563;
        }

        .filter-btn.active:hover {
          background-color: #fbbf24;
        }

        .articles-count {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .content-wrapper {
          padding: 1rem;
          max-width: 1280px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .featured-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .featured-card {
          border: 1px solid #facc15;
          border-radius: 0.5rem;
          overflow: hidden;
          background-color: #1f2937;
        }

        .featured-image-wrapper {
          position: relative;
          width: 100%;
          height: 250px;
        }

        .featured-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .article-tag {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background-color: #facc15;
          color: #000;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .featured-content {
          padding: 1.5rem;
        }

        .article-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          font-size: 0.75rem;
          color: #9ca3af;
          margin-bottom: 0.75rem;
        }

        .article-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .article-description {
          font-size: 0.875rem;
          color: #d1d5db;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .article-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tag {
          background-color: transparent;
          border: 1px solid #4b5563;
          color: #d1d5db;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.7rem;
        }

        .read-more {
          color: #facc15;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          display: inline-block;
        }

        .read-more:hover {
          text-decoration: underline;
        }

        .latest-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .latest-card {
          border: 1px solid #facc15;
          border-radius: 0.5rem;
          overflow: hidden;
          background-color: #1f2937;
          display: flex;
          flex-direction: column;
        }

        .latest-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
        }

        .latest-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .latest-content {
          padding: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .latest-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .latest-description {
          font-size: 0.8rem;
          color: #d1d5db;
          margin-bottom: 0.75rem;
          line-height: 1.5;
          flex: 1;
        }

        /* Tablet styles (≥ 640px) */
        @media (min-width: 640px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .latest-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-title {
            font-size: 1.5rem;
          }
        }

        /* Desktop styles (≥ 768px) */
        @media (min-width: 768px) {
          .top-bar {
            display: none;
          }

          .desktop-nav {
            display: flex;
          }

          .desktop-nav a {
            color: #000;
            text-decoration: none;
            font-size: 0.875rem;
            font-weight: 500;
          }

          .desktop-nav a:hover {
            text-decoration: underline;
          }

          .mobile-menu-btn {
            display: none;
          }

          .header-icons {
            display: flex;
          }

          .hero-section {
            padding: 3rem 2rem 2rem;
            text-align: center;
          }

          .hero-title {
            font-size: 3rem;
            text-align: center;
          }

          .hero-description {
            font-size: 1rem;
            text-align: center;
            max-width: 800px;
            margin: 0 auto 1.5rem;
          }

          .search-container {
            max-width: 600px;
            margin: 0 auto 1.5rem;
          }

          .filters {
            justify-content: center;
          }

          .articles-count {
            text-align: center;
          }

          .content-wrapper {
            padding: 2rem;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .featured-card {
            display: flex;
            flex-direction: row;
          }

          .featured-image-wrapper {
            width: 50%;
            height: auto;
          }

          .featured-content {
            width: 50%;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .article-title {
            font-size: 1.5rem;
          }

          .article-description {
            font-size: 0.95rem;
          }
        }

        /* Large Desktop (≥ 1024px) */
        @media (min-width: 1024px) {
          .latest-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .section-title {
            font-size: 2rem;
          }

          .article-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      {/* Top Bar - Mobile Only */}
      <div className="top-bar">
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span>MPACT</span>
          <span>BLOG</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Search size={16} />
          <User size={16} />
          <ShoppingCart size={16} />
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="header-container">
  

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <a href="#">HOME</a>
            <a href="#">PRODUCTS</a>
            <a href="#">ABOUT US</a>
            <a href="#" style={{ fontWeight: 700 }}>BLOG</a>
            <a href="#">WISHLIST</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">MPACT BLOG</h1>
        <p className="hero-description">
          Discover insights on nutrition, wellness, and healthy living from our team of experts.
        </p>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search articles, topics, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <p className="articles-count">9 articles found</p>
      </section>

      {/* Main Content */}
      <div className="content-wrapper">
        {/* Featured Articles */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">Featured Articles</h2>
          <div className="featured-grid">
            {featuredArticles.map((article) => (
              <div key={article.id} className="featured-card">
                <div className="featured-image-wrapper">
                  <img src={article.image} alt={article.title} className="featured-image" />
                  <span className="article-tag">{article.tag}</span>
                </div>
                <div className="featured-content">
                  <div>
                    <div className="article-meta">
                      <span>📅 {article.date}</span>
                      <span>👤 {article.author}</span>
                      <span>⏱ {article.readTime}</span>
                    </div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-description">{article.description}</p>
                    <div className="article-tags">
                      {article.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <a href="#" className="read-more" onClick={()=> navigateFunction ("/Nutirion")} > Read More →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Articles */}
        <section>
          <h2 className="section-title">Latest Articles</h2>
          <div className="latest-grid">
            {latestArticles.map((article) => (
              <div key={article.id} className="latest-card">
                <div className="latest-image-wrapper">
                  <img src={article.image} alt={article.title} className="latest-image" />
                  <span className="article-tag">{article.tag}</span>
                </div>
                <div className="latest-content">
                  <div className="article-meta">
                    <span>📅 {article.date}</span>
                    <span>👤 {article.author}</span>
                    <span>⏱ {article.readTime}</span>
                  </div>
                  <h3 className="latest-title">{article.title}</h3>
                  <p className="latest-description">{article.description}</p>
                  <div className="article-tags">
                    {article.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                  <a href="#" className="read-more"onClick={()=> navigateFunction ("/Nutirion")}>Read More →</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MPACTBlog;