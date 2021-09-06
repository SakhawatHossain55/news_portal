import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className="header" expand="lg">
            <Container>
                <Navbar.Brand as={Link} className=" header__logo" to="/">Go Wash</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link active  as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link active as={Link} to="#">About us</Nav.Link>
                        <Nav.Link active as={Link} to="#">Projects</Nav.Link>
                        <Nav.Link active as={Link} to="#">Contact</Nav.Link>
                        <Nav.Link active as={Link} to="/sidebar">Admin</Nav.Link>
                        <Nav.Link active as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;