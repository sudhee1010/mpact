import { Routes, Route ,BrowserRouter} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Faq from "./pages/faq/Faq";


function App() {
  return (
    <>
      <Navbar />

      <div className="page-wrapper">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq/>} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
