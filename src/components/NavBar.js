import React from 'react';
import {Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <ul>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    )
}

export default NavBar;