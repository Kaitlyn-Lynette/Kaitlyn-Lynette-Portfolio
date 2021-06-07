import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "../components/carousel/Item";
import "../components/carousel/styles.css";

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const breakPoints = [
     // { width: 1, itemsToShow: 1 },
     // { width: 550, itemsToShow: 2 },
     // { width: 768, itemsToShow: 3 },
     { width: 1200, itemsToShow: 1 },
   ];

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
               {/* <OwlCarousel className='owl-theme'> */}
                    {/* <div id="owl-testimonial" className="owl-carousel"> */}
                         <Carousel breakPoints={breakPoints}>

                         <Item>
                              <p>"Kaitlyn is without a doubt one of most hardworking and talented students I've had the privilege to teach. From the very beginning of my time teaching her she demonstrated a formidable tenacity in her approach to problem solving that was rivaled only by her focus. Kaitlyn consistently tested herself working on either end of the stack, repeatedly gravitating away from her established strengths to sharpen her skills in areas she believed she could still improve, seeing each challenge as an opportunity for deeper understanding. An exercise was not over when Kaitlyn got her code to run but only when she completely understood how every piece fit together. She showed an early aptitude for both MongoDB and SQL but has demonstrated a consistent passion for React.js, continuing to study and build React apps with her former classmates long after the course concluded. As a teammate Kaitlyn has a unique ability to exude authority keeping her team organized and on task while still maintaining an air of camaraderie with her natural charisma. I expect much success in her future as an engineer and can say she would be a valuable addition to any development team without question."</p>
                                   <div className="tst-author">
                                        <div className="tst-foto">
                                             <img src="images/columbia_testimonial.jpg" className="img-responsive img-circle" alt="Testimonial" />
                                        </div>
                                        <div className="tst-author-info">
                                             <h4>Justin Pinero</h4>
                                             <h5>Course Assistant Columbia University, Software Engineer Aquent</h5>
                                        </div>
                                   </div>
                         </Item>

                         <Item>
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
                         </Item>

                         <Item>
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
                         </Item>

                         <Item>
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
                         </Item>

                         </Carousel>
              </div>
               {/* </OwlCarousel> */}
          </div>
     </div>
</section>

    )
}

export default Testimonial;
