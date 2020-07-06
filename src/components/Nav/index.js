import React from "react";
import {Link} from "react-router-dom";


function Nav() {
    return (
    <div className="navbar navbar-default navbar-static-top" role="navigation">
        <div className="container">

            <div className="navbar-header">
                <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                </button>
             
                <a href="index.html" className="navbar-brand">Montana</a>
            </div>

 
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                        <li><a href="#home" class="smoothScroll">Home</a></li>
                        <li><a href="#about" class="smoothScroll">About Me</a></li>
                        <li><a href="#work" class="smoothScroll">Projects</a></li>
                        <li><a href="#testimonial" class="smoothScroll">Testimonial</a></li>
                        <li><a href="#contact" class="smoothScroll">Let's talk</a></li>
                </ul>
            </div>

        </div>
    </div>
    )
}

export default Nav;