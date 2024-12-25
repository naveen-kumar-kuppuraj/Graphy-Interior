import React from "react";
import './Gallery.css';
import { Container, Row, Col } from 'reactstrap';
import A from '../images/420640286_851137216782342_1496384566240210568_n.webp.jpg';
import B from '../images/kodambakkam1.webp';
import C from '../images/409100507_346045508426904_5789793926587959247_n.webp.jpg';
import D from '../images/429442814_1827638547680638_5756644499022065172_n.webp.jpg';
import E from '../images/13.jpg';
import F from '../images/412402028_297328816072891_5173808966118135583_n.webp.jpg';
import G from '../images/429452236_236846676165908_2547503729990801031_n.webp.jpg';
import H from '../images/429559428_1307539383258006_6922788504905616901_n.webp.jpg';
import I from '../images/429446036_943843977371245_4852748134180362973_n.webp.jpg';
import J from '../images/429807911_313675341289154_6821465130260669606_n.webp.jpg';
import K from '../images/447998495_1068711201284069_4414513034304098069_n.webp.jpg';
import L from '../images/447876075_769715548332456_3636633962120910865_n.webp.jpg';


import Footer from "../Footer/Footer";

function gallery() {
  return (
    <>
      <Container fluid className="gallery-container">
        <Row className="gallery-row">
          <h1 className="gallery-title">Home</h1>
          <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
            <img src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/Living-Room-Interior-by-Narasimha-Interior-Decorators-Madipakkam-chennai.png" alt="Ice Cream 1" className=" gallery-image img-fluid" />
          </Col>
          <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
            <img src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/Bedrooom-Interior-by-Narasimha-Interior-Decorators-madipakkam-Chennai.png" alt="Ice Cream 3" className="gallery-image img-fluid" />
          </Col>
          <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
            <img src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/Modular-Kitchen-By-Narasimha-Interior-Decorators-Madipakkam-Chennai.jpg" alt="Ice Cream 5" className="gallery-image img-fluid" />
          </Col>
          <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
            <img src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/Wardrobe-Design-at-Narasimha-Interior-Decorators.jpg" alt="Ice Cream 6" className="gallery-image img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="gallery-container">
        <Row className="gallery-row">
          <h1 className="gallery-title">Kitchen</h1>
          <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
            <img src={A} alt="Ice Cream 1" className=" gallery-image img-fluid" />
          </Col>
          <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
            <img src={B} alt="Ice Cream 3" className="gallery-image img-fluid" style={{ height: '260px' }} />
          </Col>
          <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
            <img src={C} alt="Ice Cream 5" className="gallery-image img-fluid" style={{ height: '260px' }} />
          </Col>
          <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
            <img src={D} alt="Ice Cream 6" className="gallery-image img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="gallery-container">
        <Row className="gallery-row">
          <h1 className="gallery-title">TV Unit</h1>
          <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
            <img src={E} alt="Ice Cream 1" className=" gallery-image img-fluid" style={{ height: '260px' }} />
          </Col>
          <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
            <img src={F} alt="Ice Cream 3" className="gallery-image img-fluid" style={{ height: '260px' }} />
          </Col>
          <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
            <img src={G} alt="Ice Cream 5" className="gallery-image img-fluid" style={{ height: '260px' }} />
          </Col>
          <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
            <img src={H} alt="Ice Cream 6" className="gallery-image img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="gallery-container">
        <Row className="gallery-row">
          <h1 className="gallery-title">Wardrobe</h1>
          <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
            <img src={I} alt="Ice Cream 1" className=" gallery-image img-fluid" style={{ height: '260px' }} />
          </Col>
          <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
            <img src={J} alt="Ice Cream 3" className="gallery-image img-fluid" />
          </Col>
          <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
            <img src={K} alt="Ice Cream 5" className="gallery-image img-fluid" style={{ height: '260px' }} />
          </Col>
          <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
            <img src={L} alt="Ice Cream 6" className="gallery-image img-fluid" style={{ height: '260px' }} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default gallery;