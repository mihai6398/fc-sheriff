import {Container} from "react-bootstrap";
import IntroModulesCSS from '../../../style/ui/intro.module.css';
interface introTheAppProps {
    title?: string;
}

const IntroTheApp = ({title}: introTheAppProps) => {
    return (
        <div className={IntroModulesCSS.appIntro}>
            <Container>
                <div style={{padding: '310px 0 0 0'}}>
                    <h1 className={`text-white font-weight-bold`} style={{fontSize: '64px'}}>{title}</h1>
                </div>
            </Container>
        </div>
    );
};

export default IntroTheApp;