import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { AddChannelButton } from './buttons';
import ChannelModal from './ChannelModal';
import ChannelsList from './ChannelsList';

const Channels = () => {
  const { t } = useTranslation();
  return (
    <Col xs={4} md={3} lg={2} className="border-end pt-5 px-0 bg-light">
      <div className="d-flex justify-content-between align-items-center mb-2 ps-4 pe-2">
        <span>{t('pages.home.channels')}</span>
        <AddChannelButton />
      </div>
      <ChannelsList />
      <ChannelModal />
    </Col>
  );
};

export default Channels;
