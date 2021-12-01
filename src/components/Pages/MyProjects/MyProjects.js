import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyProjects.css';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        fetch('./project.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <div id="projects" className="project-section">
            <Container>
                <h2 className="project-heading">My <span>Projects</span></h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        projects?.map(project => <Col
                            key={project.id}
                            project={project}
                        >
                            <Card>
                                <Card.Img id="projects-img" variant="top" src={project.img} />
                                <Card.Body className="text-center">
                                    <Card.Title className="project-title">{project.projectName}</Card.Title>
                                    <>
                                    <Link to={`/projects/${project.id}`}><button className="details-btn">Details Now</button></Link>
                                    </>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default MyProjects;