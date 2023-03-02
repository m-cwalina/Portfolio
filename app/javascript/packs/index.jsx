import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './home';
import '../components/navbar.scss'
import "@fontsource/roboto/300.css";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

// render an instance of the component in the DOM
const root = ReactDOM.createRoot(document.getElementById("Index"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
