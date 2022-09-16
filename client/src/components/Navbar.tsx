import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/puppiesList" as={NavLink}>
            Puppies List
          </Nav.Link>
          <Nav.Link to="/addpuppy" as={NavLink}>
            Add Puppy
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
