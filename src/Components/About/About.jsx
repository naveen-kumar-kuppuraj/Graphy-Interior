import React from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import Footer from '../Footer/Footer';
import './About.css';


function About() {
    return (
        <>
            <Container className="About-row">
                <Row>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src="https://img.freepik.com/free-vector/woodworker-concept-illustration_114360-2899.jpg" class="img-fluid about-image" alt="About-image" />
                    </Col>
                    <Col lg="6">
                        <h6>[ABOUT COMPANY]</h6>
                        <h2 className="about-title">Best Interior Solution</h2>
                        <p className="about-para"> Welcome to Graphy Interior , the top interior decorator firm serving Medavakkam, Chennai, and neighboring areas such as Medavakkam, Nanganallur, Velachery, Keelkattalai, Pallikaranai, OMR, and ECR. With a passion for transforming spaces into stunning reflections of style and functionality, our team brings years of expertise and creativity to every project.</p>
                        <p className="about-para">At Graphy Interior , we believe in personalized design solutions tailored to each client’s unique needs and preferences. Whether it’s creating elegant modular kitchens, optimizing wardrobe spaces, installing stylish false ceilings, or enhancing overall interior aesthetics, we’re committed to exceeding expectations with our craftsmanship and attention to detail.</p>

                    </Col>


                </Row>
                <Row>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src="https://img.freepik.com/free-vector/performance-management-abstract-concept-illustration_335657-4876.jpg?ga=GA1.2.285793457.1725943740&semt=ais_hybrid-rr-similar" className="img-fluid about-image" alt="our-mission" />
                    </Col>
                    <Col lg="6">
                        <h3 className="about-title">Our Mission</h3>
                        <p className="about-para">Driven by a passion for creativity and customer satisfaction, our mission at Graphy Interior is to consistently exceed expectations by delivering exceptional interior design services. We believe that each space should be a true reflection of its owner, which is why we take a personalized approach to every project, ensuring that our designs are tailored to the unique needs, tastes, and preferences of each client.

                            We are dedicated to creating interiors that embody timeless elegance, functional brilliance, and innovative design, ensuring that every space we touch becomes a harmonious blend of beauty and purpose. Whether it’s a cozy home, a modern office, or a dynamic retail space, we focus on making sure the design enhances the experience of living and working in these environments.</p>
                    </Col>
                </Row>
                <Row className="About-row" >
                    <Col lg="6" md="6" sm='12' xs="12">
                        <img src="https://img.freepik.com/free-vector/vision-statement-concept-illustration_114360-7296.jpg?ga=GA1.1.285793457.1725943740&semt=ais_hybrid" className="immg-fluid about-image" alt="our-vision" />
                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <h3 className="about-title">Our Vision</h3>
                        <p className="about-para">At Graphy Interior, our vision is to be the leading destination for innovative, sustainable, and aesthetically captivating interior design solutions in Medavakkam, Chennai, and beyond. We are committed to redefining industry standards by delivering exceptional craftsmanship, thoughtful designs, and eco-friendly solutions that enhance the quality of living and working spaces.

                            Our approach blends creativity with functionality, ensuring that every project we undertake reflects our client’s personality, vision, and lifestyle. From residential makeovers to commercial transformations, we prioritize the use of sustainable materials and cutting-edge design techniques to create spaces that are not only beautiful but also contribute positively to the environment. </p>
                    </Col>
                </Row>

            </Container >
            <Container className="text-center py-5">


                <Row>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src="https://img.freepik.com/free-vector/problem-solving-labyrinth-concept-illustration_114360-2041.jpg?ga=GA1.1.285793457.1725943740&semt=ais_hybrid" className="img-fluid about-image" alt="why choose" />
                    </Col>
                    <Col lg="6" md="12" sm="12" xs="12" className="mb-3">
                        <h2 className="mb-4 about-title" >Why Choose us?</h2>
                        <p className="mb-5">Discover the Top 5 Reasons to Partner with Us!</p>
                        <h5><strong>1. Expertise:</strong></h5>
                        <p >Benefit from our seasoned professionals with years of industry experience, ensuring top-notch design solutions tailored to your needs.</p>

                        <h5><strong>2. Affordability:</strong></h5>
                        <p>Enjoy our budget-friendly options without compromising on quality or style, making exceptional design accessible to all.</p>

                        <h5><strong>3. Personalization:</strong></h5>
                        <p>Experience our great personalized attention and customized designs that reflect your unique preferences and lifestyle.</p>

                        <h5><strong>4. Timely Delivery:</strong></h5>
                        <p>It counts on us for efficient project management and timely completion, ensuring your vision becomes reality right on schedule.</p>

                        <h5><strong>5. Customer Satisfaction:</strong></h5>
                        <p>Our responsible commitment to your satisfaction means transparent communication, attention to detail, and a seamless, stress-free design journey from start to finish.</p>
                    </Col>
                </Row>

                <h4 className="my-4">Still Waiting?</h4>
                <Button color="danger" href="/Contact">Contact Us</Button>
            </Container>
            <Footer />

        </>
    );
}
export default About;