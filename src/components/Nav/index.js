import React from "react";
import {Link} from "react-scroll";
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
                    <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>
                    Home
                    </Link></li>
                    <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                    About Me
                    </Link></li>
                    <li><Link activeClass="active" to="work" spy={true} smooth={true} offset={50} duration={500}>
                    Projects
                    </Link></li>
                    <li><Link activeClass="active" to="testimonial" spy={true} smooth={true} offset={50} duration={500}>
                    Testimonial
                    </Link></li>
                    <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                    Let's talk
                    </Link></li>
                  </ul>
             </div>
        </div>
   </div>
    )
}



export default Nav;