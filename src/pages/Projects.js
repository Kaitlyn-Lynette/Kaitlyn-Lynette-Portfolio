import React from "react";


function Projects () {
    return (
     <section id="work">
          <div className="container">
               <div className="row">
                    <div className="clearfix"></div>

                    <div className="col-md-4 col-sm-6">
                         <div className="work-title">
                              <h2>Latest Project</h2>
                         </div>
                    
                         <div className="work-thumb">
                              <video width="300" height="500" controls>
                              <source src="images/movie.mp4" type="video/mp4" />
                              </video>
                         </div>
                         <div className="title">
                              <h4>Chirrup!</h4>
                         </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                         <div className="presentation-title">
                              <h2>Pitch Deck</h2>
                         </div>
               
                         <div className="work-presentation">
                              <iframe title= "presentation" src="https://docs.google.com/presentation/d/e/2PACX-1vRO2m3wfUIq8nsxCfB-gTaGLVSiW2AvHHuuyWVZ9PyS3XyJ9SjgEc6uPwQ4SyLElEhNpUKxo-CnOy1r/embed?start=true&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                         </div>
                    </div>
               </div>
          </div>
     </section>
    )
}

export default Projects;