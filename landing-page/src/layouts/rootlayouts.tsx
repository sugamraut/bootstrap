import { Outlet, Link } from 'react-router-dom';

const RootLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
