import React from "react";


function Projects () {
    return (
     <section id="work">
          <div className="container">
               <div className="row">
                    <div className="clearfix"></div>

                    <div className="col-md-4 col-sm-6">
                         <div className="work-title">
                              <h2>Lifstyle Brand on Shopify</h2>
                              <div className="title">
                                   <a href="https://calmateco.com/"> <h4>Calmate</h4></a>
                              </div>
                         </div>

                         <div className="work-thumb">
                              <video width="300" height="500" controls>
                              <source src="images/CalmateWebMobile.mp4" type="video/mp4" />
                              </video>
                         </div>
                         {/* <p>Developed this site using Shopify liquid and documented my experience with liquid. </p>
                                   <a href="https://medium.com/@kaitlyn.l.rodriguez/thoughts-on-building-a-site-with-shopify-6ab083351f75"><h4>Read my thoughts on the development here</h4></a> */}
                    </div>
                  
                    <div className="col-md-4 col-sm-6">

                         <div className="work-title">
                              <h2>React Mobile Web Application</h2>
                              <div className="title">
                                   <a href="https://chirrup-app.herokuapp.com"> <h4>Chirrup!</h4> </a>
                              </div>
                         </div>
                    
                         <div className="work-thumb">
                              <video width="300" height="500" controls>
                              <source src="images/movie.mp4" type="video/mp4" />
                              </video>
                         </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-6">
                         
                         <div className="work-title">
                              <h2>NonProfit Site on Wordpress</h2>
                              <a href="http://karama.nyc/"> <h4>Karama Kids</h4></a>
                         </div>     
                   
                         <div className="work-thumb">
                              <video width="300" height="500" controls>
                              <source src="images/karamakids.mp4" type="video/mp4" />
                              </video>
                         </div>
                    </div>
               </div>
          </div>
     </section>
    )
}

export default Projects;