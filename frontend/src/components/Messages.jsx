import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Messages = () => {
  const { channels, currentChannelId, messages } = useSelector(({ chats }) => chats);

  const { name = '' } = channels.find(({ id }) => id === currentChannelId) || {};
  const channelMessages = messages.filter(({ channelId }) => channelId === currentChannelId);

  const { t } = useTranslation();

  return (
    <Col className="p-0 h-100">
      <div className="d-flex flex-column h-100">
        <div className="bg-light mb-4 p-3 shadow-sm small">
          <p className="m-0">
            <b># {name}</b>
          </p>
          <span className="text-muted">
            {channelMessages.length} {t('homepage.message', { count: channelMessages.length })}
          </span>
        </div>
        <div className="overflow-auto px-5">
          {channelMessages.map(({ id, body, username }) => (
            <div className="text-break mb-2" key={id}>
              <b>{username}</b>: {body}
            </div>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default Messages;
