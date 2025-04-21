


// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Outlet } from "react-router-dom"
// import "./App.css";
// import { lazy, Suspense } from 'react';

// import Header from "../Components/Header.jsx";
// import HomePage from "./HomePage";
// import Experiance from "./Experiance.jsx"
// import ProjectPage from "./ProjectPage.jsx"
// import Achivement from "./Achivement.jsx"
// import Certificate from './Certificate.jsx'
// import Contact from './Contact.jsx'
// const App = ()=>{

//   return (
//   <>
//       {/* <Header/> */}
//       {/* <div className="banner-gradient w-100 position-relative">
//       </div> */}
//        {/* <Experiance></Experiance> */}
//         {/* <HomePage/> */}


        
//         {/* <ProjectPage></ProjectPage> */}
//         {/* <Achivement></Achivement> */}

//         {/* <Certificate></Certificate> */}
        
//         {/* <Contact></Contact> */}


//         {/* Routing */}

        
//         {/* <Outlet/> */}
//         <Header/>
//          <HomePage/> 
      
//          <Experiance/>
//          <Achivement/>
//         <ProjectPage/>
//         <Certificate/>
//         <Contact/>  
        
        
//   </>
//   );
// }

// export default App;

import 'bootstrap-icons/font/bootstrap-icons.css';
import { Outlet } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from 'react';

// 🔁 Lazy load all components
const Header = lazy(() => import("../Components/Header.jsx"));
const HomePage = lazy(() => import("./HomePage.jsx"));
const Experiance = lazy(() => import("./Experiance.jsx"));
const ProjectPage = lazy(() => import("./ProjectPage.jsx"));
const Achivement = lazy(() => import("./Achivement.jsx"));
const Certificate = lazy(() => import("./Certificate.jsx"));
const Contact = lazy(() => import("./Contact.jsx"));

const App = () => {
  return (
    <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
      <Header />
      <HomePage />
      <Experiance />
      <Achivement />
      <ProjectPage />
      <Certificate />
      <Contact />
      {/* Optional: if you're using react-router */}
      {/* <Outlet /> */}
    </Suspense>
  );
}

export default App;
