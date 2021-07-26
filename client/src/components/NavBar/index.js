import React, { useEffect, useState } from 'react';
import icon from '../../assets/SilverHelix.png'
import './style.css'


export default function NavBar() {

    return (
        <nav className="transparent-background">
            <div className="nav-wrapper nav-size">
                <a href="#" className="brand-logo logo-container logo-size">
                    <img className="logo-image" src={icon}></img>
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#Major-projects">Major Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}