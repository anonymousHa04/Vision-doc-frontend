// Navbar
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Navbar</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;