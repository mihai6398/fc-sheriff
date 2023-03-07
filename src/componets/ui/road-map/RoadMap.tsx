import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RoadMapAcordeonItem from "./RoadMapAcordeonItem";
import {AccordionRoadMapData} from "../../../data";

const RoadMap = () => {
    return (
        <Container>
            <Row style={{height: '720px'}} className={'align-items-center'}>
                <Col md={6}>
                    <div className={'p-5'}>
                        <img width={'100%'} src="/assets/image/road-map.png" alt=""/>
                    </div>
                </Col>
                <Col md={6}>
                    <h3 style={{fontSize: '48px',}} className={'font-weight-bold'}>RoadMap</h3>
                    {AccordionRoadMapData.map((data) => (
                        <RoadMapAcordeonItem key={data.id} title={data.title} description={data.description} />
                    ))}
                    <button style={{background: '#000'}} className={'px-4 py-2 border-0 text-white'}>Ask a Question</button>
                </Col>
            </Row>
        </Container>
    );
};

export default RoadMap;