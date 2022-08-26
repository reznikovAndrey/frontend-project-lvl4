import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { MessageForm } from './forms';
import Message from './Message';
import MessagesTitle from './MessagesTitle';

const Messages = () => {
  const { channels, currentChannelId, messages } = useSelector(({ chats }) => chats);

  const { name = '' } = channels.find(({ id }) => id === currentChannelId) || {};
  const channelMessages = messages.filter(({ channelId }) => channelId === currentChannelId);

  return (
    <Col xs={8} md={9} lg={10} className="p-0 h-100">
      <div className="d-flex flex-column h-100">
        <MessagesTitle name={name} messagesQuantity={channelMessages.length} />
        <div className="overflow-auto px-5">
          {channelMessages.map((message) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Message key={message.id} {...message} />
          ))}
        </div>
        <div className="mt-auto px-4 py-3">
          <MessageForm />
        </div>
      </div>
    </Col>
  );
};

export default Messages;
