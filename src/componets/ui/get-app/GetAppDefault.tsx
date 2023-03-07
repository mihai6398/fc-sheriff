import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const GetAppDefault = () => {
    return (
        <div className="mb-5 get-application">
            <Container className={'pt-5'}>
                <Row>
                    <Col lg={'5'}>
                        <div className={'text-start pt-5 ms-0 ms-lg-5'}>
                            <h2 className={'display-4 font-weight-bold pt-0 pt-lg-4 mb-4'}>
                                GET FC SHERIFF <br/>
                                APPLICATION
                            </h2>
                            <p className={'fs-5 mb-4'}>
                                Join thousands of fans from around the world <br/>
                                that are influencing, playing and winning on the <br/>
                                FC SHERIFF aplicatiion
                            </p>
                            <a href="src/componets/ui/get-app/GetApp#">
                                <button className={'mb-5 bg-black text-white px-4 py-2 fw-bold'}>
                                    Download Now
                                </button>
                            </a>
                        </div>

                    </Col>
                    <Col lg={'6'}>
                        <img className={'d-none d-lg-block w-100 '} src={'assets/image/app-smart-phone.png'} alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GetAppDefault;