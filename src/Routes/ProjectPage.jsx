import React from "react";
import TiltCard from "./TiltCard";
import "./Achivement.css"
import ProjectCard from "./ProjectCard";

//githubUrl, liveUrl, details

const ProjectPage = () => {
  const achievementList = [
    {
      imageSrc: "/MyStationary.png",
      caption: "Project : My Stationary ",
      githubUrl: "https://github.com/HimanshuKumar1234",
      liveUrl:"https://project-mern-frontend.onrender.com/",
      details: "All-in-One Online Store – A seamless platform for gifts, stationery, and more! Users can browse, purchase, and track orders with ease."
    },
    {
      imageSrc: "/AlgoViz.png",
      caption: "Project : Algorithm Viualizer",
      githubUrl: "https://github.com/HimanshuKumar1234/Algo-Vizualizer",
      liveUrl:"https://algo-vizualizer-six.vercel.app/",
      details:"AlgoViz – An interactive algorithm visualizer! Built to simplify DSA concepts by animating step-by-step execution of popular algorithms."
    },
    {
      imageSrc: "/PortFolio.png",
      caption: "Project : My PortFolio",
      githubUrl: "https://github.com/HimanshuKumar1234/portfolio2",
      liveUrl:"https://himanshuportfolio-three.vercel.app/",
      details:"Portfolio – A personal developer portfolio! Built to showcase projects, skills, and experiences with a clean and responsive design."
    },
  ];

  return (
    <div className="achievements-wrapper" id="project">
      <div className="container py-5">
        <h2 className="text-center mb-4">Projects</h2>
        <p className="text-center textSection mb-5 px-3 projClass">
            The following projects demonstrate my skills and experience through practical, real-world applications. Each project includes a brief description along with links to the GitHub repository and live deployment. These projects highlight my ability to solve complex problems, work with diverse technologies, and manage development tasks efficiently and effectively.
        </p>
        <div className="row justify-content-center" style={{gap:"55px"}}>
          {achievementList.map((item, index) => (
            <ProjectCard key={index} {...item} />
          ))}
        </div>
      </div>
      </div>
  );
};

export default ProjectPage;
