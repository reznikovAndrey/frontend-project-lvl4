import { useState, useMemo, createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
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

  const getUsername = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) {
      return null;
    }

    const { username } = userData;
    return username;
  };

  const memoizedValue = useMemo(
    () => ({
      loggedIn,
      login,
      logout,
      getAuthHeader,
      getUsername,
    }),
    [loggedIn],
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
};
