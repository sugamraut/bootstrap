import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/rootlayouts';
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import LandingPage from './pages/LandingPage';
import Contact from './pages/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import"./assets/css/main.scss"


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'contact', element: <Contact/> },
      // { path: '*', element: <NotFound /> }
    ]
  }
]);

export default router;
