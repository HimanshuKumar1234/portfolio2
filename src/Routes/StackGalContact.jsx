import React from 'react';
import './StackGalContact.css'; // Use this for CSS styling

const images = [
  '/Contact3.png',
  '/Contact4.png',
  '/Contact.png',
  '/Contact5.png',
  '/Contact2.png'
];

const StackedGallery = () => {
  return (
    <>
   <div className="terminal-intro">
      <p>&gt; Connecting to <span className="highlight">Himanshu's brain</span>...</p>
      <p>&gt; <span className="connected">Connection established.</span> Awaiting your message...</p>
    </div>
    
    {/* <div className="gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`img-${index}`} className={`img img-${index + 1}`} />
      ))}
    </div> */}
    </>
  );
};

export default StackedGallery;
