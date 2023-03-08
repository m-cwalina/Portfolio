import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from '../screens/home/home';
import '../screens/home/home.scss';

import About from '../screens/about/about';
import '../screens/about/about.scss';

import Skills, {loader as skillsLoader} from '../screens/skills/skills';
import SkillDetails, {loader as skillDetailsLoader} from '../screens/skills/skillDetails';
import '../screens/skills/skills.scss';

import Contact from '../screens/contact/contact';

import Projects from '../screens/projects/projects';

import Banner from '../components/banner/banner'
import '../components/banner/banner.scss'


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
        element: <Projects />
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
