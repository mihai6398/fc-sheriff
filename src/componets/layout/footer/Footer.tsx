import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../../../style/ui/footer.css'

class Footer extends React.Component{
    render() {
        return(
            <footer className={'footer py-5'}>
                <Container>
                    <Row>
                        <Col lg={2} className={'d-inline-block'}>
                            <div className={'justify-content-center d-flex justify-content-lg-start'}>
                                <Link to={'/'}>
                                    <img className={'pb-3'} src={'assets/logo/footer-logo.png'} alt="logo"/>
                                </Link>
                            </div>
                            <br/>
                            <div className={'d-none d-lg-block'}>
                                <a href="#">
                                    <img className={'pb-2'} src={'https://i.ibb.co/dtf8KQk/google-play-badge-1.png'}
                                         alt="google play"/>
                                </a>
                                <br/>
                                <a href="#">
                                    <img className={'pb-2'} src={'https://i.ibb.co/xMhMnzj/Group.png'} alt="app store"/>
                                </a>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className={'footer-text'}>
                                <h6 className={'font-weight-bold mb-3'}>Useful Links</h6>
                                <p><Link to={'/the-app'} className={'text-dark'}>The TheApp</Link></p>
                                <p><a className={'text-dark'} href="#">Polls</a></p>
                                <p><Link to={'/rewards'} className={'text-dark'}>Rewards</Link></p>
                                <p><a className={'text-dark'} href="#">Help</a></p>
                                <p><Link to={'about'} className={'text-dark'}>About</Link></p>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className={'footer-text'}>
                                <h6 className={'font-weight-bold mb-3'}>Our Policy</h6>
                                <p><a className={'text-dark'} href="#">Privacy Policy</a></p>
                                <p><a className={'text-dark'} href="#">Cookies Policy</a></p>
                                <p><a className={'text-dark'} href="#">Insider Trading Policy</a></p>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className={'footer-text'}>
                                <h6 className={'font-weight-bold mb-3'}>Social</h6>
                                <p><a className={'text-dark'} href="#">Twitter</a></p>
                                <p><a className={'text-dark'} href="#">Facebook</a></p>
                                <p><a className={'text-dark'} href="#">Instagram</a></p>
                            </div>
                        </Col>
                        <Col lg={4} className={'p-0 mt-5 mt-lg-0'}>
                            <div className={'footer-text'}>
                                <h6 className={'font-weight-bold mb-3'}>Newsletter</h6>
                                <form action="">
                                    <input className={' footer-form-custom-input me-0 me-lg-2 px-3 bg-transparent text-dark  rounded-0'}
                                           placeholder={'Type your email adress'} type="text"/>
                                    <button className={'footer-form-custom-button border-0 font-weight-bold bg-yellow px-5'}>Send
                                    </button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}
export default Footer;