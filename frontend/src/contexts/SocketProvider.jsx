import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import SocketContext from './SocketContext';

import { actions } from '../slices/chatsSlice';

const SocketProvider = ({ children, socket }) => {
  const dispatch = useDispatch();

  socket.on('newMessage', (payload) => dispatch(actions.addMessage(payload)));

  const mapping = useMemo(() => ({
    newMessage: (payload, response) => socket.emit('newMessage', payload, response),
  }));

  return <SocketContext.Provider value={mapping}>{children}</SocketContext.Provider>;
};

export default SocketProvider;
