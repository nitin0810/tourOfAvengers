
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navs = [
    { route: '/dashboard', name: 'Dashboard' },
    { route: '/list', name: 'Avengers List' },
    { route: '/add', name: 'Add Avenger' },
    { route: '/compare', name: 'Compare' },
];
export const Navbar = () => {

    return (
        <nav>
            <ul className="nav justify-content-center">
                {Navs.map((link, i) => (
                    <li  key={i}>
                        <NavLink className="nav-each"
                            activeClassName="nav-each-active"
                            to={link.route}>
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}