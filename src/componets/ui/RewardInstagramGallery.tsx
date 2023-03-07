import React, { useState, useEffect } from 'react';
import { InstagramGalleryData } from '../../data';
import { Col, Row, Container } from 'react-bootstrap';

interface GalleryData {
    id: number;
    category: string;
    image: string;
}

const RewardInstagramGallery = () => {
    const [items, setItems] = useState<GalleryData[]>(InstagramGalleryData);
    const [categoryFilter, setCategoryFilter] = useState<string>('vip');

    const filterItems = (categoryItem: string) => {
        setCategoryFilter(categoryItem);
        const updatedItems = InstagramGalleryData.filter(
            (currentItem) => currentItem.category === categoryItem
        );
        setItems(updatedItems);
    };

    useEffect(() => {
        filterItems('vip');
    }, []);

    return (
        <Container>
            <div className="py-5 text-center">
                <ul className="d-inline-flex">
                    <li
                        className={`mr-5 ${categoryFilter === 'vip' ? 'text-warning' : ''}`}
                        onClick={() => filterItems('vip')}
                    >
                        VIP
                    </li>
                    <li
                        className={`mr-5 ${categoryFilter === 'exclusive' ? 'text-warning' : ''}`}
                        onClick={() => filterItems('exclusive')}
                    >
                        Exclusive Content
                    </li>
                    <li
                        className={`mr-5 ${categoryFilter === 'events' ? 'text-warning' : ''}`}
                        onClick={() => filterItems('events')}
                    >
                        Events
                    </li>
                    <li
                        className={`mr-5 ${categoryFilter === 'collectibles' ? 'text-warning' : ''}`}
                        onClick={() => filterItems('collectibles')}
                    >
                        Collectibles
                    </li>
                    <li
                        className={`mr-5 ${categoryFilter === 'merch' ? 'text-warning' : ''}`}
                        onClick={() => filterItems('merch')}
                    >
                        Merch
                    </li>
                </ul>
            </div>
            <Row>
                {items.map(({ id, image, category }) => (
                    <Col md={4} className="mb-5" key={id}>
                        <div>
                            <img className="w-100" src={image} alt={category} />
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default RewardInstagramGallery;
