import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import Footer from '../Footer/Footer';
import './Service.css';



function Service() {
    return (
        <>
            <Container className="service-row">

                <Row >
                    <Col lg="6"  md="6" sm="12" xs="12">
                        <img src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/Narasimha-Interior-Decorators-Best-Interior-Designers-Decorators-In-madipakkam-Chennai.jpg" alt="" className="img-fluid service-image" />
                    </Col>
                    <Col lg="6"  md="6" sm="12" xs="12">
                        <h4>
                            [ Transform Your Space with ]
                        </h4>
                        <h2 className="service-title">Expert Interior Design Solutions</h2>
                        <p className="service-para">  If you’re looking for budget interior  in the Madipakkam and Medavakkam areas, look no further than Graphy Interior  – the best interior decorators in Chennai. These top interior decorators have a knack for turning ordinary spaces into stunning works of art that reflect your unique style and personality. Whether you’re looking for a complete home makeover or just want to freshen up a few rooms, budget interior decorators can work with you to create beautiful designs that won’t break the bank. From choosing paint colors and furniture to selecting accessories and lighting fixtures, these professionals will take care of every detail so you can sit back, relax, and enjoy your beautifully designed space. Let them transform your home into the dream sanctuary you’ve always wanted.</p>
                    </Col>
                </Row>
            </Container>
            <Container className="service-row">
                <Row >
                    <Col lg="6" md="6" sm="12" xs="12">
                        <h4 className="service-title">Enhance Your Home Interiors </h4>

                        <p className="service-para">Transform your home into a sanctuary of style and comfort with Graphy Interior . Our expert team specializes in crafting personalized spaces that reflect your unique personality and lifestyle. From concept to execution, we prioritize understanding your vision and preferences, ensuring that every detail enhances the beauty and functionality of your home.</p>
                        <p className="service-para">With our comprehensive interior designer services, including space planning, layout optimization, and furniture selection, we make your interior design dreams a reality. Elevate your living space with Graphy , serving Medavakkam, Chennai, and surrounding areas, and discover the joy of living in a home that truly inspires.</p>

                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/maxresdefault-1.jpg" alt="" className="img-fluid service-image" />
                    </Col>
                </Row>
            </Container>
            <Container fluidclassName="service-home">
                <h5>[ Customized Interior Solutions ]</h5>
                <h2 className="service-title">Crafting Stylish Spaces Tailored to You</h2>
                <Row className="for-craft">
                    <Col lg="3" md="3" sm="12" xs="12" className="card-spacing">
                        <Card className="custom-card"
                            style={{
                                width: '20rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/tv-unit-scaled-1.jpg"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    TV Unit
                                </CardTitle>

                                <CardText>
                                    Elevate your living room with Graphy Interiors’ sleek TV units. Designed for both style and functionality, our modern units enhance your entertainment space effortlessly. Discover our range today and transform your home entertainment experience.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="3" md="3" sm="12" xs="12" className="card-spacing" >
                        <Card className="custom-card"
                            style={{
                                width: '20rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/LOFT-designed-by-narasimha-interior-decorators-madipakkam-chennai-1.jpg"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Loft Designer
                                </CardTitle>

                                <CardText>
                                    Elevate your storage solutions with Graphy Interior  loft designs. Our expert team combines style and practicality to maximize your space’s potential. Discover our range of loft designs today and optimize your storage space effortlessly.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="3" md="3" sm="12" xs="12" className="card-spacing">
                        <Card className="custom-card"
                            style={{
                                width: '20rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/wardrobe-designed-by-narasimha-Interior-Decorators-madipakkam-chennai.jpg"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Wardrobe Interior
                                </CardTitle>

                                <CardText>
                                    Transform your bedroom with Graphy Interior ’ bespoke wardrobe interiors. Our designs blend functionality and style seamlessly, maximizing storage space while enhancing aesthetics. Explore our range of wardrobe interiors today
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="3" md="3" sm="12" xs="12" className="card-spacing">
                        <Card className="custom-card"
                            style={{
                                width: '20rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/False-ceining-by-narasimha-interior-decorators-madipakkam-chennai-1.png"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    False Ceiling
                                </CardTitle>

                                <CardText>
                                    Enhance your space with Graphy Interior ’ innovative false ceiling designs. Our expert team combines creativity and functionality to transform your ceilings into stunning focal points. Explore our range of false ceiling solutions today!
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <Button color="danger" href="/Contact">Contact</Button>
            </Container>
            <br></br>
            <Container className="servicr-row">
                <Row >
                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/Office-Interior-by-Narasimha-Interior-Decorators-Madipakkam-Chennai.jpg" alt="" className="img-fluid service-image" />
                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <h4>

                            [ Revamp Your Workspace ]

                        </h4>
                        <h2 className="service-title">Office Interior Design Solutions</h2>
                        <p className="service-para">Transform your office space into a hub of productivity and innovation with Graphy Interior expert office interior design solutions. Serving Madipakkam, Medavakkam, Nanganallur, Velachery, Keelkattalai, Pallikaranai, OMR, ECR, and Chennai, we specialize in creating functional and inspiring work environments. From efficient space planning to stylish furniture selection, our services are tailored to enhance productivity and employee satisfaction. Whether you’re seeking top interior decorators or budget-friendly solutions, our team is committed to delivering exceptional results that reflect your business ethos and goals. Elevate your workspace with Graphy Interior  today and experience the transformative power of innovative office design.</p>
                    </Col>
                </Row>
            </Container>
            <Container className="service-row">
                <Row >
                    <Col lg="6"md="6" sm="12" xs="12">

                        <h2 className="service-title">Professional Painting Services</h2>
                        <p className="service-para">Revitalize your home or office with Graphy Interior professional painting services. Serving Madipakkam, Medavakkam, Nanganallur, Velachery, Keelkattalai, Pallikaranai, OMR, ECR, and Chennai, we specialize in transforming spaces with expert paintwork. Whether you’re looking to refresh the interior walls or give your exterior a new look, our team of skilled painters ensures impeccable results every time. From color consultation to surface preparation and application, we prioritize quality and customer satisfaction. As one of the top interior decorators, we offer budget-friendly painting solutions without compromising on excellence. Elevate your space with Graphy Interior  painting services and experience the transformative power of a fresh coat of paint.</p>
                    </Col>
                    <Col lg="6"md="6" sm="12" xs="12">
                        <img src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/Painting-services-by-Narasimha-Interior-Decorators-Madipakkam-Chennai.jpg" alt="" className="img-fluid service-image" />
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Footer />
        </>
    );
}
export default Service;