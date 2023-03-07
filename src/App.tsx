import {Home, About, Shop, Rewards , TheApp, Tickets} from "./pages/PagesMain";
import {Route, Routes} from "react-router-dom";
import NoFound from "./pages/NoFound";
import './style/app.css'
function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/the-app'} element={<TheApp/>}/>
                <Route path={'/rewards'} element={<Rewards/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/shop'} element={<Shop/>}/>
                <Route path={'/tickets'} element={<Tickets/>}/>
                <Route path={'/tickets/*'} element={<Tickets/>}/>
                <Route path={'*'} element={<NoFound/>}/>
            </Routes>
        </>
    );
}

export default App;
