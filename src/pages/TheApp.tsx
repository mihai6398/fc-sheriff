import {Intro, GetApp, FanReward, FanToken} from "../componets/ui/MainUI";

const TheApp = () => {
    return (
        <>
                <Intro/>
                <FanReward title={'Fans are crying out to have a say in the teams they love'}
                           description={'See the way it works, how you can influence your team and get rewarded! FC SHERIFF FAN TOKEN solves this.'}
                            srcImg={'/assets/image/the-app-smartphone.png'}

                />
                <FanToken/>
                <GetApp/>
        </>
    );
};

export default TheApp;