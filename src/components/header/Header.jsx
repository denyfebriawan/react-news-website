import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {
                navigate("/")
            }}>Home</Nav.Link>
            <Nav.Link onClick={() => {
                navigate("/add-news")
            }}>Form</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    );
}



export default Header;