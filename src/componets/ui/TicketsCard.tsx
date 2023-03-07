import React from 'react';
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";

interface TicketsCardProps {
    country: string
    imgSrc: string
    opponent: string
    link: number
}

const TicketsCard = ({ country, imgSrc, opponent, link }: TicketsCardProps) => {
    return (
        <Col xl={4}>
            <Link to={`/tickets/${link}`}>
                <div className={`ticket-item-card text-center`} style={{ position: 'relative' }}>
                    <img className={`h-100 w-100 top-start`} src={imgSrc} alt=""/>
                    <div className={`text-white ticket-text-content`} style={{ position: 'relative' }}>
                        <h3>SHERIFF (TIRASPOL)</h3>
                        <p>-</p>
                        <h3>{opponent}</h3>
                    </div>
                    <div className={`top-end pt-2 me-2`} style={{position: 'absolute'}}>
                        <button className={`px-3 py-3 bg-white text-dark text-uppercase`}>{country}</button>
                    </div>
                </div>
            </Link>

        </Col>
    );
};

export default TicketsCard;
