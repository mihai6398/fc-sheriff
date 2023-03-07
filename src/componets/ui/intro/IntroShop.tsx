import React from 'react';
import {Row} from "react-bootstrap";

interface ShopIntroProps {
    title: React.ReactChild | React.ReactNode
    images: string
    alt: string
}

const IntroShop = ({title, images, alt}: ShopIntroProps) => {
    return (
        <Row className={'mb-5'}>
            <div className={'w-100'}>
                <h1 className={'text-center mb-5'}>{title}</h1>
                <img className={'w-100 mt-5'} src={images} alt={alt}/>
            </div>
        </Row>
    );
};


export default IntroShop;

