import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { ChannelForm } from './forms';

const ChannelModal = ({ show, handleClose, action, targetChannelId }) => {
  const { t } = useTranslation();

  if (!action) {
    return null;
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t(`modals.channel.${action}.title`)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ChannelForm closeModal={handleClose} targetChannelId={targetChannelId} />
      </Modal.Body>
    </Modal>
  );
};

export default ChannelModal;
