import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import dataSet from '../../data/data.json'


type price = {
    priceTribune: number;
    pricePlace: number;
};

type checkPlace = {
    row: number;
    place: number;
    tribune: string;
}

const TicketStands = () => {
    const [tribune, setTribune] = useState<number>(0);
    const [price, setPrice] = useState<price>({priceTribune: 0, pricePlace: 0});
    const [checkPlace, setCheckPlace] = useState<checkPlace>({row: 0, place: 0, tribune: ''})
    const [tribuneData, setTribuneData] = useState(dataSet);

    const filterTribuneData = (categryTribune: number) => {
        const upDate = dataSet.filter((curentEment) => {
            return curentEment.id === categryTribune
        })
        setTribuneData(upDate)
    }
    const CardOrder = () => {
        return (
            <Col lg={'6'}>
                <div className={'mt-3 me-3 order'}>
                    <div className={`selected-place-card-item`}>
                        <div>
                            <span className={'me-3'}>Ряд: <b>{checkPlace.row}</b>,
                                            </span><span>Расположение: <b>{checkPlace.place}</b></span></div>
                        <div>
                            <img src={'/assets/icon/close_big.png'} alt="✕" onClick={() => {
                                setCheckPlace(prevPlace => ({
                                    ...prevPlace,
                                    place: 0
                                }));
                                setCheckPlace(prevRow => ({
                                    ...prevRow,
                                    row: 0
                                }));
                                setPrice(prevPrice => ({
                                    ...prevPrice,
                                    pricePlace: 0
                                }));
                                setPrice(prevPrice => ({
                                    ...prevPrice,
                                    priceTribune: 0
                                }));
                                setTribune(0)
                            }}

                            />
                        </div>
                    </div>
                    <div className={'selected-place-card-item-under'}>
                        <span>{checkPlace.tribune} (30 руб)</span>
                    </div>

                </div>
            </Col>
        )
    }
    return (
        <>
            <div className={'mt-5'}>
                <Row className={'justify-content-center justify-content-lg-start'}>
                    <Col lg={'5'}>
                        <div className={'pt-5'}>
                            <h4 className={'pt-5'}>Выбор трибуны</h4>
                            <div className={'mt-3'}>
                                <Row>
                                    {dataSet.map((ticketData) => (
                                        <Col
                                            sm={6}
                                            className={'d-flex justify-content-center d-sm-block'}
                                            key={ticketData.id}
                                        >
                                            <button
                                                onClick={() => {
                                                    setTribune(ticketData.id);
                                                    setPrice(prevPrice => ({
                                                        ...prevPrice,
                                                        priceTribune: ticketData.price
                                                    }));
                                                    setPrice(prevPrice => ({
                                                        ...prevPrice,
                                                        pricePlace: 0
                                                    }));
                                                    setCheckPlace(prevPlace => ({
                                                        ...prevPlace,
                                                        tribune: ticketData.category
                                                    }));
                                                    filterTribuneData(ticketData.id)
                                                }}
                                                className={ticketData.id === tribune ? 'tribunal-btn tribunal-btn-active me-3 mb-3' : 'tribunal-btn me-3 mb-3'}
                                            >
                                                {ticketData.category} ({ticketData.price} руб)
                                            </button>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col md={'5'}>
                        <div className={'d-flex justify-content-center'}>
                            <img
                                className={'w-100 ms-4'}
                                src='https://i.ibb.co/QJCm3M6/image-9.png'
                                alt='football'
                            />
                        </div>
                    </Col>
                    {tribune ?
                        <>
                            <div className={'d-flex w-100 justify-content-center'}>
                                <h4>Выбор мест</h4>
                            </div>
                            <Row className={'match-place'}>
                                {tribuneData.map((ticketData, index) => (
                                    <div key={index}>
                                        {ticketData.row.map((row, index) => (
                                            <Col md={12} key={index} className={'d-flex text-center mt-2 '}>
                                                <div
                                                    className={'d-flex justify-content-start w-100 w-100 align-items-center match-place-row'}>{row.number}</div>
                                                {row.ticketPlaceStatus.map((ticketPlaceStatus) => (
                                                    <button
                                                        key={ticketPlaceStatus.id}
                                                        className={`${checkPlace.place === ticketPlaceStatus.number  && checkPlace.row === row.number && 'match-place-freely' === ticketPlaceStatus.placeStatus  ? 'match-place-user-select-active' : ''} ${ticketPlaceStatus.placeStatus}  match-place`}
                                                        onClick={() => {
                                                            if ('match-place-freely' === ticketPlaceStatus.placeStatus) {
                                                                setCheckPlace(prevPlace => ({
                                                                    ...prevPlace,
                                                                    place: ticketPlaceStatus.number ?? prevPlace.place
                                                                }));
                                                                setCheckPlace(prevRow => ({
                                                                    ...prevRow,
                                                                    row: row.number ?? prevRow.row
                                                                }));
                                                                setPrice(prevPrice => ({
                                                                    ...prevPrice,
                                                                    pricePlace: 30
                                                                }));
                                                            }
                                                        }}
                                                    >
                                                        {ticketPlaceStatus.number}
                                                    </button>
                                                ))}
                                                <div
                                                    className={'d-flex justify-content-end w-100 align-items-center match-place-row'}>{row.number}</div>
                                            </Col>
                                        ))}
                                    </div>

                                ))}
                                <Col md={'12'}>
                                    <div className={'d-flex justify-content-center'}>
                                            <span className={'text-center text-football-field'}>
                                                Футбольная поля
                                            </span>
                                    </div>


                                    <div className={'d-flex justify-content-center mt-2'}>
                                        <div className={'d-flex justify-content-center border-match-place'}></div>
                                    </div>
                                </Col>
                                <Col lg={'12'}>
                                    <div className={'d-flex justify-content-center my-5'}>
                                        <div className={'mr-3 d-inline-flex'}>
                                            <div className={'match-place-busy'} style={{width: '30px', height: '30px'}}></div>
                                            <span className={'ml-2'}>Место занято</span></div>
                                        <div className={'mr-3 d-inline-flex'}>
                                            <div className={'match-place-empty-view'} style={{width: '30px', height: '30px'}}></div>
                                            <span className={'ml-2'}>30 руб</span></div>
                                        <div className={'mr-3 d-inline-flex'}>
                                            <div className={'match-place-user-select'} style={{width: '30px', height: '30px'}}></div>
                                            <span className={'ml-2'}>Ваш выбор</span></div>
                                    </div>
                                </Col>
                            </Row>
                        </>
                        : null

                    }

                    {price.priceTribune && price.pricePlace ?
                        <>
                            <Row className={'mt-5'}>
                                <Col lg={'7'}>
                                    <div className={'d-block mb-5'}>
                                        <h4>Выбранное место</h4>
                                        <Row>
                                            <CardOrder/>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={'5'}>
                                    <div className={'d-block'}>
                                        <div className={'d-flex'}>
                                            <div>
                                                <h4>Сумма оплаты:</h4>
                                                <span
                                                    className={'fs-3'}>{price.priceTribune + price.pricePlace} руб</span>
                                            </div>
                                            <div className={'ms-4 mt-4'}>
                                                <button
                                                    className={'px-4 cursor-pointer py-2 bg-yellow text-black border border-0 fw-bold'}>
                                                    Оплатить
                                                </button>
                                            </div>
                                        </div>

                                        <div className={'my-5'}>
                                            <h5 className={'text-danger'}>Важно!</h5>
                                            <span>
                                    <p>БИЛЕТ НЕОБХОДИМ ДЛЯ ЗРИТЕЛЕЙ ЛЮБОГО ВОЗРАСТА</p>
                                    <p>НАЛИЧИЕ РАСПЕЧАТАННОГО ЭЛЕКТРОННОГО БИЛЕТА ОБЯЗАТЕЛЬНО!</p>
                                    <p>ЖЕЛАТЕЛЬНО, БИЛЕТЫ РАСПЕЧАТАТЬ НА ЛАЗЕРНОМ ПРИНТЕРЕ И ИМЕТЬ КОПИЮ НА СМАРТФОНЕ.</p>
                                </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </>
                        :
                        null
                    }
                </Row>
            </div>
        </>
    );
};

export default TicketStands;
