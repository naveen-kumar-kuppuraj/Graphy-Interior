import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'; // Imported NavLink from 'react-router-dom'
import Home from '../Home/Home';
import About from '../About/About';
import Service from '../Service/Service';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import Insert from '../Rest Api/Insertprocess';

import './Navbar.css';

import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

function MyNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Router>
        <Navbar color="dark" dark expand="md" sticky="top" {...args}>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink to="/" className='nav-link-custom'>Home</NavLink> {/* Updated NavLink */}
              </NavItem>
              <NavItem>
                <NavLink to="/About" className='nav-link-custom'>About Us</NavLink> {/* Updated NavLink */}
              </NavItem>
              <NavItem>
                <NavLink to="/Service" className='nav-link-custom'>Services</NavLink> {/* Updated NavLink */}
              </NavItem>
              <NavItem>
                <NavLink to="/Gallery" className='nav-link-custom'>Gallery</NavLink> {/* Updated NavLink */}
              </NavItem>
              <NavItem>
                <NavLink to="/Contact" className='nav-link-custom'>Contact</NavLink> {/* Updated NavLink */}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/insert" element={<Insert />} />
        </Routes>
      </Router>
    </div>
  );
}

export default MyNavbar;
