import React, { useState, useEffect } from 'react';

const CreditCardForm = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cards, setCards] = useState([
    { id: 1, parts: ['1234', '1234', '1234', '1234'], owner: 'Hazir Kocaman', expiry: { month: '01', year: '23' }, focused: null, error: false, success: false },
    { id: 2, parts: ['', '', '', ''], owner: '', expiry: { month: '', year: '23' }, focused: null, error: false, success: false },
    { id: 3, parts: ['', '', '', ''], owner: '', expiry: { month: '', year: '23' }, focused: null, error: false, success: false },
    { id: 4, parts: ['1234', '1234', '1234', '1234'], owner: 'Hazir Kocaman', expiry: { month: '01', year: '23' }, focused: null, error: false, success: true },
    { id: 5, parts: ['1234', '1234', '1234', '1234'], owner: 'Hazir Kocaman', expiry: { month: '01', year: '23' }, focused: null, error: true, success: false },
    { id: 6, parts: ['', '', '', ''], owner: '', expiry: { month: '01', year: '23' }, focused: null, error: false, success: false }
  ]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveGridClass = () => {
    if (windowWidth <= 768) {
      return 'form-grid form-grid-mobile';
    } else if (windowWidth <= 1024) {
      return 'form-grid form-grid-tablet';
    }
    return 'form-grid';
  };

  const handleCardPartChange = (cardId, partIndex, value) => {
    setCards(cards.map(card => {
      if (card.id === cardId) {
        const newParts = [...card.parts];
        newParts[partIndex] = value.slice(0, 4);
        return { ...card, parts: newParts };
      }
      return card;
    }));
  };

  const handleOwnerChange = (cardId, value) => {
    setCards(cards.map(card => {
      if (card.id === cardId) {
        return { ...card, owner: value };
      }
      return card;
    }));
  };

  const handleExpiryChange = (cardId, field, value) => {
    setCards(cards.map(card => {
      if (card.id === cardId) {
        return { 
          ...card, 
          expiry: { ...card.expiry, [field]: value.slice(0, 2) } 
        };
      }
      return card;
    }));
  };

  const handleFocus = (cardId, field) => {
    setCards(cards.map(card => {
      if (card.id === cardId) {
        return { ...card, focused: field };
      }
      return card;
    }));
  };

  const handleBlur = (cardId) => {
    setCards(cards.map(card => {
      if (card.id === cardId) {
        return { ...card, focused: null };
      }
      return card;
    }));
  };

  const renderCardNumber = (card) => {
    const isCardFocused = card.focused === 'card';
    const wrapperClasses = [
      'card-number-wrapper',
      isCardFocused && 'card-number-wrapper-focused',
      card.error && 'card-number-wrapper-error',
      card.success && 'card-number-wrapper-success'
    ].filter(Boolean).join(' ');

    return (
      <div className={wrapperClasses}>
        <span className="card-icon">💳</span>
        <div className="card-number-inputs">
          {card.parts.map((part, index) => (
            <React.Fragment key={index}>
              <input
                type="text"
                value={part}
                onChange={(e) => handleCardPartChange(card.id, index, e.target.value)}
                onFocus={() => handleFocus(card.id, 'card')}
                onBlur={() => handleBlur(card.id)}
                className="card-input"
                placeholder="1234"
                maxLength="4"
              />
              {index < 3 && <span className="separator">-</span>}
            </React.Fragment>
          ))}
        </div>
        {card.success && (
          <div className="status-icon success-icon">✓</div>
        )}
        {card.error && (
          <div className="status-icon error-icon">✕</div>
        )}
      </div>
    );
  };

  const renderOwner = (card) => {
    const isOwnerFocused = card.focused === 'owner';
    const inputClasses = [
      'text-input',
      isOwnerFocused && 'text-input-focused',
      card.error && 'text-input-error'
    ].filter(Boolean).join(' ');

    return (
      <input
        type="text"
        value={card.owner}
        onChange={(e) => handleOwnerChange(card.id, e.target.value)}
        onFocus={() => handleFocus(card.id, 'owner')}
        onBlur={() => handleBlur(card.id)}
        className={inputClasses}
        placeholder="Enter the name on the card"
      />
    );
  };

  const renderExpiry = (card) => {
    const isMonthFocused = card.focused === 'month';
    const monthClasses = [
      'expiry-input',
      isMonthFocused && 'expiry-input-focused',
      card.error && 'expiry-input-error'
    ].filter(Boolean).join(' ');

    return (
      <div className="expiry-wrapper">
        <input
          type="text"
          value={card.expiry.month}
          onChange={(e) => handleExpiryChange(card.id, 'month', e.target.value)}
          onFocus={() => handleFocus(card.id, 'month')}
          onBlur={() => handleBlur(card.id)}
          className={monthClasses}
          placeholder="01"
          maxLength="2"
        />
        <span style={{ fontSize: '20px', color: '#666' }}>/</span>
        <input
          type="text"
          value={card.expiry.year}
          onChange={(e) => handleExpiryChange(card.id, 'year', e.target.value)}
          className="expiry-input"
          placeholder="23"
          maxLength="2"
        />
      </div>
    );
  };

  return (
    <div className="container">
      <style>{`
        .container {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          padding: 40px;
          background-color: #f5f5f5;
          min-height: 100vh;
        }
        .heading {
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 30px;
          color: #000;
        }
        .form-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1400px;
        }
        .form-grid-tablet {
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .form-grid-mobile {
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .input-group {
          border: 2px dashed #ccc;
          padding: 20px;
          border-radius: 8px;
          background-color: #fff;
        }
        .input-group-error {
          border: 2px dashed #ff4444;
        }
        .input-group-success {
          border: 2px dashed #00cc66;
        }
        .label {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #000;
        }
        .helper-text {
          font-size: 12px;
          color: #666;
          margin-bottom: 12px;
        }
        .card-number-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          background-color: #fff;
          transition: all 0.2s;
        }
        .card-number-wrapper-focused {
          border: 2px solid #0066ff;
          padding: 11px;
        }
        .card-number-wrapper-error {
          border: 2px solid #ff4444;
          padding: 11px;
        }
        .card-number-wrapper-success {
          border: 2px solid #00cc66;
          padding: 11px;
        }
        .card-icon {
          font-size: 18px;
          color: #666;
        }
        .card-number-inputs {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
        }
        .card-input {
          width: 50px;
          border: none;
          outline: none;
          font-size: 16px;
          text-align: center;
          font-family: monospace;
        }
        .separator {
          color: #999;
        }
        .status-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
        }
        .success-icon {
          background-color: #00cc66;
          color: #fff;
        }
        .error-icon {
          background-color: #ff4444;
          color: #fff;
        }
        .text-input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 16px;
          outline: none;
          transition: all 0.2s;
        }
        .text-input-focused {
          border: 2px solid #0066ff;
          padding: 11px;
        }
        .text-input-error {
          border: 2px solid #ff4444;
          padding: 11px;
        }
        .expiry-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .expiry-input {
          width: 60px;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 16px;
          text-align: center;
          outline: none;
          transition: all 0.2s;
        }
        .expiry-input-focused {
          border: 2px solid #0066ff;
          padding: 11px;
        }
        .expiry-input-error {
          border: 2px solid #ff4444;
          padding: 11px;
        }
        .error-message {
          color: #ff4444;
          font-size: 12px;
          margin-top: 8px;
        }
        .dimension-badge {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #8b5cf6;
          color: #fff;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
        }
      `}</style>
      
      <h1 className="heading">Inputs</h1>
      
      <div className={getResponsiveGridClass()}>
        <div className="column">
          {[0, 3].map(index => (
            <div 
              key={cards[index].id} 
              className={`input-group ${cards[index].error ? 'input-group-error' : ''} ${cards[index].success ? 'input-group-success' : ''}`}
            >
              <div className="label">Card number</div>
              <div className="helper-text">Enter the 16-digit card number on the card</div>
              {renderCardNumber(cards[index])}
              {cards[index].error && (
                <div className="error-message">Error message</div>
              )}
            </div>
          ))}
        </div>

        <div className="column">
          {[1, 4].map(index => (
            <div 
              key={cards[index].id} 
              className={`input-group ${cards[index].error ? 'input-group-error' : ''}`}
            >
              <div className="label">Card owner</div>
              <div className="helper-text">Enter the name on the card</div>
              {renderOwner(cards[index])}
              {cards[index].error && (
                <div className="error-message">Error message</div>
              )}
            </div>
          ))}
        </div>

        <div className="column">
          {[2, 5].map(index => (
            <div 
              key={cards[index].id} 
              className={`input-group ${cards[index].error ? 'input-group-error' : ''}`}
            >
              <div className="label">Expiry date</div>
              <div className="helper-text">Enter the expiration date of the card</div>
              {renderExpiry(cards[index])}
              {cards[index].error && (
                <div className="error-message">Error message</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="dimension-badge">428 Hug × 273 Hug</div>
    </div>
  );
};

export default CreditCardForm;  