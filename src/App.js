import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./style.css";
// Pages EN
import Homepage from "./pages/Homepage";
// import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
// import Products from "./pages/Products";
// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage.js";
import Loading from "./components/Loading.js";

function App() {
  const [language, setLanguage] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="App">
      <Router>
        <Nav setLanguage={setLanguage} language={language} />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          {/* <Route exact path="/about" element={<About />} /> */}
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/gallery" element={<Gallery />} />
          {/* <Route exact path="/products" element={<Products />} /> */}
          <Route
            path="*"
            element={<ErrorPage />}
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
