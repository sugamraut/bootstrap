import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/rootlayouts';
import Navbar from './components/Nabar'
import Slider from './components/Slider'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Navbar /> },
      { path: 'about', element: <Slider /> },
      // { path: '*', element: <NotFound /> }
    ]
  }
]);

export default router;
