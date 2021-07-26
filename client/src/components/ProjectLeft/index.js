import React, { useEffect, useState } from 'react';
import icon from '../../assets/SilverHelix.png'
import './style.css'


export default function ProjectLeft() {

    return (
<div class="card horizontal">
          <div class="card-image">
            <img src="./assets/StolenCanvasHomeImage.png"></img>
          </div>
          <div class="card-stacked blue-gradient">
            <div class="card-content">
              <h5>Stolen Canvas</h5>
              <p>Heroku hosted website simulating a e-commerce site selling great works of art using HTML, CSS,
                express.js</p>
            </div>
            <div class="card-action">
              <a href="https://afternoon-ocean-89274.herokuapp.com/">Deployed App</a>
              <a href="https://github.com/chancevaughn/Stolen-Canvas">Github</a>
            </div>
          </div>
        </div>
            )
        }