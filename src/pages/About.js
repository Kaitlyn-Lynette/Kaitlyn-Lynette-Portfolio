import React from "react";


function About () {
   return (
    <section id="about">
        <div className="container">
            <div className="row">

                <div className="col-md-5 col-sm-6">
                    <div className="about-text">
                            <h5>About my story</h5>
                            <h2>Kaitlyn is a web developer based in South Brooklyn</h2>
                            <div>
                                <p>Earned a certificate in web development through Columbia's Engineering Bootcamp in June 2020.</p>
                                <p>Kaitlyn has a total of 10 years professional working experience. In March 2020, she enrolled in Columbia's Engineering Bootcamp to pursue a career as a full stack web developer. She previously worked in a Produt Specialist role at Olo, a SaaS restaurant technology company, and prior to that worked various roles at J.P. Morgan's Corporate & Investment Bank. The bank provided Kaitlyn with a strong foundation for working in a demanding professional environment and she brings a laser-focus balanced by a collaborative spirit to her work. </p>
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
                            </div>

                            <strong>Brand Identity</strong>
                                <span className="color-white pull-right">70%</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}></div>
                                    </div>

                            <strong>CMS Implementation</strong>
                                <span className="color-white pull-right">85%</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}></div>
                                    </div>

                            <strong>Art Direction</strong>
                                <span className="color-white pull-right">60%</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}></div>
                                    </div>

                            <strong>HTML / CSS / Javascript</strong>
                                <span className="color-white pull-right">95%</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}></div>
                                    </div>
                    </div>
                    </div>
            </div>
        </div>
    </section>
    )
}

export default About;