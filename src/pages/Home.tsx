import {GetApp, Intro, Token, AboutCard, FAQs} from "../componets/ui/MainUI";
const Home = () => {
    return (
        <>
            <Intro/>
            <AboutCard
                title={'Be more than a fan'}
                description={<>
                    Fan Tokens gives you the power to influence decisions taken at the Futbol Club FC SHERIFF in Moldova. <br/>
                    See some of the decisions that FC SHERIFF fans and fans from other teams influenced
                </>}/>
            <Token title={<>Why should I <br/>
                own $FC SHERIFF?</>}/>
            <GetApp/>
            <FAQs/>
        </>
    );
};

export default Home;