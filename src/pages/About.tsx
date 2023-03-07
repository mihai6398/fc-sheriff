import {GetApp, Intro, Steps, RoadMap, AboutFanToken, AboutToken} from "../componets/ui/MainUI";

const About = () => {
    return (
        <>
            <Intro/>
            <AboutToken
                imgSrc={'/assets/image/about-token.png'}
                title={'FC SHERIFF FAN TOKEN'}
                description={<>
                   <p>Necessitatibus impedit perferendis dolor at. Aut totam quae ut quidem et dolor modi maxime. Autem voluptatem veritatis accusamus quam est eum. Laudantium aliquam qui. Eos eveniet qui ea nihil quidem. Veniam repudiandae eaque et.</p>
                   <p>Et non velit quae eum. Perspiciatis iusto velit ut porro. Tempore enim quidem non dolorum. Autem perferendis quos praesentium quia ut. Facilis ea sequi. Sequi vitae earum minus quis fugiat consequatur aut corrupti. </p>
                </>}
            />
            <Steps/>
            <RoadMap/>
            <AboutFanToken/>
            <GetApp/>
        </>
    );
};

export default About;