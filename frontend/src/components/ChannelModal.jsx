import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { ChannelForm } from './forms';

import { useSocket } from '../hooks';
import { actions } from '../slices/modalsSlice';

const ChannelModal = () => {
  const dispatch = useDispatch();
  const { isShown, modalAction, channelId } = useSelector(({ modals }) => modals);

  const [disabled, setDisabled] = useState(false);

  const closeModal = () => {
    setDisabled(false);
    dispatch(actions.closeModal());
  };

  const socket = useSocket();
  const removeChannel = () => {
    setDisabled(true);
    socket.removeChannel({ id: channelId }, ({ status }) => {
      if (status === 'ok') {
        closeModal();
      } else {
        console.error(status);
        setDisabled(false);
      }
    });
  };

  const { t } = useTranslation();

  if (!modalAction) {
    return null;
  }

  return (
    <Modal show={isShown} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t(`modals.channel.${modalAction}.title`)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalAction === 'remove' ? (
          <p>{t(`modals.channel.${modalAction}.body`)}</p>
        ) : (
          <ChannelForm closeModal={closeModal} />
        )}
      </Modal.Body>
      {modalAction === 'remove' && (
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            {t(`modals.channel.${modalAction}.cancelButtonText`)}
          </Button>
          <Button variant="danger" onClick={removeChannel} disabled={disabled}>
            {t(`modals.channel.${modalAction}.confirmButtonText`)}
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default ChannelModal;
