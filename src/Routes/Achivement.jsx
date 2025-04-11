import React from "react";
import TiltCard from "./TiltCard";
import "./Achivement.css"

const Achievements = () => {
  const achievementList = [
    {
      imageSrc: "/Arjuna.png",
      caption: "Arjuna Hackathon Grand Finalist",
    },
    {
      imageSrc: "/Kimo.png",
      caption: "IntraNit Kimo Winner",
    },
    {
      imageSrc: "/Startup.png",
      caption: "Innovation Excellence Award",
    },
    {
      imageSrc: "/assets/UnstopDirectorBadge-V4wgBVQp.jpg",
      caption: "Coding Club Core Member",
    },
    {
      imageSrc: "/assets/UnstopDirectorBadge-V4wgBVQp.jpg",
      caption: "Coding Club Core Member",
    },
  ];

  return (
    <div className="achievements-wrapper" id="achievement">
      <div className="container py-5">
        <h2 className="text-center mb-4">🏆 Achievements</h2>
        <p className="text-center textSection mb-5 px-3">
          The following achievements reflect my dedication to excellence across diverse domains. From competitive platforms to collaborative initiatives, each accomplishment demonstrates my ability to perform at a high level, adapt to challenges, and contribute meaningfully. These milestones represent my journey of continuous learning, leadership, and growth — both academically and beyond.
        </p>
        <div className="achievement-cards-wrapper">
        <div className="row justify-content-center">
          {achievementList.map((item, index) => (
            <TiltCard key={index} {...item} />
          ))}
        </div>
        </div>
      </div>
      </div>
  );
};

export default Achievements;
