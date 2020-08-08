import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


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
                    {/* <OwlCarousel
                     id="owl-testimonial"
                     className="owl-carousel"
                     loop
                     margin={10}
                     nav
                    > */}
                         <div className="item">
                              <p>"I had the pleasure of managing Kaitlyn in her Guest Engagement Technical Specialist role at Olo. Kaitlyn constantly sought opportunities to challenge herself and grow her technical abilities, going above and beyond role expectations, particularly in her leading of OAuth and CLASS certifications. Kaitlyn's tenacity and genuine interest in the technical side of implementations gave our team the confidence to dive more deeply into troubleshooting and problem solving, enabling us to better support our customers and partners."</p>
                                   <div className="tst-author">
                                        <div className="tst-foto">
                                             <img src="images/testimonial-img.jpg" className="img-responsive img-circle" alt="Testimonial" />
                                        </div>
                                        <div className="tst-author-info">
                                             <h4>Anna Crystal</h4>
                                             <h5>Director, Customer Success at Olo</h5>
                                        </div>
                                   </div>
                         </div>

                         <div className="item">
                              <p>"Kaitlyn's dedication is unmatched! I had the pleasure of being paired up with her to aid in the transition with our offshore support Kaitlyn quickly identified the need for in-person training instead of our initial remote approach, which resulted in her 8-week stay in Bogota, Colombia. During her time there she not only ensured the new team was up to speed but never lost sight of her responsibilities as a technical specialist. Her perseverance, strategic thinking, and attention to detail combined with her infectious energy truly set her apart. I would welcome any opportunity to work with Kaitlyn again.  "</p>
                                   <div className="tst-author">
                                        <div className="tst-foto">
                                             <img src="images/testimonial-img.jpg" className="img-responsive img-circle" alt="Testimonial" />
                                        </div>
                                        <div className="tst-author-info">
                                             <h4>Karina Fernandez</h4>
                                             <h5>Sr. Manager, Customer Success at Olo</h5>
                                        </div>
                                   </div>
                         </div>

                         <div className="item">
                              <p>"Kaitlyn was instrumental in leading my onboarding onto the Guest Experience team. Amongst the numerous tasks, issues, and projects that she had on her plate, she always dedicated time to share her product knowledge and strategies with me, which helped me develop in my role immensely. She never backed away from challenging integrations or troubleshooting issues and consistently exemplified what going above and beyond for internal and external teams meant. Her straightforward thinking and problem solving skills pushed our team to continually identify ways to improve our processes and come up with custom solutions for clients. Kaitlyn's work discipline and dedication would make her a great asset to any team!"</p>
                                   <div className="tst-author">
                                        <div className="tst-foto">
                                             <img src="images/testimonial-img.jpg" className="img-responsive img-circle" alt="Testimonial" />
                                        </div>
                                        <div className="tst-author-info">
                                             <h4>Gloria Chin</h4>
                                             <h5>Techinical Specialist, Customer Success at Olo</h5>
                                        </div>
                                   </div>
                         </div>
                    {/* </OwlCarousel> */}

               </div>
          </div>
     </div>
</section>

    )
}

export default Testimonial;
