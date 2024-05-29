import React from "react";
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

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          {/* <Route exact path="/about" element={<About />} /> */}
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/gallery" element={<Gallery />} />
          {/* <Route exact path="/products" element={<Products />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
