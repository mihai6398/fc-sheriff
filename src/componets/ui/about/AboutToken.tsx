import React from 'react';
import {Col, Row, Container} from "react-bootstrap";

interface  aboutTokenProps{
    imgSrc: string;
    title: string;
    description: string | React.ReactNode
}
const AboutToken = ({imgSrc, title, description}: aboutTokenProps) => {
    return (
        <Container>
            <Row className={'py-5'}>
                <Col md={6}>
                    <div className={'p-4'}>
                        <img width={'100%'} src={imgSrc} alt={title}/>
                    </div>
                </Col>
                <Col className={'d-flex align-items-center'} md={6}>
                    <div className={'ml-4'} style={{height: '215px'}}>
                        <h2 style={{fontSize: '40px', fontWeight: '700'}}>{title}</h2>
                        <div>
                            {description}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutToken;