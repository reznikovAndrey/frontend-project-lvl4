import { useContext } from 'react';

import { AuthContext } from '../contexts';

export default () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error('useAuth should be used within AuthProvider');
  }

  return value;
};
