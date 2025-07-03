import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/rootlayouts';
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import LandingPage from './components/LandingPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      // { path: 'about', element: <Slider /> },
      // { path: '*', element: <NotFound /> }
    ]
  }
]);

export default router;
