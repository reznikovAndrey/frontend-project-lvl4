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

export default ChannelModalHeader;
