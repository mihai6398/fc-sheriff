import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {FanTokenData} from "../../data";

const FanToken = () => {
    return (
        <>
            <div style={{backgroundImage: `url(./assets/image/fan-token.png)`, maxWidth: '100%'}}>
                <Container>
                    <Row style={{height: '640px'}} className={'align-items-center'}>
                        <h2 className={'text-white'}>Why should you choose <span className={'px-1'} style={{
                            color: "black",
                            background: 'yellow'
                        }}>FC SHERIFF Fan Tokens?</span></h2>
                        {FanTokenData.map(data => (
                            <Col className={'mb-3 '} style={{height: '183px'}} md={6} key={data.id}>
                                <div className={'px-3 d-flex align-items-center'}
                                     style={{border: '2px solid #fff', height: '183px'}}>
                                    <div>
                                        <h3 className={'text-white'}>{data.title}</h3>
                                        <p className={'text-white'}>{data.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                </Container>
            </div>
        </>
    );
};

export default FanToken;