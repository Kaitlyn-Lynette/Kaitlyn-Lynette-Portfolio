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
          // dark={true}
          id="home"
        />
        <About
          // dark={false}
          id="about"
        />
        <Projects
          // dark={true}
          id="work"
        />
        <Testimonial
          // dark={false}
          id="testimonial"
        />
        <Contact
          // dark={true}
          id="contact"
        />
        <Footer>
          
        </Footer>

      </div>
  );
}

export default App;
