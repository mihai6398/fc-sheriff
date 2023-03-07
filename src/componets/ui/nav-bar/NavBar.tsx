import '../../../style/ui/nav-bar.css';
import {Route, Routes} from 'react-router-dom';
import {HeaderDefault, HeaderWhite} from "../MainUI";

const NavBar = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HeaderDefault/>}/>
            <Route path={'/the-app'} element={<HeaderDefault/>}/>
            <Route path={'/rewards'} element={<HeaderDefault/>}/>
            <Route path={'/about'} element={<HeaderDefault/>}/>
            <Route path={'/shop'} element={<HeaderWhite/>}/>
            <Route path={'/tickets'} element={<HeaderWhite/>}/>
            <Route path={'/tickets/*'} element={<HeaderWhite/>}/>
        </Routes>
    );
};

export default NavBar;
