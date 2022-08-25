import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { ChannelForm } from './forms';

import { useSocket } from '../hooks';
import { actions } from '../slices/modalsSlice';
import { MAX_CHANNELS_QUANTITY } from '../utils/constants';

const ChannelModal = () => {
  const dispatch = useDispatch();
  const {
    modals: { isShown, modalAction, channelId },
    chats: { channels },
  } = useSelector((state) => state);

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
  const channelsLimitWasReached = channels.length >= MAX_CHANNELS_QUANTITY;

  const renderModalBody = () => {
    switch (modalAction) {
      case 'add':
        return channelsLimitWasReached ? (
          <p>{t(`modals.channel.${modalAction}.body`)}</p>
        ) : (
          <ChannelForm closeModal={closeModal} />
        );
      case 'remove':
        return <p>{t(`modals.channel.${modalAction}.body`)}</p>;
      case 'rename':
        return <ChannelForm closeModal={closeModal} />;
      default:
        return null;
    }
  };

  const renderModalFooter = () => {
    switch (modalAction) {
      case 'add':
        return (
          channelsLimitWasReached && (
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                {t(`modals.channel.${modalAction}.cancelButtonText`)}
              </Button>
            </Modal.Footer>
          )
        );
      case 'remove':
        return (
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              {t(`modals.channel.${modalAction}.cancelButtonText`)}
            </Button>
            <Button variant="danger" onClick={removeChannel} disabled={disabled}>
              {t(`modals.channel.${modalAction}.confirmButtonText`)}
            </Button>
          </Modal.Footer>
        );
      default:
        return null;
    }
  };

  if (!modalAction) {
    return null;
  }

  return (
    <Modal show={isShown} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t(`modals.channel.${modalAction}.title`)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderModalBody()}</Modal.Body>
      {renderModalFooter()}
    </Modal>
  );
};

export default ChannelModal;
