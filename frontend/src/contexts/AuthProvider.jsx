import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const isLoggedIn = localStorage.getItem('user');
  const [loggedIn, setLoggedIn] = useState(!!isLoggedIn);

  const login = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
  };

  const memoizedValue = useMemo(() => ({ loggedIn, login, logout }), [loggedIn]);

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
