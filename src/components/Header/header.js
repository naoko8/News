import React from 'react';
import Logo from '../logo/logo.js';

const Header = () => {
    return <header className="header">
        <Logo />
        <h3 style={{fontFamily: "sans-serif", color: "white"}}>TOP NEWS</h3>
    </header>;
}

export default Header;