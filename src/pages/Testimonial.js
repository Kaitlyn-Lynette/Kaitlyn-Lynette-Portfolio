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
                              <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                   <div className="tst-author">
                                        <div className="tst-foto">
                                             <img src="images/testimonial-img.jpg" className="img-responsive img-circle" alt="Testimonial" />
                                        </div>
                                        <div className="tst-author-info">
                                             <h4>Anna Crystal</h4>
                                             <h5>Director of Customer Success at Olo</h5>
                                        </div>
                                   </div>
                         </div>

                         <div className="item">
                              <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                   <div className="tst-author">
                                        <div className="tst-foto">
                                             <img src="images/testimonial-img.jpg" className="img-responsive img-circle" alt="Testimonial" />
                                        </div>
                                        <div className="tst-author-info">
                                             <h4>Dennis Ryu</h4>
                                             <h5>Senior Product Manager at Olo</h5>
                                        </div>
                                   </div>
                         </div>

                         <div className="item">
                              <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                   <div className="tst-author">
                                        <div className="tst-foto">
                                             <img src="images/testimonial-img.jpg" className="img-responsive img-circle" alt="Testimonial" />
                                        </div>
                                        <div className="tst-author-info">
                                             <h4>Smita Patankar</h4>
                                             <h5>Project Manager at Olo</h5>
                                        </div>
                                   </div>
                         </div>

                    {/* </div> */}
               </div>

          </div>
     </div>
</section>

    )
}

export default Testimonial;
