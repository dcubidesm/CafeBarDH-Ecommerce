import React from "react";
import { Container, Nav, Navbar, DropdownButton, Dropdown, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout(){
    cookies.remove('_s');
    window.location.reload();
  }

  render() {
    return (
      <Navbar fixed="top"  id="navbar" bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
            Café Bar DH
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>

            <DropdownButton title="Usuario">
                <Dropdown.Header id ="dropdown-header">
                    <Row>
                        <FontAwesomeIcon icon={faUserCircle} />
                    </Row>
                    <Row>#USUARIO#</Row>                    
                </Dropdown.Header>
                <Dropdown.Divider />
              <Dropdown.Item onClick={() => this.logout()}>
                Cerrar Sesión
              </Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
