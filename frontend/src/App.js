import { Routes, Route ,BrowserRouter} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Faq from "./pages/faq/Faq"
import OrderSuccess from "./pages/Ordersuccess";
import Trackpage from "./pages/Trackpage";
import ProductPage from "./pages/ProductSpec";
// import Cart from "./pages/Cart";


function App() {
  return (
    <>
      <Navbar />

      <div className="page-wrapper">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/productspec" element={<ProductPage />} />
          {/* <Route path="/cart" element={<Cart />} /> */}


          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/trackorder" element={<Trackpage />} />

          
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq/>} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
