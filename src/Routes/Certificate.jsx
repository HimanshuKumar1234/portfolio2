import React from "react";
import CertificateCard from "./CertificateCard";
import "./CertificateCard.css";
import { FaAward } from "react-icons/fa";

const Certificate = () => {
  const certificate = [
    {
      imageSrc: "/Cert1.png",
    },
    {
      imageSrc: "/GirlScript.png",
    },
    {
      imageSrc: "/Cert4.png",
    },
    {
      imageSrc: "/Cert5.png",
    },
    {
      imageSrc: "/Cert2.png",
    },
    {
      imageSrc: "/Cert3.png",
    }
  ];

  // Duplicate certificates for smooth infinite scrolling
  const duplicatedCertificates = [...certificate, ...certificate];

  return (
    <div className="certificate-section certificate-wrapper">
      <h2 className="certificate-title">
        <FaAward style={{ marginRight: "0.5rem" }} /> Certificates
      </h2>
      <div className="infinite-scroll-wrapper">
        <div className="infinite-scroll-track">
          {duplicatedCertificates.map((item, index) => (
            <CertificateCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
