import PropTypes from 'prop-types';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../slices/modalsSlice';

const ChannelDropdown = ({ channelId }) => {
  const dispatch = useDispatch();
  const { currentChannelId } = useSelector(({ chats }) => chats);
  const handleSelect = (modalAction, e) => {
    e.stopPropagation();
    dispatch(actions.showModal({ channelId, modalAction }));
  };

  const { t } = useTranslation();

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle
        variant={channelId === currentChannelId ? 'secondary' : 'light'}
        className="rounded-0 h-100 border-0"
        style={{ marginLeft: -1 }}
      >
        <span className="visually-hidden">{t('pages.home.dropdown')}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="rename">{t('pages.home.rename')}</Dropdown.Item>
        <Dropdown.Item eventKey="remove">{t('pages.home.remove')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

ChannelDropdown.propTypes = {
  channelId: PropTypes.number.isRequired,
};

export default ChannelDropdown;
