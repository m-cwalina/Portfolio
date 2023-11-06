import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../screens/home/home';
import About from '../screens/about/about';
import Skills, {loader as skillsLoader} from '../screens/skills/skills';
import SkillDetails, {loader as skillDetailsLoader} from '../screens/skills/skillDetails';
import Contact from '../screens/contact/contact';
import Projects, {loader as projectsLoader} from '../screens/projects/projects';
import ProjectDetails, {loader as projectDetailsLoader} from '../screens/projects/projectDetails';
import HomePageContent, { loader as projectsShowLoader } from '../screens/home/homePageContent';
import ForteFans, {loader as forteFansLoader} from '../screens/projects/fortefans/ForteFans';
import ConnectGolf, { loader as connectGolfLoader } from '../screens/projects/connectgolf/ConnectGolf';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true,
        element: <HomePageContent />,
        loader: projectsShowLoader },
      { path: "/about",
        element: <About /> },
      { path: "/skills",
        element: <Skills />,
        loader: skillsLoader,
        children: [
          { path: '/skills/:skillId',
            element: <SkillDetails />,
            loader: skillDetailsLoader }
        ]},
      { path: "/contact",
        element: <Contact /> },
      { path: "/projects",
        element: <Projects />,
        loader: projectsLoader, },
      { path: '/projects/:projectId',
        element: <ProjectDetails />,
        loader: projectDetailsLoader },
      { path: '/projects/ForteFans/:projectId',
        element: <ForteFans />,
        loader: forteFansLoader },
      { path: '/projects/ConnectGolf/:projectId',
        element: <ConnectGolf />,
        loader: connectGolfLoader }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("Index"));
root.render(
  <RouterProvider router={router} />
);
