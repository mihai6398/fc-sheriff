import {useLocation} from "react-router-dom";
import {GetAppDefault, GetAppHome, GetAppApp} from "../MainUI";

const GetApp = () => {
    const location = useLocation();
    const pathname = location.pathname;

    let componentToRender;
    switch (pathname) {
        case "/": componentToRender = <GetAppHome/>
            break;
        case "/the-app":
            componentToRender = <GetAppApp/>
            break;
        case "/rewards":
            componentToRender = <GetAppDefault/>;
            break;
        case "/about":
            componentToRender = <GetAppDefault/>;
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

export default GetApp;
