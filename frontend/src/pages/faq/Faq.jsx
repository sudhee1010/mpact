import React, { useState } from 'react';
import Navbar from '../../components/NavbarTwo';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);


  
  const faqData = [
    {
      category: "PRODUCT INFORMATION",
      questions: [
        { q: "What makes your product unique?", a: "Our product is designed with premium materials and modern technology that set it apart from competitors." },
        { q: "What are the key features?", a: "Key features include durability, innovative design, and user-friendly interface." },
        { q: "Is the product eco-friendly?", a: "Yes, we use sustainable materials and environmentally conscious manufacturing processes." },
        { q: "What warranty do you offer?", a: "We offer a comprehensive 2-year warranty on all our products." },
        { q: "Are there different models available?", a: "Yes, we offer multiple models to suit different needs and preferences." }
      ]
    },
    {
      category: "SHIPPING & DELIVERY",
      questions: [
        { q: "What are the shipping options?", a: "We offer standard, express, and overnight shipping options." },
        { q: "Do you ship internationally?", a: "Yes, we ship to over 50 countries worldwide." },
        { q: "How long does delivery take?", a: "Standard delivery takes 5-7 business days, express takes 2-3 days." },
        { q: "Can I track my order?", a: "Yes, you'll receive a tracking number once your order ships." },
        { q: "What if my item arrives damaged?", a: "Contact us immediately and we'll arrange a replacement or refund." }
      ]
    },
    {
      category: "RETURNS & EXCHANGES",
      questions: [
        { q: "What is your return policy?", a: "We accept returns within 30 days of purchase for a full refund." },
        { q: "How do I initiate a return?", a: "Contact our customer service team to start the return process." },
        { q: "Are return shipping costs covered?", a: "Yes, we cover return shipping for defective or incorrect items." },
        { q: "Can I exchange for a different product?", a: "Yes, exchanges are available subject to product availability." },
        { q: "How long do refunds take?", a: "Refunds are processed within 5-10 business days after we receive the return." }
      ]
    },
    {
      category: "PAYMENT & PRICING",
      questions: [
        { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and digital wallets." },
        { q: "Is my payment information secure?", a: "Yes, we use industry-standard encryption to protect your data." },
        { q: "Do you offer payment plans?", a: "Yes, we offer flexible payment plans for purchases over $500." },
        { q: "Are there any hidden fees?", a: "No, all costs are transparently displayed during checkout." },
        { q: "Do you price match?", a: "Yes, we'll match verified competitor prices on identical products." }
      ]
    },
    {
      category: "CUSTOMER SUPPORT",
      questions: [
        { q: "How can I contact customer support?", a: "You can reach us via email, phone, or live chat on our website." },
        { q: "What are your support hours?", a: "Our support team is available Monday-Friday, 9 AM - 6 PM EST." },
        { q: "Do you offer technical assistance?", a: "Yes, our technical support team can help with setup and troubleshooting." },
        { q: "Can I schedule a consultation?", a: "Yes, schedule a free consultation with our product specialists." },
        { q: "Do you have a FAQ database?", a: "Yes, visit our help center for detailed articles and guides." }
      ]
    },
    {
      category: "MAINTENANCE & CARE",
      questions: [
        { q: "How do I maintain my product?", a: "Follow the care instructions included with your product for best results." },
        { q: "What cleaning products are safe to use?", a: "Use mild soap and water; avoid harsh chemicals that may damage materials." },
        { q: "How often should I service the product?", a: "Annual servicing is recommended for optimal performance." },
        { q: "Where can I get replacement parts?", a: "Replacement parts are available through our website or authorized dealers." },
        { q: "Is professional maintenance required?", a: "Basic maintenance can be done at home; professional service is optional." }
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = 0;

  return (
    <div className="faq-container">
      <Navbar/>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .faq-container {
          background-color: #3a3a3a;
          min-height: 100vh;
          padding-bottom: 80px;
        }

        .navbar {
          background-color: #2f2f2f;
          padding: 20px 40px;
          color: #ffee00;
          font-size: 24px;
          font-weight: bold;
        }

        .heading {
          width: 100%;
          text-align: center;
          padding: 38px 20px 0;
        }

        .heading h1 {
          color: #2f2f2f;
          font-family: 'Khand', sans-serif;
          font-weight: bold;
          font-size: 60px;
          text-transform: uppercase;
          text-shadow: 2px 2px 0 #ffee00,
            -2px -2px 0 #ffee00,
            2px -2px 0 #ffee00,
            -2px 2px 0 #ffee00,
            2px 2px 0 #ffee00,
            -3px 0px 0 #ffee00,
            3px 0px 0 #ffee00,
            0px -3px 0 #ffee00,
            0px 3px 0 #ffee00;
          letter-spacing: 0;
          margin-bottom: 40px;
        }

        .category-title {
          color: #2f2f2f;
          font-family: 'Khand', sans-serif;
          text-transform: uppercase;
          text-shadow: 2px 2px 0 #ffee00,
            -2px -2px 0 #ffee00,
            2px -2px 0 #ffee00,
            -2px 2px 0 #ffee00,
            2px 2px 0 #ffee00,
            -3px 0px 0 #ffee00,
            3px 0px 0 #ffee00,
            0px -3px 0 #ffee00,
            0px 3px 0 #ffee00;
          text-align: center;
          font-size: 28px;
          padding: 60px 20px 30px;
          font-weight: bold;
        }

        .category-title:first-of-type {
          padding-top: 40px;
        }

        .faq-section {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .faq-item {
          margin-bottom: 15px;
        }

        .faq-button {
          width: 100%;
          padding: 14px 50px 14px 20px;
          background-color: #ffee00;
          font-family: 'Khand', sans-serif;
          font-weight: bold;
          color: #2f2f2f;
          font-size: 23px;
          border: none;
          border-radius: 7px;
          position: relative;
          cursor: pointer;
          text-align: center;
          transition: all 0.3s ease;
        }

        .faq-button:hover {
          background-color: #ffd700;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .arrow {
          font-size: 30px;
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          transition: transform 0.3s ease;
        }

        .arrow.open {
          transform: translateY(-50%) rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          background-color: rgba(255, 238, 0, 0.1);
          border-radius: 0 0 7px 7px;
        }

        .faq-answer.open {
          max-height: 200px;
          padding: 20px;
          border: 2px solid #ffee00;
          border-top: none;
        }

        .faq-answer p {
          color: #ffffff;
          font-family: 'Khand', sans-serif;
          font-size: 18px;
          line-height: 1.6;
        }

        .cta-section {
          text-align: center;
          padding: 60px 20px;
        }

        .cta-title {
          color: #ffee00;
          font-family: 'Khand', sans-serif;
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .cta-button {
          background-color: #ffee00;
          color: #2f2f2f;
          font-family: 'Khand', sans-serif;
          font-size: 24px;
          font-weight: bold;
          padding: 15px 40px;
          border: none;
          border-radius: 7px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .cta-button:hover {
          background-color: #ffd700;
          transform: scale(1.05);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .heading h1 {
            font-size: 36px;
          }

          .category-title {
            font-size: 24px;
            padding: 40px 15px 20px;
          }

          .faq-section {
            padding: 0 15px;
          }

          .faq-button {
            font-size: 18px;
            padding: 12px 45px 12px 15px;
          }

          .arrow {
            font-size: 24px;
            right: 15px;
          }

          .faq-answer p {
            font-size: 16px;
          }

          .cta-title {
            font-size: 36px;
          }

          .cta-button {
            font-size: 20px;
            padding: 12px 30px;
          }
        }

        @media (max-width: 480px) {
          .heading h1 {
            font-size: 28px;
          }

          .category-title {
            font-size: 20px;
            padding: 30px 10px 15px;
          }

          .faq-button {
            font-size: 16px;
            padding: 10px 40px 10px 12px;
          }

          .arrow {
            font-size: 20px;
            right: 12px;
          }

          .faq-answer p {
            font-size: 14px;
          }

          .faq-answer.open {
            padding: 15px;
          }

          .cta-title {
            font-size: 28px;
          }

          .cta-button {
            font-size: 18px;
            padding: 10px 25px;
          }
        }
      `}</style>

      {/* <div className="navbar">LOGO</div> */}

      <div className="heading">
        <h1>Frequently Asked Questions</h1>
      </div>

      {faqData.map((category, catIndex) => (
        <div key={catIndex}>
          <h2 className="category-title">{category.category}</h2>
          <div className="faq-section">
            {category.questions.map((item, qIndex) => {
              const currentIndex = questionIndex++;
              return (
                <div key={qIndex} className="faq-item">
                  <button
                    className="faq-button"
                    onClick={() => toggleAccordion(currentIndex)}
                  >
                    {item.q}
                    <span className={`arrow ${openIndex === currentIndex ? 'open' : ''}`}>
                      ⌄
                    </span>
                  </button>
                  <div className={`faq-answer ${openIndex === currentIndex ? 'open' : ''}`}>
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="cta-section">
        {/* <h2 className="cta-title">#GET IT NOW</h2> */}
        {/* <button className="cta-button">Shop Now</button> */}
      </div>
    </div>
  );
};

export default Faq;