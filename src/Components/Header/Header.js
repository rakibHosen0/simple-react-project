import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">Player Selection</Navbar.Brand>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
