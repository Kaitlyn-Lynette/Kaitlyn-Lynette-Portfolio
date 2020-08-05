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
                            <a href="images/work-3.jpg" className="image-popup">
                                 <img src="images/work-3.jpg" className="img-responsive" alt="Work" />
                            </a>
                       </div>
                       <div className="work-overlay">
                            {/* <h5>Chirrup</h5> */}
                            <h4><a href="https://chirrup-app.herokuapp.com/">Chirrup!</a></h4>
                       </div>
                  </div>      
   
             </div>
        </div>
        </section>
    )
}

export default Projects;