import PropTypes from 'prop-types';
import { useMemo, useEffect, createContext } from 'react';
import { useDispatch } from 'react-redux';
import { Socket } from 'socket.io-client';

import { actions } from '../slices/chatsSlice';

export const SocketContext = createContext({});

export const SocketProvider = ({ children, socket }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('newMessage', (payload) => dispatch(actions.addMessage(payload)));
    socket.on('newChannel', (payload) => dispatch(actions.addChannel(payload)));
    socket.on('renameChannel', (payload) => dispatch(actions.renameChannel(payload)));
    socket.on('removeChannel', (payload) => dispatch(actions.removeChannel(payload)));

    return () => {
      socket.off('newMessage');
      socket.off('newChannel');
      socket.off('renameChannel');
      socket.off('removeChannel');
    };
  }, []);

  const mapping = useMemo(
    () => ({
      newMessage: (payload, response) => socket.emit('newMessage', payload, response),
      newChannel: (payload, response) => socket.emit('newChannel', payload, response),
      renameChannel: (payload, response) => socket.emit('renameChannel', payload, response),
      removeChannel: (payload, response) => socket.emit('removeChannel', payload, response),
    }),
    [],
  );

  return <SocketContext.Provider value={mapping}>{children}</SocketContext.Provider>;
};

SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
  socket: PropTypes.instanceOf(Socket).isRequired,
};
