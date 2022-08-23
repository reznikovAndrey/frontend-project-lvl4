import { useContext } from 'react';

import { SocketContext } from '../contexts';

export default () => {
  const value = useContext(SocketContext);

  if (!value) {
    throw new Error('useSocket should be used within SocketProvider');
  }

  return value;
};
