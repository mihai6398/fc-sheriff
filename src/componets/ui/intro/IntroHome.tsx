import IntroModulesCSS from '../../../style/ui/intro.module.css'
import {Container, Col, Row} from "react-bootstrap";
interface introHomeProps {
    title?: string;
    description?: string;
    learnBtn?: string;
    downloadBtn?: string;
}

const IntroHome = ({title, description, learnBtn, downloadBtn}: introHomeProps) => {
    return (
        <div className={IntroModulesCSS.homeIntro}>
            <Container>
                <Row>
                    <Col md={'8'} className={'col-lg-5 home-intro-content'}>
                        <h1 className={' text-white mb-3 position-relative'}>
                            {title}
                            <div className={'d-none d-lg-block position-absolute w-50 intro-custom-border end-0'}></div>
                        </h1>
                        <p className={'intro-description text-white mb-5'}>
                            {description}
                        </p>
                        <Row>
                            <Col className={'intro-button'}>
                                <button className={'fw-bold mr-2  bg-transparent border-yellow'}><a className={'text-white'} href="#">{learnBtn}</a></button>
                                <button className={'bg-yellow fw-bold border-0'}><a className={'text-dark'} href="#">{downloadBtn}</a>
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default IntroHome;
