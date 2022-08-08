import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import ChannelModal from './ChannelModal';

const ChannelDropdown = ({ channelId }) => {
  const { currentChannelId } = useSelector(({ chats }) => chats);
  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const [targetChannelId, setTargetChannelId] = useState(null);

  return (
    <Dropdown
      onSelect={(id) => {
        setTargetChannelId(+id);
        showModal();
      }}
    >
      <Dropdown.Toggle
        variant={channelId === currentChannelId ? 'secondary' : 'light'}
        className="rounded-0 h-100 border-0"
        style={{ marginLeft: -1 }}
      />
      <Dropdown.Menu>
        <Dropdown.Item eventKey={channelId} active={false}>
          {t('homepage.rename')}
        </Dropdown.Item>
        <Dropdown.Item eventKey={channelId} active={false}>
          {t('homepage.remove')}
        </Dropdown.Item>
        <ChannelModal handleClose={closeModal} show={show} action="rename" targetChannelId={targetChannelId} />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ChannelDropdown;
