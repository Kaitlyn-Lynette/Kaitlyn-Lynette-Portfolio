import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
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
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/testimonial" component={Testimonal} />
          <Route exact path="/contact" component={Contact} /> */}
        <Home
          dark={true}
          id="section1"
        />
        <About
          dark={false}
          id="section2"
        />
        <Projects
          dark={true}
          id="section3"
        />
        <Testimonial
          dark={false}
          id="section4"
        />
        <Contact
          dark={true}
          id="section5"
        />
      </div>
  );
}

export default App;
