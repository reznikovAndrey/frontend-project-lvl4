import { useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SocketContext from './SocketContext';

import { actions } from '../slices/chatsSlice';

const SocketProvider = ({ children, socket }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('newMessage', (payload) => dispatch(actions.addMessage(payload)));
    socket.on('newChannel', (payload) => dispatch(actions.addChannel(payload)));
    socket.on('renameChannel', (payload) => dispatch(actions.renameChannel(payload)));

    return () => {
      socket.off('newMessage');
      socket.off('newChannel');
      socket.off('renameChannel');
    };
  }, []);

  const mapping = useMemo(
    () => ({
      newMessage: (payload, response) => socket.emit('newMessage', payload, response),
      newChannel: (payload, response) => socket.emit('newChannel', payload, response),
      renameChannel: (payload, response) => socket.emit('renameChannel', payload, response),
    }),
    [],
  );

  return <SocketContext.Provider value={mapping}>{children}</SocketContext.Provider>;
};

export default SocketProvider;
