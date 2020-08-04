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
                    {/* <div id="owl-testimonial" className="owl-carousel"> */}
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

                         {/* <div className="item">
                              <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                   <div className="tst-author">
                                        <div className="tst-foto">
                                             <img src="images/testimonial-img.jpg" className="img-responsive img-circle" alt="Testimonial" />
                                        </div>
                                        <div className="tst-author-info">
                                             <h4>Person 3</h4>
                                             <h5>Title</h5>
                                        </div>
                                   </div>
                         </div> */}

                    {/* </div> */}
               </div>
          </div>
     </div>
</section>

    )
}

export default Testimonial;
