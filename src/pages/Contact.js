import React from "react"

function Contact () {
        return (
        <section id="contact">
        <div className="container">
             <div className="row">

                    <div className="col-md-offset-3 col-md-6 col-sm-offset-2  col-sm-8">
                    
                            <div className="contact-info">
                                <h5>say hello</h5>
                                <h4>If you have any questions or want to know more, please don't hesitate to get in contact with me</h4>
                            </div>
                    </div>

                    <div className="col-md-offset-2 col-md-8 col-sm-12">
                    
                            <form id="contact-form" role="form">
                        
                                <h6 className="text-success">Your message has been sent successfully. </h6>
                                
                                
                                <h6 className="text-danger">E-mail must be valid and message must be longer than 1 character.</h6>

                                <div className="col-md-6 col-sm-6">
                                    <input type="text" className="form-control" id="cf-name" name="cf-name" placeholder="Name" />
                                </div>

                                <div className="col-md-6 col-sm-6">
                                    <input type="email" className="form-control" id="cf-email" name="email" placeholder="Email" />
                                </div>

                                <div className="col-md-12 col-sm-12">
                                    <input type="text" className="form-control" id="cf-subject" name="subject" placeholder="Subject" />
                                    <textarea className="form-control" rows="5" id="cf-message" name="cf-message" placeholder="Message"></textarea>
                                </div>

                                <div className="col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                                    <button type="submit" className="form-control" id="cf-submit" name="submit">Send Message</button>
                                </div>
                        </form>
                    </div>

                </div>
        </div>
        </section>
        )
}

export default Contact;