


import 'bootstrap-icons/font/bootstrap-icons.css';
import { Outlet } from "react-router-dom"
import "./App.css";
import Header from "../Components/Header.jsx";
import HomePage from "./HomePage";
import Experiance from "./Experiance.jsx"
import ProjectPage from "./ProjectPage.jsx"
import Achivement from "./Achivement.jsx"
import Certificate from './Certificate.jsx'
import Contact from './Contact.jsx'
const App = ()=>{

  return (
  <>
      {/* <Header/> */}
      {/* <div className="banner-gradient w-100 position-relative">
      </div> */}
       {/* <Experiance></Experiance> */}
        {/* <HomePage/> */}


        
        {/* <ProjectPage></ProjectPage> */}
        {/* <Achivement></Achivement> */}

        {/* <Certificate></Certificate> */}
        
        {/* <Contact></Contact> */}


        {/* Routing */}

        
        {/* <Outlet/> */}
        <Header/>
         <HomePage/> 
      
         <Experiance/>
         <Achivement/>
        <ProjectPage/>
        <Certificate/>
        <Contact/>  
        
        
  </>
  );
}

export default App;

