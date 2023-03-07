import React from "react";
import {Container} from "react-bootstrap";
import IntroModulesCSS from '../../../style/ui/intro.module.css';
interface introTheAppProps {
    title?: string | React.ReactNode ;
}

const IntroReward = ({title}: introTheAppProps) => {
    return (
        <div className={IntroModulesCSS.rewardsIntro}>
            <Container>
                <div style={{padding: '310px 0 0 0'}}>
                    <h1 className={`text-white font-weight-bold`} style={{fontSize: '64px'}}>{title}</h1>
                </div>
            </Container>
        </div>
    );
};

export default IntroReward;