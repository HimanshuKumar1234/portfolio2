import React from "react";
import { FaGithub } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ imageSrc, caption, githubUrl, liveUrl, details }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={imageSrc} alt="Project" className="project-img" />

        {/* GitHub Icon */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="github-icon"
        >
          <FaGithub />
        </a>

        {/* Hover Detail Overlay */}
        <div className="card-overlay">
          <p>{details}</p>
        </div>
      </div>

      {/* Live Link */}
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="live-btn"
      >
        Live Link 🚀
      </a>

      {/* Caption */}
      <div className="card-caption">{caption}</div>
    </div>
  );
};

export default ProjectCard;
