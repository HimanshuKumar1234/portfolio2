// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Container, Nav } from 'react-bootstrap';
// import { FaGithub, FaCode } from 'react-icons/fa';
// import './Header.css'; // We'll create this file for custom styles
// import {Link} from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       <Navbar  expand="lg" className="py-3 shadow-sm headerC">
//         <Container>
//           {/* Left - Logo */}
//           <Navbar.Brand href="#home" className="d-flex align-items-center nav-logo">
//               <img
//                 src="/MyPhoto.png"
//                 width="70"
//                 height="70"
//                 className="d-inline-block align-top rounded-circle profile-img"
//                 alt="Portfolio Logo"
//               />
//             </Navbar.Brand>
           
//           {/* Middle - Navigation */}
//           <Nav className="mx-auto">
//               <a href="#home" className="nav-button mx-2 nav-link">Skills</a>
//               <a href="#experience" className="nav-button mx-2 nav-link">Experience</a>
//               <a href="#project" className="nav-button mx-2 nav-link">Projects</a>
//               <a href="#achievement" className="nav-button mx-2 nav-link">Achievements</a>
//               <a href="#contact" className="nav-button mx-2 nav-link">Contact</a>
//             </Nav>
//               {/* mine  */}
//           {/* <Nav className="mx-auto">
//               <Link to="/" className="nav-button mx-2 nav-link">Skills</Link>
//             <Link to="/experiances" className="nav-button mx-2 nav-link">Experience</Link>
//             <Link to="/projects" className="nav-button mx-2 nav-link">Projects</Link>
//             <Link to="/achivement" className="nav-button mx-2 nav-link">Achievements</Link>
//             <Link to="/contact" className="nav-button mx-2 nav-link">Contact</Link> 
//           </Nav>*/}


//           {/* Right - External Links */}
//           <Nav className="ms-auto">
//             <Nav.Link 
//               href="https://leetcode.com/u/himanshu_123kumar/" 
//               target="_blank" 
//               className="external-link leetcode me-3"
//             >
//               <img 
//                 src="/LeetCodeim.png" 
//                 alt="LeetCode" 
//                 height="30" 
//               />
//                LeetCode
//             </Nav.Link>
//             <Nav.Link 
//               href="https://github.com/yourusername" 
//               target="_blank" 
//               className="external-link github"
//             >
//               <FaGithub className="me-2" />
//               GitHub
//             </Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
      
//     </>
//   );
// };

// export default Header;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="py-3 shadow-sm headerC" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center nav-logo">
          <img
            src="/MyPhoto.png"
            width="60"
            height="60"
            className="d-inline-block align-top rounded-circle profile-img"
            alt="Portfolio Logo"
          />
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 toggle-icon " />

        {/* Collapsible content */}
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Center - Nav Links */}
          <Nav className="mx-auto text-center">
            <a href="#home" className="nav-button nav-link mx-1">Skills</a>
            <a href="#experience" className="nav-button nav-link mx-1">Experience</a>
            <a href="#project" className="nav-button nav-link mx-1">Projects</a>
            <a href="#achievement" className="nav-button nav-link mx-1">Achievements</a>
            <a href="#contact" className="nav-button nav-link mx-1">Contact</a>
          </Nav>

          {/* Right - External Links */}
          <Nav className="ms-lg-auto text-center mt-3 mt-lg-0">
            <Nav.Link
              href="https://leetcode.com/u/himanshu_123kumar/"
              target="_blank"
              className="external-link leetcode mx-1"
            >
              <img src="/LeetCodeim.png" alt="LeetCode" height="24" className="me-2" />
              LeetCode
            </Nav.Link>

            <Nav.Link
              href="https://github.com/HimanshuKumar1234"
              target="_blank"
              className="external-link github mx-1"
            >
              <FaGithub className="me-2" />
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
