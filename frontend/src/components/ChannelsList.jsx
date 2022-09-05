import React from 'react';
import { Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import Channel from './Channel';

import { actions } from '../slices/chatsSlice';

const ChannelsList = () => {
  const { channels, currentChannelId } = useSelector(({ chats }) => chats);
  const dispatch = useDispatch();
  const handleSelect = (channelId) => dispatch(actions.changeChannel(+channelId));

  return (
    <Nav
      fill
      variant="pills"
      className="flex-column px-2"
      defaultActiveKey={currentChannelId}
      activeKey={currentChannelId}
      onSelect={handleSelect}
    >
      {channels.map((channelData) => (
        <Channel key={channelData.id} channelData={channelData} />
      ))}
    </Nav>
  );
};

export default ChannelsList;
