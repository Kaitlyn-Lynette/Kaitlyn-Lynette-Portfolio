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
                              <video width="300" height="300" controls>
                              <source src="images/CalmateWebsite.mp4" type="video/mp4" />
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
                    </div>
                    {/* <div className="col-lg-8 col-md-6 col-sm-6">
                         <div className="presentation-title">
                              <h2>Pitch Deck</h2>
                         </div>
               
                         <div className="work-presentation">
                              <iframe title= "presentation" src="https://docs.google.com/presentation/d/e/2PACX-1vRO2m3wfUIq8nsxCfB-gTaGLVSiW2AvHHuuyWVZ9PyS3XyJ9SjgEc6uPwQ4SyLElEhNpUKxo-CnOy1r/embed?start=true&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                         </div>
                    </div> */}
               </div>
          </div>
     </section>
    )
}

export default Projects;