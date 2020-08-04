import React from "react";
import Nav from "./components/Nav"
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Testimonial from "./pages/Testimonial";

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
          id="projects"
        />
        <Testimonial
          // dark={false}
          id="testimonial"
        />
        <Contact
          // dark={true}
          id="contact"
        />
      </div>
  );
}

export default App;
