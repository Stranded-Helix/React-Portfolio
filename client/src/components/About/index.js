import React, { useEffect, useState } from 'react';
import icon from '../../assets/SilverHelix.png'
import './style.css'


export default function About() {

    return (
        <div class="row">
          <div class="col s6 m6 l6 xl6 offset-s3 offset-m3 offset-l3 offset-xl3">
            <div class="card blue-gradient">
              <div class="card-image">
                <img src="./assets/Portfolio.jpg"></img>
                <span class="card-title color-neutral">Garrett Fite</span>
              </div>
              <div class="card-content">
                <p>My name is Garrett. I started to program about 3 years ago by reading, watching videos and trial and
                  error. I'm currently studying full stack development through SMU's Boot Camp. Though I have
                  made small programs for family and friends in the past, I am looking to progess into a career in
                  software development. In my free time, I enjoy spending time with my German Shepherd, Ava, playing all
                  kinds of video games, and flying planes.</p>
                <p></p>
              </div>
              <div class="card-action blue-gradient">
                <a class="resume-link modal-trigger" href="#modal-resume">Resume</a>
              </div>
            </div>
          </div>
        </div>
            )
        }