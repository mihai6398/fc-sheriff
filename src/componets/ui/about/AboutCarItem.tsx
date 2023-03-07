import React from 'react';
import {Col} from "react-bootstrap";

interface AboutCardProps {
    title: string
    imgSrc: string
}

const AboutCarItem = ({title, imgSrc,} : AboutCardProps) => {
    return (
        <Col lg={'4'} className={'px-2'}>
            <div className={'about-card-item mb-3 me-0 me-lg-3 position-relative'}>
                <img className={'position-absolute start-0  top-0 w-100 h-100'} src={imgSrc} alt=""/>
                <h4 className={'text-white text-center h-18'}>{title}</h4>
            </div>
        </Col>
    );
};

export default AboutCarItem;