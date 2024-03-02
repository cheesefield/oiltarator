import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// Pages EN
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
// Pages DE
import HomepageDe from "./pages/Homepage";
import AboutDe from "./pages/About";
import ContactDe from "./pages/Contact";
import ProductsDe from "./pages/Products";
// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage.js";

function App() {
  const [language, setLanguage] = useState(false);

  return (
    <div className="App">
      <Router>
        <Nav setLanguage={setLanguage} language={language} />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/de" element={<HomepageDe />} />
          <Route exact path="/de/about" element={<AboutDe />} />
          <Route exact path="/de/contact" element={<ContactDe />} />
          <Route exact path="/de/products" element={<ProductsDe />} />
          <Route
            path="*"
            element={ErrorPage}
            setLanguage={setLanguage}
            language={language}
          />
        </Routes>
        <Footer language={language} />
      </Router>
    </div>
  );
}

export default App;
