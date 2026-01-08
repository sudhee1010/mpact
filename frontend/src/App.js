// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
   
import About from "./pages/About/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Faq from "./pages/faq/Faq";
import OrderSuccess from "./pages/Ordersuccess";
import Trackpage from "./pages/Trackpage";
import ProductPage from "./pages/ProductSpec";
import Input from "./pages/input/Input";
// import Cart from "./pages/Cart";

import Cart from "./pages/Cart";
import Payment from "./pages/Payment";

import Profile from "./pages/profile/Profile";
import Prfle from "./pages/profile/Prfle";
import SeeMore from "./pages/SeeMore";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* NAVBAR IS ALWAYS MOUNTED */}
      <Navbar />

      {/* LOADER OVERLAY */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/seeMore" element={<SeeMore />} />
          <Route path="/productspec" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/prfle" element={<Prfle />}/>


          <Route path="/payment" element={<Payment />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/trackorder" element={<Trackpage />} />


          
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/input" element={<Input/>} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>   


      {/* <Footer /> */}
    </>
  );
}

export default App;
