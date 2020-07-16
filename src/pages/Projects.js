import React from "react";
const project1 = "https://kaitlyn-lynette.github.io/COVID-19-Travel-Information-Project-1/"
const project2 = "https://peliculy.herokuapp.com/"
const project3 =  "https://chirrup-app.herokuapp.com/"


function Projects () {
    return (
        <section id="work">
        <div className="container">
             <div className="row">
   
                  <div className="col-md-5 col-sm-10">
                       
                       <div className="section-title">
                            <h5>Featured Projects</h5>
                            <h4>I design creative stuffs & build online digital products related business passionate.</h4>
                       </div>
                  </div>
   
                  <div className="clearfix"></div>
   
                  <div className="col-md-4 col-sm-6">
                   
                       <div className="work-thumb">
                            <a href="images/work-1.jpg" className="image-popup">
                                 <img src="images/work-1.jpg" className="img-responsive" alt="Work" />
                            </a>
                       </div>
                       <div className="work-overlay">
                            {/* <h5>Covid Travel Planner</h5> */}
                            <h4><a href="https://kaitlyn-lynette.github.io/COVID-19-Travel-Information-Project-1/">Covid Travel Planner</a></h4>
                       </div>
                  </div>
   
                  <div className="col-md-4 col-sm-6">
                    
                       <div className="work-thumb">
                            <a href="images/work-2.jpg" className="image-popup">
                                 <img src="images/work-2.jpg" className="img-responsive" alt="Work" />
                            </a>
                       </div>
                       <div className="work-overlay">
                            {/* <h5>Peliculy</h5> */}
                            <h4><a href="https://peliculy.herokuapp.com/">Peliculy</a></h4>
                       </div>
                  </div> 
   
                  <div className="col-md-4 col-sm-6">
                 
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