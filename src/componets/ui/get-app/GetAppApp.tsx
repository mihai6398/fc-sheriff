import {Container, Col, Row} from "react-bootstrap";
import '../../../style/ui/get-app.css'
const GetAppApp = () => {
    return (
        <Container>
            <div style={{marginTop: '80px', marginBottom: '80px', height: '600px'}}  className="get-application">
                <Row>
                    <Col className={'d-flex align-items-center'}  lg={7}>
                        <div className={'text-start px-5 pt-5 ms-0 ms-lg-5'}>
                            <h3 className={'fs-1 text-dark fw-bold opacity-75 pb-2'}>
                                Need help using <br/>
                                FC SHERIFF app?
                            </h3>
                            <p className={'opacity-75'}>
                                We’ve put together a no-nonsense guide <br/>
                                packed with tips and videos on how FC <br/>
                                SHERIFF app works
                            </p>
                            <a href="src/componets/ui/get-app/GetApp#">
                                <button className={'mb-5 bg-black text-white px-4 py-2 fw-bold'}>
                                    Learn More
                                </button>
                            </a>
                        </div>

                    </Col>
                    <Col style={{height: '600px', bottom: '0'}} lg={3}>
                        <img style={{bottom: '0'}}  height={490} width={290} className={'d-none d-lg-block  position-absolute'} src={'assets/image/app-smart-phone-2.png'} alt="Need help using  FC SHERIFF app?"/>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};
export default GetAppApp;