import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../AuthContext';

const Private = ({ children }) => {
  const { loggedIn } = useContext(AuthContext);
  return loggedIn ? children : <Navigate to="login" />;
};

Private.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Private;
