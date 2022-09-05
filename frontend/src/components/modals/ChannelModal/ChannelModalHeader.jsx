import PropTypes from 'prop-types';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ChannelModalHeader = ({ modalAction }) => {
  const { t } = useTranslation();

  return (
    <Modal.Header closeButton>
      <Modal.Title>{t(`modals.channel.${modalAction}.title`)}</Modal.Title>
    </Modal.Header>
  );
};

ChannelModalHeader.propTypes = {
  modalAction: PropTypes.oneOf(['add', 'rename', 'remove']).isRequired,
};

export default ChannelModalHeader;
