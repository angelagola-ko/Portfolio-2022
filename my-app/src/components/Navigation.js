import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Navigation = (props) => {
    return (
        <Navbar className="bg-dark text-white">
            <Container>
                <Navbar.Brand className="text-white">Angie's Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="nav">
                    <Nav.Link className="text-white" href="/">Home</Nav.Link>
                    <Nav.Link className="text-white" href="/about">About</Nav.Link>
                    <Nav.Link className="text-white" href="/Projects">Projects</Nav.Link>
                    <Nav.Link className="text-white" href="/Resume">Resume</Nav.Link>
                    <Nav.Link className="text-white" href="/Contact">Contact</Nav.Link>
            
                </Nav>

            </Container>
        </Navbar>
    )
}

export default Navigation