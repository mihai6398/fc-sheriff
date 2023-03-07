import {Col, Row, Container} from 'react-bootstrap'
import {FanRewardData} from "../../data";

interface fanRewardProps {
    title?: string;
    description?: string;
    srcImg?: string;
}
const FanReward = ({title, description, srcImg}:fanRewardProps) => {
    return (
        <Container>
            <Row  style={{height: '550px'}}>
                <Col lg={9} className={'d-flex align-items-center'}>
                    <div>
                        <div className={'mb-5'} style={{width: '450px'}}>
                            <h2>{title}</h2>
                            <span className={'text-dark'}>{description}</span>
                        </div>
                        <Row>
                            {FanRewardData.map((data) => (
                                <Col md={3} key={data.id}>
                                    <div>
                                        <img className={'d-none d-lg-flex '}  src={data.imgSrc} alt={data.title}/>
                                        <h4>{data.title}</h4>
                                        <span className={'text-dark'}>{data.description}</span>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
                <Col md={3}>
                    <div className={'position-relative'}>
                        <img style={{top: '-60px'}} className={'d-none d-lg-flex w-100 position-absolute'} src={srcImg} alt={title}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FanReward;