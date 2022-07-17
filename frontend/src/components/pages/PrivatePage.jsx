import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../hooks';

const PrivatePage = () => {
  const { loggedIn } = useAuth();
  return loggedIn ? <Outlet /> : <Navigate to="login" />;
};

export default PrivatePage;
