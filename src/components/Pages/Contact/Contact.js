import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yvc5kcg', 'template_ucqhj1v', e.target, 'user_RWa3fKUIUiyuAG5kejmtJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <div id="contact" className="contact-section">
            <Container>
                <h2 className="contact-heading">Contact <span>Us</span></h2>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <div className="contact-info">
                            <h4>DON'T BE SHY !</h4>
                            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                        </div>
                        <div className="contact-option">
                            <p><i className="far fa-envelope"></i> arifbinsiddiq1@gmail.com</p>
                            <p><i className="fas fa-phone-alt"></i> +8801759602788</p>
                        </div>
                        <div className="social-list">
                            <a href="https://www.facebook.com/arif.siddiq.54" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com/ArifurR99673235" target="_blank" rel="noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/arifbinsiddiq/" target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/arifbinsiddiq/" target="_blank" rel="noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/Arif-Bin-Siddiq" target="_blank" rel="noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <div className="form-div">
                            <form onSubmit={sendEmail}>
                                <input type="text" placeholder="Your Name" name="name" />
                                <input type="email" placeholder="Your Email" name="email" />
                                <input type="text" placeholder="Your Subject" name="subject"/>
                                <textarea name="message" placeholder="Your Message" type="text" id=""></textarea>
                                <input className="submit-btn" type="submit" value="send me" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <p className="copyright">Copyright © Arif Bin Siddiq</p>
        </div>
    );
};

export default Contact;