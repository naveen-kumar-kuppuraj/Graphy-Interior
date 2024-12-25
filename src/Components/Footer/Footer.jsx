import React from "react";
import logo from '../images/undefined - Imgur.png';
import './Footer.css';

import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row>

          <Col md="3">
            <div className="footer-logo">
              <img src={logo} alt="Graphy Logo" style={{height:'110px' ,width:'120px'}} />
            </div>
            <p className="mt-3">
              Graphy Interior  is Medavakkam's premier destination for affordable luxury in interior design.
              With a commitment to excellence and creativity, we transform spaces into personalized sanctuaries of style
              and functionality, making high-quality interior design accessible to all.
            </p>
          </Col>


          <Col md="3">
            <h5>Navigation</h5>
            <Nav vertical>
              <NavItem>
                <NavLink href="/" className="text-white">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="About" className="text-white">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Service" className="text-white">Service</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Gallery" className="text-white">Gallery</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact" className="text-white">Contact </NavLink>
              </NavItem>
            </Nav>
          </Col>


          <Col md="3">
            <h5>Follow us on</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://facebook.com" className="text-white" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-white" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href="https://linkedin.com" className="text-white" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a href="https://medium.com" className="text-white" target="_blank" rel="noopener noreferrer">Medium</a>
              </li>
            </ul>
          </Col>


          <Col md="3">
            <h5>Reach us</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;