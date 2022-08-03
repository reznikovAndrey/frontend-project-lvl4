import { useState } from 'react';
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import AddChannelButton from './AddChannelButton';
import Channel from './Channel';

const Channels = ({ channels, activeChannelId }) => {
  const [currentActiveChannel, setCurrentActiveChannel] = useState(activeChannelId);

  const clickHandler = (id) => () => setCurrentActiveChannel(id);

  const { t } = useTranslation();

  return (
    <Col md={2} className="border-end pt-5 px-0 bg-light">
      <div className="d-flex justify-content-between align-items-center mb-2 ps-4 pe-2">
        <span>{t('homepage.channels')}</span>
        <AddChannelButton />
      </div>
      <ul className="nav flex-column nav-pills nav-fill px-2">
        {channels.map(({ id, name }) => (
          <Channel key={id} name={name} clickHandler={clickHandler(id)} isActive={id === currentActiveChannel} />
        ))}
      </ul>
    </Col>
  );
};

export default Channels;
