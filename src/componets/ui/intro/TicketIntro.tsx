import {Row, Col} from "react-bootstrap";

interface InterfaceProps {
    image?: string
    opponents?: string
    dataTimeMatch?: string
    openDorTimeMatch?: string
    matchStartMatch?: string
    cityMatch?: string
    locationMatch?: string

}

const TicketIntro = ({
                         image,
                         opponents,
                         openDorTimeMatch,
                         dataTimeMatch,
                         matchStartMatch,
                         cityMatch,
                         locationMatch
                     }: InterfaceProps) => {
    return (
        <>
            <h1>SHERIFF (TIRASPOL) - {opponents}</h1>
            <Row>
                <Col  md={6}>
                    <img src={image} alt={''}/>
                </Col>
                <Col lg={'5'}>
                    <div className={'mt-5'}>
                        <div className={'d-flex justify-content-between mb-4'}>
                            <span><b className={'text-match-details'}> Дата и время мероприятия:</b></span>
                            <span className={'text-match-details'}>{dataTimeMatch}</span>
                        </div>
                        <div className={'d-flex justify-content-between mb-5'}>
                            <span><b className={'text-match-details'}>Ворота на стадион открываются:</b></span>
                            <span className={'text-match-details'}>{openDorTimeMatch}</span>
                        </div>
                        <div className={'d-flex justify-content-between mb-5'}>
                            <span><b className={'text-match-details'}>Начало матча:</b></span>
                            <span className={'text-match-details'}>{matchStartMatch}</span>
                        </div>
                        <div className={'d-flex justify-content-between mb-5'}>
                            <span><b className={'text-match-details'}> Город:</b></span>
                            <span className={'text-match-details'}>{cityMatch}</span>
                        </div>
                        <div className={'d-flex justify-content-between '}>
                            <span><b className={'text-match-details'}>Место проведения:</b></span>
                            <span className={'text-match-details'}>{locationMatch}</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default TicketIntro;