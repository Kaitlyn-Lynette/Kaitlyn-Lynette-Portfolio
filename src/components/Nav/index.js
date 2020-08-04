import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
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
                       {/* <li class="smoothScroll">Home</li>
                       <li class="smoothScroll">About Me</li>
                       <li class="smoothScroll">Project</li>
                       <li class="smoothScroll">Testimonial</li>
                       <li class="smoothScroll">Let's talk</li> */}
                    <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>
                    Home
                    </Link>
                    <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>
                    About Me
                    </Link>
                    <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>
                    Project
                    </Link>
                    <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>
                    Testimonial
                    </Link>
                    <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>
                    Let's talk
                    </Link>

                  </ul>
             </div>
        </div>
   </div>
    )
}



export default Nav;