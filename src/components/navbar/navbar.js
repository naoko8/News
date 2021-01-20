import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return <nav className="nav">
        <ul>
            <li>
            <Link className="link" to="/">Home</Link>
            </li>
            <li>
            <Link className="link" to="/Business">Business</Link>
            </li>
            <li>
            <Link className="link" to="/WallStreet">Wall Street</Link>
            </li>
            <li>
            <Link className="link" to="/About">About</Link>
            </li>
            <li>
            <Link className="link" to="/Register">Registration</Link>
            </li>
        </ul>
   
    </nav>;
}

export default Navbar;