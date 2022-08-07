import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { ChannelForm } from './forms';

const ChannelModal = ({ show, handleClose }) => {
  const { t } = useTranslation();
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.channel.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ChannelForm closeModal={handleClose} />
      </Modal.Body>
    </Modal>
  );
};

export default ChannelModal;
