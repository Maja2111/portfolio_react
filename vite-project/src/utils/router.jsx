import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Aboutme from '../Pages/Aboutme';
import Contact from '../Pages/Contact';
import CV from '../Pages/CV';
import Projects from '../Pages/Project';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'aboutme',
        element: <Aboutme />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'cv',
        element: <CV />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
    ],
  },
]);
export default router;
