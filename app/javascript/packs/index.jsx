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

import Banner from '../components/banner/banner'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <Banner /> },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/skills",
        element: <Skills />,
        loader: skillsLoader,
        children: [
          {
            path: '/skills/:skillId',
            element: <SkillDetails />,
            loader: skillDetailsLoader,
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/projects",
        element: <Projects />,
        loader: projectsLoader,
        children: [
          {
            path: '/projects/:projectId',
            element: <ProjectDetails />,
            loader: projectDetailsLoader,
          }
        ]
      }
    ]
  },
]);

// render an instance of the component in the DOM
const root = ReactDOM.createRoot(document.getElementById("Index"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
