import React from "react";
import { Suspense } from "react";
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
//  vercel analytics
// import { SpeedInsights } from "@vercel/speed-insights/react";
// import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Nav />
          <Routes>
            <Route exact="true" path="/" element={<Homepage />} />
            {/* <Route exact path="/about" element={<About />} /> */}
            <Route exact="true" path="/contact" element={<Contact />} />
            <Route exact="true" path="/gallery" element={<Gallery />} />
            {/* <Route exact="true" path="/products" element={<Products />} /> */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
          {/* <SpeedInsights />
          <Analytics /> */}
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
