import { Routes, Route ,BrowserRouter} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/profile/Profile";
import Prfle from "./pages/profile/Prfle";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <Navbar />

      <div className="page-wrapper">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/prfle" element={<Prfle />}/>


        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
