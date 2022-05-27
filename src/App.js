// IMPORTS
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import About from "./Pages/About";
import Errorpage from "./Pages/Errorpage";

// Components
import Header from "./Components/Header"
import Footer from "./Components/Footer"

//BOOTSTRAP-UI
import "bootstrap/dist/css/bootstrap.min.css";


// FUNCTION REACT APP
function App() {
  return (
    <Router>

      <div className="overlay">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </main>
        <Footer />
      </div>
  
    </Router>
  );
}

export default App;
