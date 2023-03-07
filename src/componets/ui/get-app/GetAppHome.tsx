import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../../../style/ui/get-app.css'
const GetAppHome = () => {
    return (
        <div className="get-application">
            <Container className={'pt-5'}>
                <Row className={'justify-content-end p-0'}>
                    <Col lg={'3'} className={'d-none d-lg-block  justify-content-end '}>
                        <a className={'me-3'} href="src/componets/ui/get-app/GetApp#"><img src="src/componets/ui/get-app/GetApp" alt=""/><img
                            src="https://i.ibb.co/dtf8KQk/google-play-badge-1.png" alt=""/></a>
                        <a href="src/componets/ui/get-app/GetApp#"><img src="src/componets/ui/get-app/GetApp" alt=""/><img src="https://i.ibb.co/xMhMnzj/Group.png" alt=""/></a>
                    </Col>
                </Row>
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

export default GetAppHome;