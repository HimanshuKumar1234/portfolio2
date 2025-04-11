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
      liveUrl:"https://simons-game08.netlify.app/",
      details: "All-in-One Online Store – A seamless platform for gifts, stationery, and more! Users can browse, purchase, and track orders with ease."
    },
    {
      imageSrc: "/SimonGame.png",
      caption: "Project : SimonsGamet",
      githubUrl: "https://github.com/HimanshuKumar1234",
      liveUrl:"https://simons-game08.netlify.app/",
      details:"Simon Game – A fun and interactive memory challenge! Built to test users' pattern recognition with increasing difficulty."
    },
    {
      imageSrc: "/MyStationary.png",
      caption: "Innovation Excellence Award",
      githubUrl: "https://github.com/HimanshuKumar1234",
      liveUrl:"https://simons-game08.netlify.app/",
      details:"Simon Game – A fun and interactive memory challenge! Built to test users' pattern recognition with increasing difficulty."
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
