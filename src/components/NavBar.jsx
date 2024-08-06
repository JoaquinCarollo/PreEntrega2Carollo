import { CartWidget } from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">UltraComics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Comics</Nav.Link>
            <Nav.Link href="#features">Mangas</Nav.Link>
            <Nav.Link href="#pricing">Otros</Nav.Link>
            <Nav.Link href="#pricing">Registrarse</Nav.Link>
            <Nav.Link href="#pricing">Iniciar Sesión</Nav.Link>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
