import React from "react";
import { Container, Row, Col } from "reactstrap";
import logo from '../images/LOGO-removebg-preview.png';
import './Navbar.css';
function Header() {
  return (
    <header>
      <Container fluid className="bg-light py-3">
        <Row>
          <Col md="4"  lg="4" sm="12" xs="12" className="d-flex align-items-center">
            <img src={logo} alt=" Graphy logo" className="img-fluid" style={{height:'110px' ,width:'120px'}} />
          </Col>
          <Col md="4"  lg="4" sm="12" xs="12" className="text-right">
            <p>No. 1, Koladi Main Road, Medavakkam, Chennai 600071</p>

          </Col>
          <Col md="4"  lg="4" sm="12" xs="12">
            <p>graphyinterior@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;