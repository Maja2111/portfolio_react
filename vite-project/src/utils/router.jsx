/**@description:
 * Implemtierung des Sprachwechsels in der router um diese auf allen pages ausgeben zu können
 */

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LanguageProvider } from '../Components/Language/LanguageContext';
import App from '../App';
import Aboutme from '../Pages/Aboutme';
import Contact from '../Pages/Contact';
import CV from '../Pages/CV';
import Projects from '../Pages/Project';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
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
]);

const Routes = () => {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
};
export default Routes;
