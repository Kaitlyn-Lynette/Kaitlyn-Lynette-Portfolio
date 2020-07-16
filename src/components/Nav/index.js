import React from "react";
import "./style.css";



function Nav() {
    return (
        <div className="navbar custom-navbar navbar-fixed-top" role="navigation">
        <div className="container">
   
             <div className="navbar-header">
                  <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                       <span className="icon icon-bar"></span>
                       <span className="icon icon-bar"></span>
                       <span className="icon icon-bar"></span>
                  </button>
             
                  <a href="index.html" className="navbar-brand">Kaitlyn Lynette</a>
             </div>
   
            
             <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav navbar-right">
                       <li><a href="/" className="smoothScroll">Home</a></li>
                       <li><a href="/about" className="smoothScroll">About Me</a></li>
                       <li><a href="/projects" className="smoothScroll">Projects</a></li>
                       <li><a href="/experience" className="smoothScroll">Experience</a></li>
                       <li><a href="/testimonial" className="smoothScroll">Testimonial</a></li>
                       <li><a href="/contact" className="smoothScroll">Let's talk</a></li>
                  </ul>
             </div>
   
        </div>
   </div>
    )
}

export default Nav;