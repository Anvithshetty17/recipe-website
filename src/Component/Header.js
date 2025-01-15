import React from 'react'
import DarkLightToggle from './DarkLightToggle';
import logo from './img/logo.jpg';


function Header() {
    return (
        <>
            <header className="header">

                <div className="header-logo">
                    <img src={logo} alt="Logo" />
                </div>


                <h1 className="mainh1">Delicious Recipes</h1>
                <p className="header-subtitle">Ultimate Destination For Food Lovers</p>

                <div className="nav-icons">
                    <DarkLightToggle />
                    <i className="fa fa-bars" aria-hidden="true"></i> {/* Menu Icon */}
                </div>
            </header>
        </>
    )
}

export default Header
