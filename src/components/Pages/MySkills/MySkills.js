import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import './MySkills.css';
import skillsIMG from '../../../images/Skills.svg';

const MySkills = () => {
    return (
        <div id="skills" className="skill-section">
            <Container>
                <h2 className="skill-heading">My <span>Skills</span></h2>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <div className="skills-img">
                            <img src={skillsIMG} alt="" />
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <div className="skills-details">
                            <div className="progress-pading">
                                <div className="progress-info">
                                    <h6>html</h6>
                                </div>
                                <ProgressBar striped variant="warning" now={90} />
                            </div>
                            <div className="progress-pading">
                                <div className="progress-info">
                                    <h6>css</h6>
                                </div>
                                <ProgressBar striped variant="warning" now={80} />
                            </div>
                            <div className="progress-pading">
                                <div className="progress-info">
                                    <h6>bootstrap</h6>
                                </div>
                                <ProgressBar striped variant="warning" now={95} />
                            </div>
                            <div className="progress-pading">
                                <div className="progress-info">
                                    <h6>javascript</h6>
                                </div>
                                <ProgressBar striped variant="warning" now={70} />
                            </div>
                            <div className="progress-pading">
                                <div className="progress-info">
                                    <h6>react</h6>
                                </div>
                                <ProgressBar striped variant="warning" now={65} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MySkills;