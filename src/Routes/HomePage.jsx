

import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaAward } from "react-icons/fa";

const HomePage = ()=>{

  const skills = [
    'Java', 'TypeScript', 'JavaScript', 'React', 'Next.js',
    'Spring Boot', 'Node.js', 'Express.js', 'MySQL',
    'MongoDB', 'Git', 'Unit Testing', 'Data structures'
  ];
  return(
    <>
    {/* Extra Wrapped */}
    <div className="d-flex justify-content-center gap-4 flex-wrap w-100">
    <div className='my-4 px-3 homeClass' id="home">
      <div className="video-container">
          <div className="video-overlay"></div>
          <video autoPlay muted loop playsInline preload="auto" className="bg-video" id="bg-video">
            <source src="/PortFolio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      <div className="hero-content d-flex flex-column justify-content-center align-items-center text-center text-white my-5 ">
          <h1 className="display-3 fw-bold">
            Hello, I'm <span className="text-warning">Himanshu</span>
          </h1>

          <h2 className='my-3'>"NIT Manipur Computer Science student leveraging full-stack expertise and AI knowledge to craft innovative, scalable solutions through impactful, user-focused projects."</h2>
          

            <div className="d-flex justify-content-center gap-4 flex-wrap my-5">
              <a
                href="https://www.linkedin.com/in/himanshu-kumar-4649b02a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="glass-card">
                  <FaLinkedin size={50} className="card-icon" />
                  <h5 className="fw-bold mt-3 mb-1 text-white">LinkedIn</h5>
                  <p className="small text-light m-0">Let's connect </p>
                </div>
              </a>

              <a
                href="https://unstop.com/competitions/reliance-tup-x-reliance-industries-limited-ril-1062327?ref=LC1xGzuL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="glass-card">
                  <FaAward size={50} className="card-icon" />
                  <h5 className="fw-bold mt-3 mb-1 text-white">Unstop</h5>
                  <p className="small text-light m-0"> My achievements</p>
                </div>
              </a>
            </div>

          


          <div className="logos my-9">
          <div className="scrolling-wrapper">
            <div className="scroll-slide">
              {skills.map((skill, index) => (
                <span key={`slide1-${index}`}>{skill}</span>
              ))}
            </div>
            <div className="scroll-slide">
              {skills.map((skill, index) => (
                <span key={`slide2-${index}`}>{skill}</span>
              ))}
            </div>
          </div>
          </div>
        </div>
    </div>
    </div>
              
       
    </>
  );
}

export default HomePage;