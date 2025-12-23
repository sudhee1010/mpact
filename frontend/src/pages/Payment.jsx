import { useState } from "react";

export default function Payment() {
  const [selectedCard, setSelectedCard] = useState(1);
  const [setDefault, setSetDefault] = useState(false);

  return (
    <>
      <style>{`
*{box-sizing:border-box}
body{background:#2f2f2f;color:#fff;font-family:Arial}

/* PAGE */
.payment-page{
  max-width:1100px;
  margin:120px auto;
  padding:0 20px;
}

/* STEPPER */
.stepper{
  display:flex;
  align-items:center;
  gap:24px;
  margin-bottom:40px;
}
.step{
  display:flex;
  align-items:center;
  gap:8px;
  opacity:.5;
}
.step.active{opacity:1;color:#ffeb00}
.step .dot{
  width:22px;height:22px;
  border-radius:50%;
  border:2px solid #777;
  display:flex;
  align-items:center;
  justify-content:center;
}
.step.active .dot{
  background:#ffeb00;
  border-color:#ffeb00;
  color:#000;
  font-weight:900;
}

/* CARD BOX */
.box{
  background:#777;
  border-radius:16px;
  padding:26px;
  margin-bottom:30px;
}
.box h3{
  margin-bottom:20px;
}

/* REGISTERED CARD */
.card-row{
  display:grid;
  grid-template-columns:40px 1.2fr 1fr 1.2fr 1fr;
  align-items:center;
  padding:16px 0;
  border-bottom:1px solid rgba(255,255,255,.3);
  cursor:pointer;
}
.card-row:last-child{border:none}
.check{
  width:22px;height:22px;
  border-radius:50%;
  border:2px solid #ffeb00;
  display:flex;
  align-items:center;
  justify-content:center;
}
.check.active{
  background:#ffeb00;
  color:#000;
  font-weight:900;
}

/* ADD CARD */
.add-card{
  background:#2f3e36;
  border-radius:16px;
  padding:30px;
}
.add-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
}
input{
  width:100%;
  padding:14px;
  border-radius:8px;
  border:none;
  background:#9aa3a0;
  margin-top:6px;
}
.row{
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  gap:16px;
}

/* DEFAULT */
.default{
  display:flex;
  justify-content:flex-end;
  gap:10px;
  margin:20px 0;
}

/* BUTTON */
.btn{
  background:#ffeb00;
  border:none;
  padding:18px;
  width:260px;
  font-weight:900;
  cursor:pointer;
  border-radius:6px;
}

/* FOOTER ITEM */
.order-item{
  display:flex;
  align-items:center;
  gap:16px;
  margin-top:40px;
  opacity:.85;
}
      `}</style>

      <div className="payment-page">

        {/* STEPPER */}
        <div className="stepper">
          <div className="step active">
            <div className="dot">✓</div> Cart
          </div>
          <div className="step active">
            <div className="dot">✓</div> Addresses
          </div>
          <div className="step active">
            <div className="dot">3</div> Payment
          </div>
          <div className="step">
            <div className="dot">4</div> Confirm
          </div>
        </div>

        {/* REGISTERED CARDS */}
        <div className="box">
          <h3>Registered cards</h3>

          {[1, 2].map((id) => (
            <div
              key={id}
              className="card-row"
              onClick={() => setSelectedCard(id)}
            >
              <div className={`check ${selectedCard === id ? "active" : ""}`}>
                {selectedCard === id && "✓"}
              </div>
              <div>{id === 1 ? "Ziraat Bankası" : "T. İş Bankası"}</div>
              <div>1234</div>
              <div>{id === 1 ? "Hızır Kocaman" : "Jane Cooper"}</div>
              <div>12/34</div>
            </div>
          ))}
        </div>

        {/* ADD NEW CARD */}
        <div className="add-card">
          <div className="add-header">
            <h3>Add new card</h3>
            <span>VISA • Mastercard</span>
          </div>

          <label>
            Card number
            <input placeholder="1234 5678 9012 3456" />
          </label>

          <label>
            Card owner
            <input placeholder="Name on card" />
          </label>

          <div className="row">
            <label>
              MM
              <input placeholder="12" />
            </label>
            <label>
              YY
              <input placeholder="34" />
            </label>
            <label>
              CVV
              <input placeholder="012" />
            </label>
          </div>
        </div>

        {/* DEFAULT */}
        <div className="default">
          <input
            type="checkbox"
            checked={setDefault}
            onChange={(e) => setSetDefault(e.target.checked)}
          />
          <span>Set as default</span>
        </div>

        <button className="btn">Review your order</button>

        {/* ORDER ITEM */}
        <div className="order-item">
          <img src="/images/product.jpg" width="60" alt="Protein Wafers" />
          <div>
            PROTEIN WAFERS – VARIETY PACK (x1) <br />
            <strong>₹15.00</strong>
          </div>
        </div>
      </div>
    </>
  );
}
