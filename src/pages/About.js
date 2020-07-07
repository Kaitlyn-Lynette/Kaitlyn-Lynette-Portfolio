import React from "react";

function About () {
   return (
    <section id="about">
        <div className="container">
            <div className="row">

                <div className="col-md-5 col-sm-6">
                    <div className="about-text">
                            <h5>About my story</h5>
                            <h2>Montana is art director and product designer based in London</h2>
                            <div>
                                <p>An award winning digital branding agency, driving sales and increasing value with exceptional websites, brand.</p>
                                <p>Our collaborative approach to problem-solving years of experience bringing digital products to market involved in your next project.</p>
                                <p>Just shoot me a message at <a href="mailto:yourname@gmail.com">hello@montana-design.co</a>.</p>
                            </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="about-image">
                            <img src="images/about-img.jpg" className="img-responsive" alt="about"> </img>
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
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                                    </div>

                            <strong>CMS Implementation</strong>
                                <span className="color-white pull-right">85%</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;"></div>
                                    </div>

                            <strong>Art Direction</strong>
                                <span className="color-white pull-right">60%</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
                                    </div>

                            <strong>HTML / CSS / Javascript</strong>
                                <span className="color-white pull-right">95%</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%;"></div>
                                    </div>
                    </div>
                    </div>
            </div>
        </div>
    </section>
    )
}

export default About;