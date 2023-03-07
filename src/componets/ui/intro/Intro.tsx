import React from 'react';
import {useLocation} from "react-router-dom";
import '../../../style/ui/intro.css'
import {IntroAbout, IntroShop, IntroHome, IntroTheApp, IntroRewards} from "../MainUI";

const Intro = () => {
    const location = useLocation();
    const pathname = location.pathname;

    let componentToRender;
    switch (pathname) {
        case "/":
            componentToRender = <IntroHome
                title={`$FC SHERIFF FAN TOKENS`}
                description={'The $FC SHERIFF Fan Token will give you the power to help Les Parisiens make the right decisions, access VIP experiences, earn official products, and more.'}
                learnBtn={'Learn More'}
                downloadBtn={`Download Now`}
            />;
            break;
        case "/the-app":
            componentToRender = <IntroTheApp
                title={'How it works'}
            />;
            break;
        case "/rewards":
            componentToRender = <IntroRewards title={
                <>
                We make <br/>
                fans’ dreams <br/>
                come true
                </>
            }/>;
            break;
        case "/about":
            componentToRender = <IntroAbout title={'FC SHERIFF'} topTitle={'Welcome to the fotball family'}/>;
            break;
        case "/shop":
            componentToRender = <IntroShop
                title={
                    <>
                        <p>Магазин ШЕРИФ</p>
                        <p>Спортивные аксессуары клуба</p>
                    </>
                }
                images={'/assets/image/shop-images/background-shop.png'}
                alt={'Магазин ШЕРИФ Спортивные аксессуары клуба'}

            />;
            break;
        default:
            componentToRender = null;
    }

    return (
        <>
            {componentToRender}
        </>
    );
};

export default Intro;
