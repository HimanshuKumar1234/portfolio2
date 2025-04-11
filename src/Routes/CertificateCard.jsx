import React from "react";

const CertificateCard = ({ imageSrc}) => {
  return (
    <div className="certificate-card">
      <img src={imageSrc}  className="certificate-img" />
    </div>
  );
};

export default CertificateCard;
