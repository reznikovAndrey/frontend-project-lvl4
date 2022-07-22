import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../hooks';
import routes from '../../routes';

const PrivatePage = () => {
  const { loggedIn } = useAuth();
  return loggedIn ? <Outlet /> : <Navigate to={routes.loginPage()} />;
};

export default PrivatePage;
