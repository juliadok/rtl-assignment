import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = (): React.ReactElement => {
  return (
    <Navbar variant="dark" bg="dark" expand="sm">
      <Container>
        <Navbar.Brand href="https://www.rtlboulevard.nl/" className="text-uppercase font-weight-bold">
          RTL Boulevard
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
