import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, User, Search, ChevronLeft, ChevronRight, Play, Menu, X } from 'lucide-react';
import MotivationalSection from "./MotivationalSection";
import VideoShowcaseSection from "./VideoShowcaseSection";
import FeaturesSection from "./FeaturesSection";

const MPACTLandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const heroRef = useRef(null);
  const motivationalRef = useRef(null);
  const productsRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Jersey+25&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      id: 1,
      image: "./src/assets/rrs/protein-gym.jpg"
    },
    {
      id: 2,
      image: "./src/assets/rrs/protein-gym.jpg"
    },
    {
      id: 3,
      image: "./src/assets/rrs/protein-gym.jpg"
    }
  ];

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "EXTRA HUNGRY?",
      name: "PROTEIN WAFERS - VARIETY PACK OF 10",
      brand: "SNICKERS",
      price: 2000,
      oldPrice: 2999,
      discount: "26% OFF",
      image: "./src/assets/rrs/protein-gym.jpg",
      rating: 5,
      reviews: 199,
      specs: ["NO PRESERVATIVES", "JAGGERY BASED", "NO ADDED COLOURS", "NO GLUCOSE ADDED", "80 % PEANUT", "NO ADDED COLOURS"]
    },
    {
      id: 2,
      title: "EXTRA HUNGRY?",
      name: "PROTEIN WAFERS - VARIETY PACK OF 10",
      brand: "SNICKERS",
      price: 2000,
      oldPrice: 2999,
      discount: "26% OFF",
      image: "./src/assets/rrs/protein-gym.jpg",
      rating: 5,
      reviews: 199,
      specs: ["NO PRESERVATIVES", "JAGGERY BASED", "NO ADDED COLOURS", "NO GLUCOSE ADDED", "80 % PEANUT", "NO ADDED COLOURS"]
    },
    {
      id: 3,
      title: "EXTRA HUNGRY?",
      name: "PROTEIN WAFERS - VARIETY PACK OF 10",
      brand: "SNICKERS",
      price: 2000,
      oldPrice: 2999,
      discount: "26% OFF",
      image: "./src/assets/rrs/protein-gym.jpg",
      rating: 5,
      reviews: 199,
      specs: ["NO PRESERVATIVES", "JAGGERY BASED", "NO ADDED COLOURS", "NO GLUCOSE ADDED", "80 % PEANUT", "NO ADDED COLOURS"]
    },
    {
      id: 4,
      title: "EXTRA HUNGRY?",
      name: "PROTEIN WAFERS - VARIETY PACK OF 10",
      brand: "SNICKERS",
      price: 2000,
      oldPrice: 2999,
      discount: "26% OFF",
      image: "./src/assets/rrs/protein-gym.jpg",
      rating: 5,
      reviews: 199,
      specs: ["NO PRESERVATIVES", "JAGGERY BASED", "NO ADDED COLOURS", "NO GLUCOSE ADDED", "80 % PEANUT", "NO ADDED COLOURS"]
    }
  ]);

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const handleBuyNow = async (productId) => {
    console.log('Buy now:', productId);
  };

  const heroParallax = scrollY * 0.5;
  const productParallax = Math.max(0, (scrollY - 600) * 0.3);
  const motivationalParallax = Math.max(0, (scrollY - 1200) * 0.4);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#171717', 
      color: 'white', 
      overflowX: 'hidden',
      fontFamily: "'Jersey 25', sans-serif"
    }}>
      {/* Fixed Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrollY > 100 ? 'rgba(250, 204, 21, 0.95)' : 'rgb(250, 204, 21)',
        backdropFilter: scrollY > 100 ? 'blur(10px)' : 'none',
        color: 'black',
        transition: 'all 0.3s'
      }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '1rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <div style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            cursor: 'pointer' 
          }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            MPACT
          </div>
          
          {/* Desktop Navigation */}
          <nav style={{ 
            display: 'none', 
            gap: '2rem', 
            fontSize: '0.875rem', 
            fontWeight: 'bold',
            '@media (min-width: 768px)': { display: 'flex' }
          }}>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ 
              background: 'none', 
              border: 'none', 
              color: 'inherit', 
              cursor: 'pointer',
              textDecoration: 'none'
            }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>HOME</button>
            <button onClick={() => scrollToSection(productsRef)} style={{ 
              background: 'none', 
              border: 'none', 
              color: 'inherit', 
              cursor: 'pointer',
              textDecoration: 'none'
            }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>PRODUCTS</button>
            <button onClick={() => scrollToSection(aboutRef)} style={{ 
              background: 'none', 
              border: 'none', 
              color: 'inherit', 
              cursor: 'pointer',
              textDecoration: 'none'
            }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>ABOUT US</button>
            <button onClick={() => scrollToSection(blogRef)} style={{ 
              background: 'none', 
              border: 'none', 
              color: 'inherit', 
              cursor: 'pointer',
              textDecoration: 'none'
            }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>BLOG</button>
          </nav>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button style={{ 
              background: 'none', 
              border: 'none', 
              color: 'inherit', 
              cursor: 'pointer',
              opacity: 1,
              transition: 'opacity 0.3s'
            }} onMouseEnter={(e) => e.target.style.opacity = '0.7'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
              <Search size={20} />
            </button>
            <button style={{ 
              background: 'none', 
              border: 'none', 
              color: 'inherit', 
              cursor: 'pointer',
              opacity: 1,
              transition: 'opacity 0.3s'
            }} onMouseEnter={(e) => e.target.style.opacity = '0.7'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
              <User size={20} />
            </button>
            <button style={{ 
              background: 'none', 
              border: 'none', 
              color: 'inherit', 
              cursor: 'pointer',
              opacity: 1,
              transition: 'opacity 0.3s'
            }} onMouseEnter={(e) => e.target.style.opacity = '0.7'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
              <ShoppingCart size={20} />
            </button>
            
            <button 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'inherit', 
                cursor: 'pointer',
                display: window.innerWidth >= 768 ? 'none' : 'block',
                opacity: 1,
                transition: 'opacity 0.3s'
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'} 
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div style={{
          display: window.innerWidth >= 768 ? 'none' : 'block',
          overflow: 'hidden',
          maxHeight: mobileMenuOpen ? '384px' : '0',
          opacity: mobileMenuOpen ? 1 : 0,
          transition: 'all 0.3s'
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
            <button onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }} style={{
              padding: '0.75rem 1rem',
              textAlign: 'left',
              fontWeight: 'bold',
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid rgba(0,0,0,0.05)',
              cursor: 'pointer',
              color: 'inherit',
              transition: 'background-color 0.3s'
            }} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.05)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
              HOME
            </button>
            <button onClick={() => {
              scrollToSection(productsRef);
              setMobileMenuOpen(false);
            }} style={{
              padding: '0.75rem 1rem',
              textAlign: 'left',
              fontWeight: 'bold',
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid rgba(0,0,0,0.05)',
              cursor: 'pointer',
              color: 'inherit',
              transition: 'background-color 0.3s'
            }} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.05)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
              PRODUCTS
            </button>
            <button onClick={() => {
              scrollToSection(aboutRef);
              setMobileMenuOpen(false);
            }} style={{
              padding: '0.75rem 1rem',
              textAlign: 'left',
              fontWeight: 'bold',
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid rgba(0,0,0,0.05)',
              cursor: 'pointer',
              color: 'inherit',
              transition: 'background-color 0.3s'
            }} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.05)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
              ABOUT US
            </button>
            <button onClick={() => {
              scrollToSection(blogRef);
              setMobileMenuOpen(false);
            }} style={{
              padding: '0.75rem 1rem',
              textAlign: 'left',
              fontWeight: 'bold',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'inherit',
              transition: 'background-color 0.3s'
            }} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.05)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
              BLOG
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Slider */}
      <section ref={heroRef} style={{ position: 'relative', backgroundColor: 'black', paddingTop: '5rem', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1rem' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: index === currentSlide ? 1 : 0,
                    transform: index === currentSlide ? 'scale(1)' : 'scale(0.95)',
                    pointerEvents: index === currentSlide ? 'auto' : 'none',
                    transition: 'all 0.7s'
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: index === currentSlide ? `translateY(${scrollY * 0.3}px)` : 'translateY(0)',
                    transition: 'transform 0.1s linear'
                  }}>
                    <img 
                      src={slide.image} 
                      alt={`Slide ${index + 1}`} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain', maxWidth: '80rem', margin: '0 auto' }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
              <button 
                onClick={handlePrevSlide}
                style={{
                  width: '3rem',
                  height: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  color: 'white',
                  transform: hoveredButton === 'prev' ? 'scale(1.1)' : 'scale(1)'
                }}
                onMouseEnter={() => setHoveredButton('prev')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <ChevronLeft />
              </button>
              
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    style={{
                      width: index === currentSlide ? '2rem' : '0.75rem',
                      height: '0.75rem',
                      borderRadius: '9999px',
                      backgroundColor: index === currentSlide ? '#facc15' : 'rgba(255,255,255,0.3)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNextSlide}
                style={{
                  width: '3rem',
                  height: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  color: 'white',
                  transform: hoveredButton === 'next' ? 'scale(1.1)' : 'scale(1)'
                }}
                onMouseEnter={() => setHoveredButton('next')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
            <img src="/api/placeholder/150/60" alt="Mars logo" style={{ height: '4rem', transition: 'transform 0.3s' }} />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={productsRef} id="products" style={{ padding: '4rem 0', backgroundColor: '#262626', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: 'radial-gradient(circle at 50% 50%, #fbbf24 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `translateY(${productParallax}px)`
        }} />
        
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 10 }}>
          <h2 style={{
            fontSize: window.innerWidth >= 768 ? '3.75rem' : '3rem',
            fontWeight: 900,
            color: '#facc15',
            textAlign: 'center',
            marginBottom: '3rem',
            transform: scrollY > 400 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
            opacity: scrollY > 400 ? 1 : 0,
            transition: 'all 0.7s'
          }}>
            FIND OUR PRODUCTS
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(4, 1fr)' : window.innerWidth >= 640 ? 'repeat(2, 1fr)' : '1fr',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {products.map((product, index) => (
              <div 
                key={product.id} 
                style={{
                  background: 'linear-gradient(to bottom, rgba(120, 53, 15, 0.4), #262626)',
                  border: '2px solid rgba(133, 77, 14, 0.5)',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  transform: scrollY > 500 + (index * 50) && hoveredProduct !== product.id ? 'translateY(0) scale(1)' : hoveredProduct === product.id ? 'scale(1.05)' : 'translateY(100px) scale(1)',
                  opacity: scrollY > 500 + (index * 50) ? 1 : 0,
                  transition: 'all 0.5s',
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: hoveredProduct === product.id ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : 'none',
                  borderColor: hoveredProduct === product.id ? '#ca8a04' : 'rgba(133, 77, 14, 0.5)'
                }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div style={{ position: 'relative', aspectRatio: '3/4', background: 'linear-gradient(to bottom, #92400e, #a16207, #92400e)', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '0.5rem', left: 0, right: 0, zIndex: 10, textAlign: 'center' }}>
                    {product.title && (
                      <>
                        <h3 style={{ fontSize: window.innerWidth >= 768 ? '1.5rem' : '1.25rem', fontWeight: 900, color: 'white', marginBottom: '0.25rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                          {product.title.split(' ')[0]}
                        </h3>
                        <h3 style={{ fontSize: window.innerWidth >= 768 ? '1.5rem' : '1.25rem', fontWeight: 900, color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                          {product.title.split(' ').slice(1).join(' ')}
                        </h3>
                      </>
                    )}
                    {product.brand && (
                      <div style={{ marginTop: '0.25rem' }}>
                        <span style={{ backgroundColor: '#1d4ed8', color: 'white', padding: '0.125rem 0.5rem', fontSize: '0.75rem', fontWeight: 900, fontStyle: 'italic', display: 'inline-block', transform: 'skewX(-12deg)' }}>
                          {product.brand}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: hoveredProduct === product.id ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.5s'
                    }}
                  />
                  
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4rem', background: 'linear-gradient(to top, #78350f, transparent)' }} />
                </div>
                
                <div style={{ padding: '0.75rem', backgroundColor: '#171717' }}>
                  <h3 style={{ fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase', color: 'white' }}>{product.name}</h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.375rem', marginBottom: '0.5rem' }}>
                    {product.specs.map((spec, i) => (
                      <div key={i} style={{ border: '1px solid rgba(202, 138, 4, 0.5)', borderRadius: '0.25rem', padding: '0.125rem 0.375rem', fontSize: '9px', fontWeight: 'bold', textAlign: 'center', color: '#facc15' }}>
                        {spec}
                      </div>
                    ))}
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex' }}>
                      {"★".repeat(product.rating).split('').map((star, i) => (
                        <span key={i} style={{ color: '#facc15', fontSize: '0.75rem' }}>{star}</span>
                      ))}
                      {"☆".repeat(5 - product.rating).split('').map((star, i) => (
                        <span key={i} style={{ color: '#4b5563', fontSize: '0.75rem' }}>{star}</span>
                      ))}
                    </div>
                    <span style={{ fontSize: '10px', color: '#9ca3af' }}>⭐ {product.reviews} Reviews</span>
                  </div>
                  
                  <div style={{ marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '10px', color: '#6b7280', textDecoration: 'line-through' }}>₹{product.oldPrice}</span>
                    <span style={{ fontSize: '10px', color: '#4ade80', marginLeft: '0.25rem' }}>{product.discount}</span>
                  </div>
                  
                  <div style={{ fontSize: '1.125rem', fontWeight: 900, marginBottom: '0.75rem', color: 'white' }}>RS : {product.price}</div>
                  
                  <button 
                    onClick={() => handleBuyNow(product.id)}
                    style={{
                      width: '100%',
                      backgroundColor: hoveredButton === `buy-${product.id}` ? '#eab308' : '#facc15',
                      color: 'black',
                      fontWeight: 900,
                      padding: '0.5rem',
                      borderRadius: '0.25rem',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      fontSize: '0.75rem',
                      transform: hoveredButton === `buy-${product.id}` ? 'scale(1.05)' : 'scale(1)'
                    }}
                    onMouseEnter={() => setHoveredButton(`buy-${product.id}`)}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <button style={{
              backgroundColor: hoveredButton === 'see-more' ? '#eab308' : '#facc15',
              color: 'black',
              fontWeight: 'bold',
              padding: '0.75rem 2rem',
              borderRadius: '0.25rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              transform: hoveredButton === 'see-more' ? 'scale(1.05)' : 'scale(1)'
            }}
            onMouseEnter={() => setHoveredButton('see-more')}
            onMouseLeave={() => setHoveredButton(null)}>
              SEE MORE →
            </button>
          </div>
        </div>
      </section>

      <MotivationalSection />
      <FeaturesSection />
      <VideoShowcaseSection />

      {/* Store Locator */}
      <section style={{ padding: '4rem 0', backgroundColor: '#facc15', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h2 style={{
            fontSize: window.innerWidth >= 768 ? '3.75rem' : '3rem',
            fontWeight: 900,
            color: 'black',
            marginBottom: '2rem',
            transform: scrollY > 2600 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
            opacity: scrollY > 2600 ? 1 : 0,
            transition: 'all 0.7s'
          }}>
            FIND OUR NEAREST STORE
          </h2>
          <div style={{
            maxWidth: '48rem',
            margin: '0 auto',
            transform: scrollY > 2700 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
            opacity: scrollY > 2700 ? 1 : 0,
            transition: 'all 0.7s'
          }}>
            <img 
              src="/api/placeholder/800/300" 
              alt="Store locator map" 
              style={{ width: '100%', borderRadius: '0.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', transition: 'box-shadow 0.3s' }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={blogRef} style={{ padding: '5rem 0', backgroundColor: 'black', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: window.innerWidth >= 768 ? '3.75rem' : '3rem', fontWeight: 900, color: '#facc15', marginBottom: '2rem' }}>BLOG</h2>
          <p style={{ color: '#d1d5db', fontSize: '1.125rem', maxWidth: '48rem', margin: '0 auto 3rem' }}>
            Stay updated with the latest news, recipes, and fitness tips from the MPACT community.
          </p>
          
          <h2 style={{
            fontSize: window.innerWidth >= 768 ? '6rem' : '3.75rem',
            fontWeight: 900,
            color: '#facc15',
            marginBottom: '2rem',
            transform: scrollY > 3000 ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
            opacity: scrollY > 3000 ? 1 : 0,
            transition: 'all 0.7s',
            cursor: 'default'
          }}
          onMouseEnter={(e) => e.target.style.transform = scrollY > 3000 ? 'translateY(0) scale(1.1)' : ''}
          onMouseLeave={(e) => e.target.style.transform = scrollY > 3000 ? 'translateY(0) scale(1)' : ''}>
            #GET IT NOW
          </h2>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#171717', borderTop: '1px solid #262626', padding: '2rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth >= 768 ? 'row' : 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MPACT</div>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem' }}>
              <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#facc15'} onMouseLeave={(e) => e.target.style.color = 'white'}>PRIVACY POLICY</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#facc15'} onMouseLeave={(e) => e.target.style.color = 'white'}>TERMS OF USE</a>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.target.style.color = '#facc15'; e.target.style.transform = 'scale(1.1)'; }} onMouseLeave={(e) => { e.target.style.color = 'white'; e.target.style.transform = 'scale(1)'; }}>FB</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.target.style.color = '#facc15'; e.target.style.transform = 'scale(1.1)'; }} onMouseLeave={(e) => { e.target.style.color = 'white'; e.target.style.transform = 'scale(1)'; }}>TW</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.target.style.color = '#facc15'; e.target.style.transform = 'scale(1.1)'; }} onMouseLeave={(e) => { e.target.style.color = 'white'; e.target.style.transform = 'scale(1)'; }}>IG</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MPACTLandingPage;