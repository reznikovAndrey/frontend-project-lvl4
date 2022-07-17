import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../../hooks';

const PrivatePage = ({ children }) => {
  const { loggedIn } = useAuth();
  return loggedIn ? children : <Navigate to="login" />;
};

PrivatePage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivatePage;
