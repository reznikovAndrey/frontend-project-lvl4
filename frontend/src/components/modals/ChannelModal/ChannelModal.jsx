import { React, useCallback } from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import ChannelModalBody from './ChannelModalBody';
import ChannelModalFooter from './ChannelModalFooter';
import ChannelModalHeader from './ChannelModalHeader';

import { actions } from '../../../slices/modalsSlice';
import { MAX_CHANNELS_QUANTITY } from '../../../utils/constants';

const ChannelModal = () => {
  const {
    modals: { isShown, modalAction, channelId },
    chats: { channels },
  } = useSelector((state) => state);

  const isChannelsLimitWasReached = channels.length > MAX_CHANNELS_QUANTITY;

  const dispatch = useDispatch();
  const closeModal = useCallback(() => dispatch(actions.closeModal()), [dispatch]);

  return (
    isShown && (
      <Modal show={isShown} onHide={closeModal} centered>
        <ChannelModalHeader modalAction={modalAction} />
        <ChannelModalBody
          modalAction={modalAction}
          isChannelsLimitWasReached={isChannelsLimitWasReached}
          closeModal={closeModal}
        />
        <ChannelModalFooter
          modalAction={modalAction}
          isChannelsLimitWasReached={isChannelsLimitWasReached}
          closeModal={closeModal}
          channelId={channelId}
        />
      </Modal>
    )
  );
};

export default ChannelModal;
