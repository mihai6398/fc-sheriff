import React, {useState} from 'react';
import {Col} from "react-bootstrap";
import '../../style/ui/acordion-item.css'

interface AcordionProps{
    title: string
    content: string
}

const AcordeonItem = ({title, content}: AcordionProps)=> {

    const [accordion, setAccordion] = useState<boolean>(false);

    return (
        <Col md={6}>
            <div className={'py-4 px-3 border border-3 border-light mb-4 faqs-cards'} onClick={() => setAccordion(!accordion)}>
            <span className={' w-100 d-inline-flex justify-content-between fw-bold'}>
                <span>
                    <h5>{title}</h5>
                </span>
                <button className={`border border-0 bg bg-transparent accordion`}>
                        <img src={accordion ? 'assets/icon/plus.png' : 'assets/icon/minus.png'} alt=""/>
                </button>
            </span>
                <div className={accordion ? 'accordion-content active-accordion' : 'accordion-content'}>
                    <div className={'accordion-text'}
                         dangerouslySetInnerHTML={{ __html: content}}
                    />
                </div>
            </div>
        </Col>
    );
};

export default AcordeonItem;