import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//adding/installing bootswatch n library


export default function Header() {


    return (
        <div>
            <Container>
                <Navbar bg="dark" variant='dark' expand="lg">
                    <Container>
                        <Navbar.Brand >TSF Notes</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to='/'>
                                    <Nav.Link >Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/notes'>
                                    <Nav.Link >Notes</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/create'>
                                    <Nav.Link >Create</Nav.Link>
                                </LinkContainer>




                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>

        </div>
    )
}
