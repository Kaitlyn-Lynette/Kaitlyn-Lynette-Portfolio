import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Testimonal from "./pages/Testimonial";

function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/testimonial" component={Testimonal} />
          <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
