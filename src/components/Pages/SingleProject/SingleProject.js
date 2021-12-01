import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './SingleProject.css';

const SingleProject = () => {
    let { projectKey } = useParams();

    const [projectDetails, setProjectDetails] = useState({});

    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => getSingleProject(data))
    }, [projectKey])

    const getSingleProject = allProject => {
        setProjectDetails(allProject.find(findProject => findProject.id == projectKey))
    }

    console.log(projectKey, projectDetails)

    return (
        <div className="singleProject-section">
            <Container>
                <Row>
                    <Col>
                        <div className="single-project-img">
                            <img src={projectDetails.img} alt="" />
                        </div>

                    </Col>
                    <Col>
                        <div className="single-project-info">
                            <h4>{projectDetails.projectName}</h4>
                            <p>{projectDetails.description}</p>
                            <div className="project-links">
                                <a href={projectDetails.liveLink} target="_blank" rel="noreferrer"><button>Website</button></a>
                                <a href={projectDetails.codeLink} target="_blank" rel="noreferrer"><button>Clients Code</button></a>
                                {
                                    projectDetails.serverLink && <a href={projectDetails.serverLink} target="_blank" rel="noreferrer"><button>Server Code</button></a>
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default SingleProject;