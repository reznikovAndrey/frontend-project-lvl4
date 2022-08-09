import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { ChannelForm } from './forms';

import { actions } from '../slices/modalsSlice';

const ChannelModal = () => {
  const dispatch = useDispatch();
  const { isShown, modalAction, channelId } = useSelector(({ modals }) => modals);
  const closeModal = () => dispatch(actions.closeModal());

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
        <ChannelForm closeModal={closeModal} channelId={channelId} />
      </Modal.Body>
    </Modal>
  );
};

export default ChannelModal;
