import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar lang={lang} setLang={setLang} />

      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/products" element={<Products lang={lang} />} />
        <Route path="/product/:id" element={<ProductDetails lang={lang} />} />
        <Route path="/gallery" element={<Gallery lang={lang} />} />
        <Route path="/contact" element={<Contact lang={lang} />} />
      </Routes>

      <Footer lang={lang} />
      <BackToTopButton />
    </BrowserRouter>
  );
}

export default App;