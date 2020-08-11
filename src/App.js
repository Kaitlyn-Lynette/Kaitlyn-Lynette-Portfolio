import React from "react";
import Nav from "./components/Nav"
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Testimonial from "./pages/Testimonial";
import Footer from "./pages/Footer";

function App() {
  return (
      <div>
        <Nav />
        <Home
          id="home"
        />
        <About
          id="about"
        />
        <Projects
          id="work"
        />
        <Testimonial
          id="testimonial"
        />
        <Contact
          id="contact"
        />
        <Footer />
      </div>
  );
}

export default App;
