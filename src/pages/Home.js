import React from "react";


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
                         <h1>I started developing websites to promote my own small business ideas and those of my friends. Check out some of my work. </h1>
                         <a href="/about" className="btn section-btn smoothScroll">Learn More<i className="fa fa-angle-right"></i></a>
                    </div>
               </div>

          </div>
     </div>
    </section>
    )
}

export default Home;