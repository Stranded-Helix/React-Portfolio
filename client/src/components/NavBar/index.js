import React, { useEffect, useState } from 'react';


export default function NavBar() {

    return (
        <nav class="transparent-background">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo logo-container">
                    <img class="logo-image" src="assets/SilverHelix.png"></img>
                </a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="#Major-projects">Major Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}