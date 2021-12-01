import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <div>
            <Navbar fixed="top" className="nav-bg" expand="lg">
                <Container>
                    <HashLink className="brand-name" to="/#home">Md. Arifur Rahman</HashLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto"
                            navbarScroll
                        >
                            <HashLink className="nav-link" to="/#home">Home</HashLink>
                            <HashLink className="nav-link" to="/#about">About</HashLink>
                            <HashLink className="nav-link" to="/#skills">Skills</HashLink>
                            <HashLink className="nav-link" to="/#projects">Projects</HashLink>
                            <Link className="nav-link" to="/blogs" >Blog</Link>
                            <HashLink className="nav-link" to="/#contact">Contact</HashLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;