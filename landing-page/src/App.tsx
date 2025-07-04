import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/rootlayouts';
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import LandingPage from './components/LandingPage';
import Contact from './pages/contact';


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
