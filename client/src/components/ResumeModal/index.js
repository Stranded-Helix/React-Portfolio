import React, { useEffect, useState } from 'react';
import icon from '../../assets/SilverHelix.png'
import './style.css'


export default function About() {

    return (
        <div id="modal-resume" class="modal blue-gradient">
            <div class="card blue-gradient">
                <div class="modal-content">
                    <h4>Download</h4>
                    <p>G.Fite Resume - 2021.pdf</p>
                </div>
                <div class="blue-gradient card-action center-align">
                    <a href="./assets/G.Fite Resume - 2021.pdf" class="modal-close" download>Download</a>
                    <a href="#!" class="modal-close ">Cancel</a>
                </div>
            </div>
        </div>
    )
}