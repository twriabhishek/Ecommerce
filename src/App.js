import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import AddinCart from "./components/AddtoCart/AddinCart";
import Footer from "./components/Footer";
import About from "./components/About/About";
import Contactus from "./components/Contactus/Contactus";

function App() {
  return (
    <>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact-us" element={<Contactus />} />
            <Route path="/addinCart" element={<AddinCart />} />
          </Routes>
        <Footer />
    </>
  );
}

export default App;
