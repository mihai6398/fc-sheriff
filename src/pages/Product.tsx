import {Col, Row, Container, Form, FormSelect} from "react-bootstrap";
import {AcordeonItem, HeaderWhite} from "../componets/ui/MainUI";

interface productProps {
    id?: number;
    title?: string;
    price?: number;
    category?: string;
    description?: string;
}

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];


const Product = ({category, title, price, description, id}: productProps) => {
    return (
        <>
            <HeaderWhite/>
            <Container >
                <Row className={'d-flex align-items-center'} style={{height: '100vh'}}>
                    {/*Product gallery*/}
                    <Col lg={6}>
                        <div>
                            <img width={`50%`} className={'pr-2 pb-2'} height={`100%`}
                                 src="https://store.fcbarcelona.com/medias/700x1060-DN2713-043-1.jpg?context=bWFzdGVyfGltYWdlc3wyMjg5MzB8aW1hZ2UvanBlZ3xoNDUvaGFmLzg5NDgxMTE4Njc5MzQvNzAweDEwNjAvRE4yNzEzLTA0M18xLmpwZ3xkYjk2ZjIxOWJhMmI1M2MxMWRkZjg4NWE0MTJjOWJjYTgzZTJhZjJiNzE4NzI2MzIwOTRjMmFiODRmNTc2M2U3"
                                 alt=""/>
                            <img width={`50%`} className={'pr-2 pb-2'} height={`100%`}
                                 src="https://store.fcbarcelona.com/medias/700x1060-DN2713-043-2.jpg?context=bWFzdGVyfGltYWdlc3wxOTA3NDd8aW1hZ2UvanBlZ3xoNTAvaGUzLzg5NDgxMTI5ODIwNDYvNzAweDEwNjAvRE4yNzEzLTA0M18yLmpwZ3w4ZWM4YzgxZGZiZmEyNDhhNjgxZGMzMzkzMjA1ODExM2UyMDc2MGVkMmE1YjA3M2E0ZmNjN2EyOWYwODllNzg2"
                                 alt=""/>
                        </div>
                    </Col>
                    {/*Product description*/}
                    <Col lg={6}>
                        <div>
                            <h2>Трехцветная кепка ФК «Шериф»</h2>
                            <div className={'d-flex justify-content-between'}>
                                <span className={'font-weight-bold'}>Size</span>
                                <a href={'#'}>Size guide</a>
                            </div>
                            <Form className={'mt-2'}>
                                <Form.Select style={{width: '100%', height: '30px'}}  defaultValue="Select your size">
                                    <option disabled>Select your size</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                </Form.Select>
                            </Form>
                            <div className={'mt-5'}>
                                <div className={'d-flex justify-content-end my-3'}>{`${price} руб`}</div>
                                <button style={{background: '#FFE400', fontSize: '18px'}} className={'py-2 w-100 border-0 text-white'}>Add to cart</button>
                            </div>
                            <div className={'d-flex mt-4'}>
                                <AcordeonItem title={'Description'} content={''}/>
                                <AcordeonItem title={'Delivery and return\n'} content={'Free standard shipping in Spain over 89.99 руб\n' +
                                    '\n' +
                                    'The delivery period for personalised products is 7 to 14 days.\n' +
                                    '\n' +
                                    'You will have 30 days to return any items, calculated from the date of confirmation of the delivery of the product(s).'}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Product;