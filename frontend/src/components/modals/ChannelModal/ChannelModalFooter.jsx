import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { useSocket } from '../../../hooks';

const ChannelModalFooter = ({ modalAction, isChannelsLimitWasReached, closeModal, channelId }) => {
  const [btnDisabled, setBtnDisabled] = useState(false);

  const socket = useSocket();
  const removeChannel = () => {
    setBtnDisabled(true);
    socket.removeChannel({ id: channelId }, ({ status }) => {
      if (status === 'ok') {
        closeModal();
      } else {
        console.error(status);
        setBtnDisabled(false);
      }
    });
  };

  const { t } = useTranslation();

  return (
    modalAction !== 'rename' && (
      <>
        {isChannelsLimitWasReached && modalAction === 'add' && (
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              {t(`modals.channel.${modalAction}.cancelButtonText`)}
            </Button>
          </Modal.Footer>
        )}
        {modalAction === 'remove' && (
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              {t(`modals.channel.${modalAction}.cancelButtonText`)}
            </Button>
            <Button variant="danger" onClick={removeChannel} disabled={btnDisabled}>
              {t(`modals.channel.${modalAction}.confirmButtonText`)}
            </Button>
          </Modal.Footer>
        )}
      </>
    )
  );
};

export default ChannelModalFooter;
