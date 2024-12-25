import React from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import Footer from '../Footer/Footer';

function homepage() {
    return (
        <>
            <Container className="home-page">
                <Row>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/04/Narasimha-Interior-Decorators-madipakkam-chennai-medavakkam-pallikaranai-nanganallur-_11zon.webp" alt="medavakkam" className="img-fluid home-image" style={{ height: '500px', width: '100%' }} />
                    </Col>
                    <Col lg="6"  md="6" sm="12" xs="12">
                        <h6> [Welcome to] </h6>
                        <h2 className="home-title">Graphy Interior</h2>
                        <p className="home-para"> Graphy Interior is your go-to choice for top and Budget interior design services in Medavakkam & All over Chennai Established in 2021. Specializing in home and office transformations, we excel in crafting unique designs for bedrooms, kitchens, and more. Our commitment to affordability ensures quality without compromise. Experience the perfect blend of comfort and aesthetics with us.
                            <br></br>
                            At Graphy Interior , we take pride in transforming spaces into stunning living environments. As the top interior decorators in Madipakkam, Medavakkam, Nanganallur, Velachery, Keelkattalai, Pallikaranai, OMR, ECR, and Chennai, we bring your vision to life with creativity, precision, and expertise.</p>
                        <Button color="danger" href="/About">About Us</Button>
                    </Col>

                </Row>


            </Container>
            <Container className="service-home">
                <h5>[Service At]</h5>
                <h2 className="home-title">Graphy Interior</h2>
                <Row className="home-row">
                    <Col lg="4"  md="6" sm="12" xs="12">
                        <Card className="custom-card"
                            style={{
                                width: '20rem',

                            }}
                        >
                            <img
                                alt="Sample"
                                src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/Narasimha-Interior-Decorators-Home-Interior.jpg"
                            />
                            <CardBody>
                                <CardTitle className="card-title" tag="h5">
                                    Home Interior
                                </CardTitle>

                                <CardText>
                                    Revitalize your living space with Graphy Interior . Experience expertly crafted home interior design that blend functionality with elegance, tailored to your unique style and preferences.In Nanganallur
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4"  md="6" sm="12" xs="12">
                        <Card className="custom-card"
                            style={{
                                width: '20rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/ceo-room-1.jpg"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Office Interior
                                </CardTitle>

                                <CardText>
                                    Enhance productivity and aesthetics with Graphy Interior office interior solutions. Tailored designs blend functionality and style for an inspiring workspace. in all over  Chennai Tamil Nadu
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4"  md="6" sm="12" xs="12">
                        <Card className="custom-card"
                            style={{
                                width: '20rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/maxresdefault-1.jpg"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Bedroom Interior
                                </CardTitle>

                                <CardText>
                                    Revamp your bedroom interior design a haven of comfort and style with Graphy Interior . We specialize in creating personalized bedroom interiors that tranquility and match your personality in Madipakkam
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className="home-row">
                <Row>
                    <Col lg="4"  md="6" sm="12" xs="12">
                        <Card className="custom-card"
                            style={{
                                width: '20rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/Modular-Kitchen-At-Narasimha-Interior-Decorators.jpg"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Modular Kitchen
                                </CardTitle>

                                <CardText>
                                    Upgrade your kitchen with Graphy Interior  modular solutions. Custom designs maximize space efficiency while enhancing aesthetics, promising a culinary haven tailored to your needs. in Madipakkam Chennai
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" md="6" sm="12" xs="12">
                        <Card className="custom-card"
                            style={{
                                width: '20rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/False-Ceiling-in-Narasimha-Interior-Decorators.jpg"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    False Ceiling
                                </CardTitle>

                                <CardText>
                                    Elevate your space with exquisite false ceiling designs by Graphy Interior . Transform ordinary rooms into stunning showcases with our expert craftsmanship and innovative solutions. in Medavakkam
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" md="6" sm="12" xs="12">
                        <Card className="custom-card"
                            style={{
                                width: '20rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                src="https://narasimhainteriordecorators.com/wp-content/uploads/2024/03/Wardrobe-Design-at-Narasimha-Interior-Decorators.jpg"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Wardrobe Designer
                                </CardTitle>

                                <CardText>
                                    Graphy Interior crafts bespoke wardrobe solutions, blending functionality and style seamlessly. Elevate your storage space with our expertly designed wardrobe solutions.in Chennai Tamil Nadu
                                </CardText>

                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </Container>
            <div className="text-center custom-buttons">
                <Button color="danger" href="/Service">Services</Button>
            </div>
            <br></br>
            <Footer />


        </>
    );
}
export default homepage;