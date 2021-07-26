import React, { useEffect, useState } from 'react';
import icon from '../../assets/SilverHelix.png'
import './style.css'


export default function ProjectRight({project}) {

    return (
        <div className="card horizontal">
          <div className="card-stacked blue-gradient">
            <div className="card-content">
              <h5>{project.title}</h5>
              <p>{project.description}</p>
            </div>
            <div className="card-action">
              <a href={project.deployedLink}>Deployed App</a>
              <a href={project.githubLink}>Github</a>
            </div>
          </div>
          <div className="card-image">
            <img src={project.image}></img>
          </div>
        </div>
    )
}