import React from 'react';
import {Link} from "react-router-dom";
import '../../../style/ui/header-menu.css'
interface MenuItem {
    to: string;
    value: string;
}

interface headerMenuProps {
    HeaderMenuData: MenuItem[];
    header: string;
    active: any;
    setActive: any;
}

const HeaderMenu = ({header, HeaderMenuData,active ,setActive}: headerMenuProps) => {
    return (
        <div className={active ? 'menu active' : 'menu'}>
            <div className="blur" onClick={() => setActive(!active)}>
                <div className="menu-content">
                    <div className="menu-header">{header}</div>
                    <ul className={'burger-ul'}>
                        {HeaderMenuData.map((data: MenuItem, index) =>
                            <li key={index} className={'burger-link'}>
                                <Link to={data.to}>{data.value}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HeaderMenu;