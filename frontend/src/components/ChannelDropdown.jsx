import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const ChannelDropdown = ({ channelId }) => {
  const { currentChannelId } = useSelector(({ chats }) => chats);
  const { t } = useTranslation();

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant={channelId === currentChannelId ? 'secondary' : 'light'}
        className="rounded-0 h-100 border-0"
        style={{ marginLeft: -1 }}
      />
      <Dropdown.Menu>
        <Dropdown.Item>{t('homepage.rename')}</Dropdown.Item>
        <Dropdown.Item>{t('homepage.remove')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ChannelDropdown;
