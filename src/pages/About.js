import React from "react";


function About () {
   return (
    <section id="about">
        <div className="container">
            <div className="row">
           
                <div className="col-md-6 col-sm-6">
                    <div className="about-text">
                            <h2>About my story</h2>
                            <p>I started my career professionally working for the Corporate Investment Bank J.P. Morgan through a full scholarship program called Smart Start. In 2016, I joined the Customer Service team for a SAAS company name Olo for 3.5 years and my role evolved in a Technical Product Specialist. In this role I worked with Customer Success Managers, Product Specialist, and Engineers. To develop technical skills I enrolled into Columbia's Engineering Certficate program. I completed the web development bootcamp June 2020. Since then I have applied my web development skills for personal entrepreneurial projects.</p>
                            <div>
                                <p>I'm interested in obtaining professional work experience to further enhance my web development and technical project management skills. </p>
                                <p>Please contact me at <a href="mailto:yourname@gmail.com">kaitlyn.l.rodriguez@gmail.com</a>.</p>
                            </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <div className="timeline-image">
                        <img src="../images/timeline.png" className="timeline-image" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <div className="about-text">
                        <h2>Education</h2>
                        <div>
                            <p>Columbia University Executive Education Full-Stack Web Development Certificate Program (March - June 2020)</p>
                            <p>Fordham University Bachelor of Science – Dual Concentration in Entrepreneurship and Finance (May 2015)</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <div className="cert-image">
                            <img src="../images/Rodriguez-Cert-2020.jpg" className="cert-image" alt="about" />
                    </div>
                </div>

                {/* <div className="col-md-3 col-sm-12">
                    <div className="skill-thumb">

                            <div className="section-title">
                                <h2>Skillset</h2>
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
                </div> */}
            </div>
        </div>
    </section>
    )
}

export default About;