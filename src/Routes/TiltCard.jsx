import React, { useRef } from "react";
import "./TiltCard.css";

const TiltCard = ({ imageSrc, caption }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((x - centerX) / centerX) * 20;

    card.style.transform = `
      perspective(1000px)
      rotateX(${-rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.1)
    `;
  };

  const resetTilt = () => {
    const card = cardRef.current;
    card.style.transition = "transform 0.5s ease";
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    setTimeout(() => (card.style.transition = ""), 500);
  };

  return (
    <div className="col-md-4 col-sm-6 p-3 tiltClass">
      <div
        className="tilt-card mx-auto"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
      >
        <div className="tilt-inner">
          <img src={imageSrc} alt="Achievement" className="img-fluid" />
          <div className="caption-overlay">
            <h5>{caption}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiltCard;
