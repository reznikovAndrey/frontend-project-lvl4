import { useState } from 'react';
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { AddChannelButton } from './buttons';
import ChannelModal from './ChannelModal';
import ChannelsList from './ChannelsList';

const Channels = () => {
  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const { t } = useTranslation();

  return (
    <Col md={2} className="border-end pt-5 px-0 bg-light">
      <div className="d-flex justify-content-between align-items-center mb-2 ps-4 pe-2">
        <span>{t('homepage.channels')}</span>
        <AddChannelButton handleClick={showModal} />
        <ChannelModal show={show} handleClose={closeModal} action="add" />
      </div>
      <ChannelsList />
    </Col>
  );
};

export default Channels;
