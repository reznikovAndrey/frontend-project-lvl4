import { useState, useMemo } from 'react';

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

  const getAuthHeader = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) {
      return {};
    }

    const { token } = userData;
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  const memoizedValue = useMemo(() => ({
    loggedIn, login, logout, getAuthHeader,
  }), [loggedIn]);

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
