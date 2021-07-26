import React, { useEffect, useState } from 'react';
import icon from '../../assets/SilverHelix.png'
import './style.css'


export default function Contact() {

    return (
        <div>
            <h4>Contact Me</h4>
            <div id="contact" className="card horizontal">
                <div className="card-stacked blue-gradient">
                    <div className="card-content">
                        <h6>Garrett Fite</h6>
                    </div>
                    <div className="card-action">
                        <a href="https://www.linkedin.com/in/garrett-fite-07a74096/">Linkedin</a>
                        <a href="https://github.com/Stranded-Helix">GitHub</a>
                        <a href="mailto: garrett.fite@gmail.com">Garrett.fite@gmail.com</a>
                        <a href="#contact">817-933-1634</a>
                    </div>
                </div>
            </div>
        </div>

    )
}