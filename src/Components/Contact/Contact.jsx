
import React from 'react';
import G from '../Rest Api/Insertprocess';
import R from '../Rest Api/Readprocess';
import F from './Contactsecond';
import C from '../images/hand-drawn-contact-information-background-template_23-2148189662.avif';
import { Container, Row, Col } from 'reactstrap';



function form() {

    return (
        <>
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src={C} alt='' className='img-fluid'></img>
                    </Col>
                    <Col lg="6" md="12" sm="12" xs="12">
                        <G />
                    </Col>

                </Row>



            </Container>
            <br></br>

            <R />
            <br></br>
            <F />

        </>

    );
}
export default form;
