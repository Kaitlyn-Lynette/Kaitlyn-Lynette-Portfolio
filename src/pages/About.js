import React from "react";


function About () {
   return (
    <section id="about">
        <div className="container">
            <div className="row">
           
                <div className="col-md-5 col-sm-6">
                    <div className="about-text">
                            <h5>About my story</h5>
                            <h2>Kaitlyn started her career professionally working for the Corporate Investment Bank J.P. Morgan and has followed a path that led to completing a web development bootcamp June 2020. Since then she's applied her web development skills for personal entrepreneurial projects. </h2>
                            <div>
                                <p>Earned a certificate in web development through Columbia's Engineering Bootcamp in June 2020.</p>
                                <p>Kaitlyn has a total of 9 years professional working experience. In March 2020, she started Columbia's Engineering Bootcamp, at the height of the pandemic, to pursue her interest in web development for her own entrepreneurial ideas. She is interested in obtaining professional work experience to further develop web development and technical project management skills.   </p>
                                <p>Please contact me at <a href="mailto:yourname@gmail.com">kaitlyn.l.rodriguez@gmail.com</a>.</p>
                            </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="about-image">
                            <img src="../images/about-img.jpg" className="img-responsive" alt="about" />
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="skill-thumb">

                            <div className="section-title">
                                <h2>Skillset</h2>
                                <p>Scale of 10 years</p>
                            </div>

                            <strong>Team Work</strong>
                                <span className="color-white pull-right">9 years</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}></div>
                                    </div>

                            <strong>Customer Service</strong>
                                <span className="color-white pull-right">4 years</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}></div>
                                    </div>

                            <strong>Project Management</strong>
                                <span className="color-white pull-right">4 years</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}></div>
                                    </div>

                            <strong>HTML / CSS / Javascript</strong>
                                <span className="color-white pull-right">5 months</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "0.5%"}}></div>
                                    </div>                            
                    </div>
                </div>
            
            </div>
        </div>
    </section>
    )
}

export default About;