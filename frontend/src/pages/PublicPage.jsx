import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks';
import routes from '../routes';

const PublicPage = () => {
  const { loggedIn } = useAuth();

  return loggedIn ? <Navigate to={routes.homePage()} /> : <Outlet />;
};

export default PublicPage;
