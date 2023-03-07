import {Container, Row, Col,} from "react-bootstrap";
import {AccordionData} from "../../data";
import {AcordeonItem} from "./MainUI";


const FAQs = () => {
    return (
        <Container className={'mb-5'}>
            <Row>
                <Col md={'12'} className={'text-center pt-5 pb-3'}>
                    <h3 className={'font-weight-bold fs-1 text-dark font-wight-bold text-custom'}>FAQs</h3>
                </Col>
            </Row>
            <Row>
                {AccordionData.map((data) => (
                    <AcordeonItem key={data.id} title={data.title} content={data.content} />
                ))}            </Row>
        </Container>
    );
};

export default FAQs;