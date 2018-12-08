
import React from 'react';
import { NavLink } from 'react-router-dom';
const Navs = [
    { route: '/dashboard', name: 'Dashboard' },
    { route: '/list', name: 'Avengers List' },
    { route: '/add', name: 'Add Avenger' },
    { route: '/compare', name: 'Compare' },
];
export const Navbar = () => {

    const selectedStyle = { color: 'black', backgroundColor: 'azure' };
    return (
        <ul className="nav justify-content-center">
            {Navs.map((link, i) => (
                <li className="nav-item" key={i}>
                    <NavLink className="nav-link"
                        activeStyle={selectedStyle}
                        to={link.route}>
                        {link.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}