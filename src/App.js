import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Footer from "./components/layout/Footer";
import Banner from "./components/layout/Banner";
import Contact from "./components/pages/Contact";


function App() {
  return (
    <div className="body">
      <Router>
        <header>
          <nav>
            <NavBar />
          </nav>
          <Banner  />
        </header>
        <div>
          <Routes>
            
            <Route exact path="*" element={<Home />} />
            <Route exact path="/home/*" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
