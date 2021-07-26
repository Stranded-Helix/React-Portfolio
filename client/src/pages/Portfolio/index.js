import React, { useEffect, useState } from 'react';
import About from '../../components/About';
import ProjectHeader from '../../components/ProjectHeader';
import ProjectLeft from '../../components/ProjectLeft';
import ProjectRight from '../../components/ProjectRight';



export default function Portfolio() {

    return (
        <div class="center">
            <div class="col s6 m6 l6 xl6">
                <About/>
                <ProjectHeader/>
                <ProjectLeft/>
                <ProjectRight/>
            </div>
        </div>

    )
}