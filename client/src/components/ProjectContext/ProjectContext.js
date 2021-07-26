import React, { useContext, useState } from 'react';
import StolenCanvasImage from "../../assets/StolenCanvasHomeImage.png";
import GlobalNibzImage from "../../assets/GlobalNibzHomeImage.png";
import BarcodeImage from "../../assets/Barcode-generator.png";
import TechBlogImage from "../../assets/TechBlogScreenshot.png";

const ProjectContext = React.createContext();

const projects = [
 {
    image: StolenCanvasImage,
    title: `Stolen Canvas`,
    description: 'Heroku hosted website simulating a e-commerce site selling great works of art using HTML, CSS, express.js',
    deployedLink: `https://afternoon-ocean-89274.herokuapp.com/`,
    githubLink: `https://github.com/chancevaughn/Stolen-Canvas`
 },
{

    image: GlobalNibzImage,
        title: `Global-Nibz`,
            description: `Food and Recipie randomizer that selects 3 options from the same region using Edamam API, HTML, CSS, and Javascript`,
                deployedLink: `https://doublelforce5.github.io/Global-Nibz/`,
                    githubLink: `https://github.com/DoubleLForce5/Global-Nibz`
},
{
    image: BarcodeImage,
        title: `Code 128 Barcode Generator`,
            description: `Generates barcode images in Code 128 format using C#`,
                deployedLink: ``,
                    githubLink: `https://github.com/Stranded-Helix/Barcode`
},
{
    image: TechBlogImage,
        title: `Tech Blog`,
            description: `Blogging website that allows users to post and comment`,
                deployedLink: `https : //mighty-bastion-20147.herokuapp.com/`,
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