import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../../style/ui/token.css'
import {TokenData} from "../../data";
import TokenItem from "./TokenItem";

interface tokenProps{
    title: React.ReactChild | React.ReactNode
}
const Token = ({title}: tokenProps ) => {
    return (
        <div className={'token mt-5'}>
            <Container>
                <Row className={'pt-5 pb-5'}>
                    <Col lg={'6'} className={'d-none d-lg-flex justify-content-end align-self-center'}>
                        <img className={'pt-1 mr-5 font'} style={{width: '400px', height: '400px'}} src={'assets/image/token-img.png'} alt=""/>
                    </Col>
                    <Col lg={'6'}>
                        <div>
                            <h3 className={'text-start display-4 mt-5 mb-3 text-white'}>
                                {title}
                            </h3>
                            <ul>
                                {TokenData.map((data) => (
                                    <TokenItem key={data.id} paragraph={data.paragraph}/>
                                ))}
                            </ul>
                            <button className={'border-yellow bg-transparent text-white px-4 py-2'}>Get Started</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Token;