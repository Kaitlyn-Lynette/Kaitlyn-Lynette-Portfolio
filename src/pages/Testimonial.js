import React from "react";


function Testimonial () {

    return (

<section id="testimonial">
     <div className="container">
          <div className="row">

               <div className="col-md-offset-3 col-md-6 col-sm-12">
                    
                    <div className="section-title">
                         <h2>what people say</h2>
                    </div>
               </div>

               <div className="clearfix"></div>

               <div className="col-md-offset-2 col-md-8 col-sm-12">
                    <div id="owl-testimonial" className="owl-carousel">
                         <div className="item">
                              <p>I've been blown away with the results Montana has helped us achieve in an incredible short space of time.  In less than 3 months we had more than a 300% uplift in organic traffic, saving £10,000's per month on CPC!        </p>
                                   <div className="tst-author">
                                        <div className="tst-foto">
                                             <img src="images/testimonial-img.jpg" className="img-responsive img-circle" alt="Testimonial" />
                                        </div>
                                        <div className="tst-author-info">
                                             <h4>Lindane</h4>
                                             <h5>Creative Director</h5>
                                        </div>
                                   </div>
                         </div>

                         <div className="item">
                              <p>Montana is an amazing marketer. With his guidance, we managed to form a strategy that lead to consistent page 1 rankings for high competition keywords across our brand new blog. His strategy doubled our blog traffic within 3 months!</p>
                                   <div className="tst-author">
                                        <div className="tst-foto">
                                             <img src="images/testimonial-img.jpg" className="img-responsive img-circle" alt="Testimonial" />
                                        </div>
                                        <div className="tst-author-info">
                                             <h4>Bacelo</h4>
                                             <h5>Web Designer</h5>
                                        </div>
                                   </div>
                         </div>

                         <div className="item">
                              <p>I’m a author, speaker and multi-focused designer working on interfaces and branding for digital products and working with established global brands and startups to create digital experiences and products.</p>
                                   <div className="tst-author">
                                        <div className="tst-foto">
                                             <img src="images/testimonial-img.jpg" className="img-responsive img-circle" alt="Testimonial" />
                                        </div>
                                        <div className="tst-author-info">
                                             <h4>Donald</h4>
                                             <h5>Project Manager</h5>
                                        </div>
                                   </div>
                         </div>

                    </div>
               </div>

          </div>
     </div>
</section>

    )
}

export default Testimonial;
