import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Navbar from "./Components/Navbar"; // Optional if you have one
import Footer from "./Components/Footer";

import Projects from "./Pages/Projects";

function App() {
  return (
    <Router>
      {/* Navbar stays visible on all pages */}
      <Navbar />
      
      {/* Routes define which component shows at which path */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
