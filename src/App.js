import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// Pages EN
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
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
