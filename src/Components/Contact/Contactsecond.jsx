import React from "react";
import { Container, Col, Row } from "reactstrap";
import Footer from '../Footer/Footer';


function map() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="4" md="4" sm="12" xs="12">
                        <h4 style={{color:'red'}}>Phone Number</h4>
                        <p>+91 9345467663</p>
                        <p>+91 9876543201</p>
                    </Col>
                    <Col lg="4" md="4" sm="12" xs="12">
                        <h4  style={{color:'red'}}>Email Address</h4>
                        <p>graphyinterior@gmail.com</p>

                    </Col>
                    <Col lg="4" md="4" sm="12" xs="12">
                        <h4  style={{color:'red'}}>Address</h4>
                        <address>16, Natarajan St, Dr.Ramamurthy Nagar,
                            Vellakal, Seva Nagar, Medavakkam, Chennai, Tamil Nadu 600091 </address>

                    </Col>
                </Row>



            </Container>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.237620939226!2d80.17646081164355!3d12.919968262797884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c1c2ab10c01%3A0x8f33fe8bebe2b89c!2sMedavakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1726168876551!5m2!1sen!2sin" style={{ border: 0, width: '100%', height: '400px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
            <Footer />

        </>
    );
}
export default map;