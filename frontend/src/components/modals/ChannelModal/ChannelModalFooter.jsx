import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { useSocket } from '../../../hooks';

const ChannelModalFooter = ({
  modalAction, isChannelsLimitWasReached, closeModal, channelId = null,
}) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const { t } = useTranslation();

  const socket = useSocket();
  const removeChannel = () => {
    setBtnDisabled(true);
    socket.removeChannel({ id: channelId }, ({ status }) => {
      if (status === 'ok') {
        toast(t(`notifications.success.channel.${modalAction}`), { type: 'success' });
        closeModal();
      } else {
        console.error(status);
        setBtnDisabled(false);
      }
    });
  };

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

ChannelModalFooter.propTypes = {
  modalAction: PropTypes.oneOf(['add', 'rename', 'remove']).isRequired,
  isChannelsLimitWasReached: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  channelId: PropTypes.number,
};

export default ChannelModalFooter;
