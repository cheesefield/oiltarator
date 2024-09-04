import React from "react";
import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "./style.css";
// Pages EN
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import ErrorPage from "./pages/ErrorPage.js";
// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
