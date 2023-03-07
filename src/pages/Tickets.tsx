import {TicketsCardData} from "../data";
import TicketsCard from "../componets/ui/TicketsCard";
import {Row, Container} from 'react-bootstrap'
import '../style/ui/tickets.css'
import {useLocation} from "react-router-dom";
import TicketIntro from "../componets/ui/intro/TicketIntro";
import TicketStands from "../componets/ui/TicketStands";

const Tickets = () => {

    const location = useLocation()
    const checkPatchName = location.pathname

    return (
        <>
            {checkPatchName === '/tickets' && '/tickets/2' ?
                <>
                    <Container className={'ticket'}>
                        <h1 className={'mb-3'}>Билеты на ближайщие матчи</h1>
                        <Row>
                            {TicketsCardData.map((TicketsCardData) => (
                                <TicketsCard key={TicketsCardData.id} link={TicketsCardData.id} country={TicketsCardData.country} imgSrc={TicketsCardData.imgSrc} opponent={TicketsCardData.opponent} />
                            ))}
                        </Row>
                    </Container>
                </>
                :
                <>
                    <Container>
                        <TicketIntro image={'/assets/image/tickets-images/match-1.png'} opponents={'REAL MADRID (SPAIN)'} dataTimeMatch={'24 ноября 2021 в 21:30'} openDorTimeMatch={'19:00'} matchStartMatch={'22:00'} cityMatch={'Тирасполь'} locationMatch= {'Главная арена СК "Шериф"'}/>
                        <TicketStands/>
                    </Container>
                </>



            }

        </>
    );
};

export default Tickets;