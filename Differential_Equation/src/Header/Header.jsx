import React from 'react';
import './Header.css';
import letterN from '../assets/letter-n.png';
import infoButton from '../assets/information-button.png';

function Header() {
    return (
        <>
            <header>
                <div className="header-left">
                    <img src={letterN} alt="Nathaniel" />
                    <h1 className="headtitle">DIFFERENTIAL EQUATION</h1>
                </div>
                <nav className="navmain">
                    <ul className="navUL">
                        <li><a href="" target="_blank">About</a></li>
                        <a href="" target="_blank"><img src={infoButton} id="info" alt="Info" /></a>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;