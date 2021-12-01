import React from 'react';
import './Header.css';
import { Col, Container, Row } from 'react-bootstrap';
import myPhoto from '../../../images/My-pic-2.png';
import resume from '../../../images/Resume.pdf';


const Header = () => {


    return (
        <div id="home" className="header-section">
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <div className="header-info">
                            <h4>Hello, I'm</h4>
                            <h1 >Md. Arifur Rahman</h1>
                            <h6>Front-end || JavaScript || React</h6>
                            <div>
                                <a href={resume} 
                                    download="Resume">
                                    <button className="get-resume">
                                        Get Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <div className="header-img">
                            <img src={myPhoto} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;