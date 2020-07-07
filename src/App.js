import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Talk from "./pages/Talk";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Projects} />
          <Route exact path="/testimonial" component={Talk} />
          <Route exact path="/contact" component={Testimonial} />
      </div>
    </Router>
  );
}

export default App;
