import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { ChannelForm } from '../../forms';

const ChannelModalBody = ({ modalAction, isChannelsLimitWasReached, closeModal }) => {
  const { t } = useTranslation();

  return (
    <Modal.Body>
      {modalAction === 'add' &&
        (isChannelsLimitWasReached ? (
          <p>{t(`modals.channel.${modalAction}.body`)}</p>
        ) : (
          <ChannelForm closeModal={closeModal} />
        ))}
      {modalAction === 'remove' && <p>{t(`modals.channel.${modalAction}.body`)}</p>}
      {modalAction === 'rename' && <ChannelForm closeModal={closeModal} />}
    </Modal.Body>
  );
};

ChannelModalBody.propTypes = {
  modalAction: PropTypes.oneOf(['add', 'rename', 'remove']).isRequired,
  isChannelsLimitWasReached: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ChannelModalBody;
