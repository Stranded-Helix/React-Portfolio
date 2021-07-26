import React, { useContext, useState } from 'react';

const ProjectContext = React.createContext();

const projects = [
 {
    image: `../../assets/StolenCanvasHomeImage.png`,
    title: `Stolen Canvas`,
    description: `Heroku hosted website simulating a e-commerce site selling great works of art using HTML, CSS, express.js`,
    deployedLink: `https://afternoon-ocean-89274.herokuapp.com/`,
    githubLink: `https://github.com/chancevaughn/Stolen-Canvas`
 },
 {
    image: `../../assets/GlobalNibzHomeImage.png`,
    title: `Global-Nibz`,
    description: `Food and Recipie randomizer that selects 3 options from the same region using Edamam API, HTML, CSS, and Javascript`,
    deployedLink: `https://doublelforce5.github.io/Global-Nibz/`,
    githubLink: `https://github.com/DoubleLForce5/Global-Nibz`
 },
 {
    image: `../../assets/Barcode-generator.png`,
    title: `Code 128 Barcode Generator`,
    description: `Generates barcode images in Code 128 format using C#`,
    deployedLink: ``,
    githubLink: `https://github.com/Stranded-Helix/Barcode`
 },
 {
    image: `../../assets/TechBlogScreenshot.png`,
    title: `Tech Blog`,
    description: `Blogging website that allows users to post and comment`,
    deployedLink: `https://mighty-bastion-20147.herokuapp.com/`,
    githubLink: `https://github.com/Stranded-Helix/TechBlog`
 }
]


export function useProjects() {
    return useContext(ProjectContext);
}


export function ProjectProvider({ children }) {

    const [projectContext, setProjectContext] = useState(projects);

    return (
        <ProjectContext.Provider value={projectContext}>
            {children}
        </ProjectContext.Provider>
    )
}