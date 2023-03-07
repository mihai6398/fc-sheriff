import IntroModulesCSS from "../../../style/ui/intro.module.css";
import {Container} from "react-bootstrap";

interface introAboutProps {
    topTitle?: string;
    title?: string;
}
const IntroAbout = ({topTitle, title}: introAboutProps) => {
    return (
        <div className={IntroModulesCSS.aboutIntro}>
            <Container>
                <div style={{padding: '310px 0 0 0'}}>
                    <span className={'text-white'}>{topTitle}</span>
                    <h1 className={`text-white font-weight-bold`} style={{fontSize: '64px'}}>{title}</h1>
                </div>
            </Container>
        </div>
    );
};

export default IntroAbout;