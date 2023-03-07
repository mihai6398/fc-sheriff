import React from "react";
import {Col, Container, Row} from "react-bootstrap";
interface communityPoweredProductProps {
    title?: string | React.ReactNode ;
    description?: string;
    imageUrl?: string;
}

const CommunityPoweredProduct = ({title, description , imageUrl}:communityPoweredProductProps) => {
    return (
        <div style={
            {
                backgroundImage: `url(${imageUrl})`,
                height: '555px'
            }}
        >
            <Container>
                <Row>
                    <Col style={{height: '555px'}} className={'d-flex align-items-center'} md={6}>
                        <div>
                            <h2 className={'text-white'} style={{ fontSize: '48px'}}>
                                {title}
                            </h2>
                            <span style={{opacity: '.70'}} className={'text-white'}>{description}</span>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img height={555} src="/assets/image/community-powered-product-messages.png" alt=''/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CommunityPoweredProduct;