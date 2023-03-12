import { Col, Row, Image, Card } from "react-bootstrap";
import { ShopCardItemData } from "../../../data";
import { useNavigate } from "react-router-dom";

const ShopCardItem = () => {
    const navigate = useNavigate();
    return (
        <Row>
            {ShopCardItemData.map((data) => (
                <Col md={4} key={data.id}>
                    <Card onClick={() => navigate(`/product/${data.id}`)} className="mb-3 p-3">
                        <Image src={data.imgSrc} alt={data.title} fluid />
                        <Card.Body className={"text-center"}>
                            <Card.Title className={"mb-4 "}>
                                {data.title}
                                <br />
                                {data.price} руб
                            </Card.Title>
                            <button className={"px-4 py-2 border bg-transparent text-dark "}>
                                Добавить в корзину
                            </button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ShopCardItem;
