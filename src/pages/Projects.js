import React from "react";


function Project () {
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
                        <h5>Product</h5>
                        <h4>Wood D sTudio</h4>
                    </div>
            </div>

            <div className="col-md-4 col-sm-6">
                    
                    <div className="work-thumb">
                        <a href="images/work-1.jpg" className="image-popup">
                            <img src="images/work-1.jpg" className="img-responsive" alt="Work" />
                        </a>
                    </div>
                    <div className="work-overlay">
                        <h5>Photography</h5>
                        <h4>Maladon Zone Lite</h4>
                    </div>
            </div> 

            <div className="col-md-4 col-sm-6">
                
                    <div className="work-thumb">
                        <a href="images/work-1.jpg" className="image-popup">
                            <img src="images/work-1.jpg" className="img-responsive" alt="Work" />
                        </a>
                    </div>
                    <div className="work-overlay">
                        <h5>Mockup</h5>
                        <h4>Drink Palon</h4>
                    </div>
            </div>      

        </div>
    </div>
    </section>
    )
}

export default Project;