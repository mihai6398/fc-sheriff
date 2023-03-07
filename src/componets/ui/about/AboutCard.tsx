import React, {ReactChild} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {AboutCardData} from "../../../data";
import AboutCarItem from "./AboutCarItem";
import '../../../style/ui/about-card.css'

interface AboutCardProps {
    title?: string
    description?: React.ReactChild | React.ReactNode
}

const AboutCard = ({title, description}: AboutCardProps) => {
    return (
        <>
            <Container className={'about'}>
                <Row className={'about-text-content'}>
                    <Col lg={'12'} className={'text-center'}>
                        <h3 className={'about-card-title font-weight-bold text-center color-dark'}>{title}</h3>
                        <p className={'about-card-description color-dark h6 pb-4'}>
                            {description}
                        </p>
                    </Col>
                </Row>
                <Row>
                    {AboutCardData.map((data) => (
                        <AboutCarItem key={data.id} title={data.title} imgSrc={data.imgSrc} />
                    ))}
                </Row>
            </Container>

        </>
    );
};

export default AboutCard;