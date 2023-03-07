import {NavLink, Link} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import {useState} from "react";
import HeaderMenu from "./HeaderMenu";
import {HeaderMenuData} from "../../../data";

const HeaderDefault = () => {
    const [changeHeader, setChangeHeader] = useState<boolean>(false)
    const [menuActive, setMenuActive] = useState<boolean>(false)

    const checkHeaderScrollY = () => {
        if (window.scrollY >= 100) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)

        }
    }
    window.addEventListener('scroll', checkHeaderScrollY)


    return (
        <>
            {changeHeader
                ?
                <header className={'header bg-white'}>
                    <Container className={'header-inner'}>
                        <Row className={'align-items-center pt-4'}>
                            <Col className={'col-8 justify-content-start'}>
                                <nav>
                                    <Link to={'/'}>
                                        <img className={'d-inline-flex'} src={'assets/logo/Logo-sheriff.png'} alt="logo"/>
                                    </Link>
                                    <ul className={'ms-3 d-none d-xl-inline-flex'}>
                                        <li className={'nav-link d-inline-flex'}>
                                            <NavLink
                                                className={'text-dark text-uppercase'} to={'/'}>Home
                                            </NavLink>
                                        </li>
                                        <li className={'nav-link d-inline-flex'}>
                                            <NavLink
                                                className={'text-dark text-uppercase'}
                                                to={'/the-app'}>The app
                                            </NavLink>
                                        </li>
                                        <li className={'nav-link d-inline-flex'}>
                                            <NavLink
                                                className={'text-dark text-uppercase'}
                                                to={'/rewards'}>Rewards
                                            </NavLink>
                                        </li>
                                        <li className={'nav-link d-inline-flex'}>
                                            <NavLink
                                                className={'text-dark text-uppercase'}
                                                to={'/about'}>About
                                            </NavLink>
                                        </li>
                                        <li className={'nav-link d-inline-flex'}>
                                            <NavLink
                                                className={'text-dark text-uppercase'}
                                                to={'/shop'}>Shop
                                            </NavLink>
                                        </li>
                                        <li className={'nav-link d-inline-flex'}>
                                            <NavLink
                                                className={'text-dark text-uppercase'}
                                                to={'/tickets'}>Tickets
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </Col>
                            <Col className={'col-4 justify-content-end align-items-center d-inline-flex '}>
                                <div className={'d-none d-xl-block'}>
                                    <select
                                        className={'header-custom-select border-0 text-dark bg-transparent h-25 m-3'}
                                        name="language" id="language">
                                        <option className={'bg-warning text-white'} value="0">English</option>
                                        <option className={'bg-warning text-white'} value="1">Русский</option>
                                    </select>
                                    <button className={'header-custom-btn border-0'}><a
                                        className={'text-white'} href="#">Sign
                                        Up</a>
                                    </button>
                                </div>
                                <div className={'d-block d-xl-none burger-btn'} onClick={() => setMenuActive(!menuActive)}>
                                    <i><img className={'w-100'} src={'/assets/icon/menu.png'} alt=""/></i>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <HeaderMenu HeaderMenuData={HeaderMenuData} header={'Menu'} active={menuActive} setActive={setMenuActive}/>
                </header>
                :
                <header className={'header text-u'}>
                    <Container className={'header-inner'}>
                        <Row className={'pt-4'}>
                            <Col className={'col-8'}>
                                <nav>
                                    <Link to={'/'}>
                                        <img className={'d-inline-flex'} src={'assets/logo/Logo-sheriff.png'} alt=""/>
                                    </Link>
                                    <ul className={'ms-3 d-none d-xl-inline-block'}>
                                        <li className={'nav-link d-inline-flex'}>
                                            <NavLink
                                                className={'text-white text-uppercase'} to={'/'}>Home
                                            </NavLink>
                                        </li>
                                        <li className={'nav-link d-inline-flex'}>
                                            <NavLink
                                                className={'text-white text-uppercase'}
                                                to={'/the-app'}>The app
                                            </NavLink>
                                        </li>
                                        <li className={'nav-link d-inline-flex'}>
                                            <NavLink
                                                className={'text-white text-uppercase'}
                                                to={'/rewards'}>Rewards
                                            </NavLink>
                                        </li>
                                        <li className={'nav-link d-inline-flex'}>
                                            <NavLink
                                                className={'text-white text-uppercase'}
                                                to={'/about'}>About
                                            </NavLink>
                                        </li>
                                        <li className={'nav-link d-inline-flex'}>
                                            <NavLink
                                                className={'text-white text-uppercase'}
                                                to={'/shop'}>Shop
                                            </NavLink>
                                        </li>
                                        <li className={'nav-link d-inline-flex'}>
                                            <NavLink
                                                className={'text-white text-uppercase'}
                                                to={'/tickets'}>Tickets
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </Col>
                            <Col className={'col-4 justify-content-end align-items-center d-inline-flex '}>
                                <div className={'d-none d-xl-block'}>
                                    <select
                                        className={'header-custom-select border-0 text-white bg-transparent h-25 m-3'}
                                        name="language" id="language">
                                        <option className={'bg-warning text-white'} value="0">English</option>
                                        <option className={'bg-warning text-white'} value="1">Русский</option>
                                    </select>
                                    <button className={'header-custom-btn border-0'}><a
                                        className={'text-white'} href="#">Sign
                                        Up</a>
                                    </button>
                                </div>
                                <div className={'d-block d-xl-none burger-btn'} onClick={() => setMenuActive(!menuActive)}>
                                    <i><img className={'w-100'} src={'/assets/icon/menu-white.png'} alt=""/></i>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <HeaderMenu HeaderMenuData={HeaderMenuData} header={'Menu'} active={menuActive} setActive={setMenuActive}/>
                </header>

            }
        </>
    );
};

export default HeaderDefault;