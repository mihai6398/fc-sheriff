import React from "react";
import {Row, Col} from "react-bootstrap";

interface shopAboutProps {
    title?: string;
    subTitle?: string;
    paragraph?: React.ReactChild | React.ReactNode
}

const ShopAbout = ({title, subTitle, paragraph}: shopAboutProps) => {
    return (
        <Row className={'mb-5'}>
            <Col md={4}>
                <p style={{fontSize: '36px', fontWeight: '700'} }>{title}</p>
                <p>{subTitle}</p>
            </Col>
            <Col md={8}>
                <article>
                    {paragraph}
                </article>
            </Col>
        </Row>
    );
};

export default ShopAbout;