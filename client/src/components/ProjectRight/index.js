import React, { useEffect, useState } from 'react';
import icon from '../../assets/SilverHelix.png'
import './style.css'


export default function ProjectRight() {

    return (
        <div class="card horizontal">
          <div class="card-stacked blue-gradient">
            <div class="card-content">
              <h5>Global-Nibz</h5>
              <p>Food and Recipie randomizer that selects 3 options from the same region using Edamam API, HTML, CSS,
                and Javascript</p>
            </div>
            <div class="card-action">
              <a href="https://doublelforce5.github.io/Global-Nibz/">Deployed App</a>
              <a href="https://github.com/DoubleLForce5/Global-Nibz">Github</a>
            </div>
          </div>
          <div class="card-image">
            <img src="./assets/GlobalNibzHomeImage.png"></img>
          </div>
        </div>
    )
}