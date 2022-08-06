import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { AddChannelForm } from '../forms';

const AddChannelModal = ({ show, handleClose }) => {
  const { t } = useTranslation();
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.addChannel.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddChannelForm closeModal={handleClose} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {t('modals.addChannel.cancelButtonText')}
        </Button>
        <Button variant="primary" type="submit" form="addChannelForm">
          {t('modals.addChannel.addButtonText')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddChannelModal;
