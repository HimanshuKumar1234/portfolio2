import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from "./Routes/HomePage.jsx"
import Experiance from "./Routes/Experiance.jsx"
import ProjectPage from "./Routes/ProjectPage.jsx"
import Achivement from "./Routes/Achivement.jsx"
import Certificate from './Routes/Certificate.jsx'
import Contact from './Routes/Contact.jsx'



import App from './Routes/App.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage />,/* loader: postLoader */ },
      {
        path: "/experiances",
        element: <Experiance />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
      },
      {
        path: "/achivement",
        element: <Achivement />,
      },
      {
        path: "/certificate",
        element: <Certificate />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </StrictMode>,
)


