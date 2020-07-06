import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Talk from "./pages/Talk";
import Testimonial from "./pages/Testimonial";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/experience" component={Talk} />
          <Route exact path="/experience" component={Testimonial} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
