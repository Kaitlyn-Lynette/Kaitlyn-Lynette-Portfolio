
import React from "react";
import {Link}  from "react-router-dom"


function Home () {
    return (
    <section id="home">
     <div className="container">
          <div className="row">

               <div className="col-md-6 col-sm-6">
                    <div className="home-img"></div>
               </div>

               <div className="col-md-6 col-sm-6">
                    <div className="home-text">
                         <h5>hey there, this is my personal site.</h5>
                         <h1>I am a new creative and scrappy web developer with professional experience as a technical project specialist based in South Brooklyn.</h1>
                         <a href="#about" class="btn section-btn smoothScroll">Discover More <i class="fa fa-angle-right"></i></a>
                    </div>
               </div>

          </div>
     </div>
    </section>
    )
}

export default Home;