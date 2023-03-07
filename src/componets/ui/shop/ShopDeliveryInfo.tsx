import React from "react";
import { Card } from 'react-bootstrap';

interface shopDeliverInfoProps {
    title?: string;
    paragraph?: React.ReactChild | React.ReactNode;

}

const ShopDeliveryInfo = ({title, paragraph}: shopDeliverInfoProps) => {
    return (
        <Card>
            <Card.Body className={'text-center text-dark'}>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>
                    {paragraph}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ShopDeliveryInfo;