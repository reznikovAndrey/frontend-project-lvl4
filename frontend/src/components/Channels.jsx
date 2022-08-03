import { Col, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { AddChannelButton } from './buttons';
import Channel from './Channel';

import { actions } from '../slices/chatsSlice';

const Channels = () => {
  const { channels, currentChannelId } = useSelector(({ chats }) => chats);
  const dispatch = useDispatch();

  const changeChannelHandler = (id) => () => dispatch(actions.changeChannel(id));

  const { t } = useTranslation();

  return (
    <Col md={2} className="border-end pt-5 px-0 bg-light">
      <div className="d-flex justify-content-between align-items-center mb-2 ps-4 pe-2">
        <span>{t('homepage.channels')}</span>
        <AddChannelButton />
      </div>
      <Nav fill variant="pills" defaultActiveKey={currentChannelId} className="flex-column">
        {channels.map(({ id, name }) => (
          <Channel
            key={id}
            clickHandler={changeChannelHandler(id)}
            isActive={id === currentChannelId}
            {...{ id, name }}
          />
        ))}
      </Nav>
    </Col>
  );
};

export default Channels;
