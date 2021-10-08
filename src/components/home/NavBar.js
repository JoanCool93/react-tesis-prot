import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AppRouter } from '../../routers/AppRouter';

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">SmartDock</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Docking" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Ligandos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Proteinas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Ambos</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    {/* <Nav className="justify-content-end">
                        <Nav.Link href="/auth/login">Login</Nav.Link>
                        <Nav.Link href="/auth/register">Register</Nav.Link>
                    </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <AppRouter />
        </div>
    )
}
