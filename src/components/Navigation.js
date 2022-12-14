import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom";
import '../App.css';

const Navigation = (props) => {
    return (
        <Navbar className="bg text-white py-4">
            <Container>
                <Navbar.Brand className="text-white">Angie's Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="nav">
                    <Nav.Link className="text-white" as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/about">About</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/Portfolio">Portfolio</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/Resume">Resume</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/Contact">Contact</Nav.Link>
            
                </Nav>

            </Container>
        </Navbar>
    )
}

export default Navigation