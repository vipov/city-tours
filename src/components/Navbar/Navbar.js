import React from 'react';
import './Navbar.scss';
import logo from '../../logo.png';
import logokangaroo from '../../garoo_orange.svg';

import {Link} from 'react-router-dom';

export default function Navbar() {
    return <nav className="navbar">
        <img src={logokangaroo} alt="city tours logo"/>
        <ul className="nav-links">
            <li>
                <Link to="/" className="nav-link">
                        home
                </Link>
            </li>
            <li>
                <Link to="/" className="nav-link">
                        about
                </Link>
            </li>
            <li>
                <Link to="/" className="nav-link active">
                        tours
                </Link>
            </li>
        </ul>
    </nav>
}

//rfc
