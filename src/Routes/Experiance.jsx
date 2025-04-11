import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Experiance.css";

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "PurposeBuddy",
    date: "July 2024 – Sep 2024",
    points: [
      "Designed and built RESTful APIs using Postman and PostgreSQL to store and manage data from learning management systems.",
      "Developed a full-stack web application with Flask (backend) and React (frontend) to analyze and visualize GitHub repository data.",
      "Containerized the entire application using Docker for streamlined development and deployment.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "My Bestie",
    date: "May 2023 - Aug 2023",
    points: [
      "Designed intuitive user interfaces for client dashboards.",
      "Improved website performance and SEO optimization.",
      "Participated in agile sprints and code reviews.",
    ],
  },
  {
    title: "Campus Ambassador Intern",
    company_name: "Physics Wallah ",
    date: "April 2024 – Present",
    points: [
      "Boosted campus engagement by 30% through strategic planning and execution of events like workshops, seminars, and info sessions.",
      "Collected and curated 100+ authentic college reviews from premier institutes (IITs & NITs) to assist students in making informed decisions.",
      "Acted as a liaison between the brand and campus community, driving awareness and student participation.",
    ],
  }
];

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1a1a1a", color: "#ffff00" }}
    contentArrowStyle={{ borderRight: "7px solid #00ff00" }}
    date={<span className="timeline-date">{experience.date}</span>}
    iconStyle={{ background: "#00ff00", color: "#1a1a1a" }}
    icon={
      <div className="timeline-icon">
        <i className="bi bi-briefcase-fill fs-4"></i>
      </div>
    }
  >
    <div className="timeline-content">
      <h3 className="experience-title">{experience.title}</h3>
      <p className="company-name">{experience.company_name}</p>
      <ul className="experience-points">
        {experience.points.map((point, index) => (
          <li className="experience-bullet" key={index}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);


const Experance = () => {
  return (
    <div id="experience" className="timeline-container experiance-wrapper ">
      <div className="timeline-header">
        <p className="experience-subtitle">What I have done so far</p>
        <h2 className="experience-main-title">Work Experience</h2>
      </div>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard experience={experience} key={index} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experance;
