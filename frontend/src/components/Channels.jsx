import { useState } from 'react';
import { Col, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { AddChannelButton } from './buttons';
import { AddChannelModal } from './modals';

import { actions } from '../slices/chatsSlice';

const Channels = () => {
  const { channels, currentChannelId } = useSelector(({ chats }) => chats);
  const dispatch = useDispatch();

  const changeChannelHandler = (id) => dispatch(actions.changeChannel(id));

  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const { t } = useTranslation();

  return (
    <Col md={2} className="border-end pt-5 px-0 bg-light">
      <div className="d-flex justify-content-between align-items-center mb-2 ps-4 pe-2">
        <span>{t('homepage.channels')}</span>
        <AddChannelButton handleClick={showModal} />
        <AddChannelModal show={show} handleClose={closeModal} />
      </div>
      <Nav
        fill
        variant="pills"
        className="flex-column"
        defaultActiveKey={currentChannelId}
        activeKey={currentChannelId}
        onSelect={(selectedKey) => changeChannelHandler(+selectedKey)}
      >
        {channels.map(({ id, name }) => (
          <Nav.Item key={id}>
            <Nav.Link eventKey={id} as="button" className="rounded-0 text-start">
              # {name}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Col>
  );
};

export default Channels;
