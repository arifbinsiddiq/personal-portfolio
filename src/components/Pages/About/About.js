import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import aboutme from '../../../images/AboutMe.svg';

const About = () => {
    return (
        <div id="about" className="about-section">
            <Container>
                <h2 className="about-heading">About <span>Me</span></h2>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <div className="about-details">
                            <p>Hi,
                            I am Arifur Rahman. I'm a Professional Front-end Developer. I Like To Do Web coding, Learning New Things, Fixing Problems, And Development websites.</p>
                            <p>My expertise areas are:
                            HTML5, CSS3, Bootstrap, Tailwind CSS, SASS, JavaScript, ReactJs, React Bootstrap, React Material UI, Firebase Authentication. I build fully responsive (Mobile, Tablet, Desktop) and cross-browser compatible websites.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <div className="about-img">
                            <img src={aboutme} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;