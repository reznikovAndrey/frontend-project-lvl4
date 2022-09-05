import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MessagesTitle = ({ name, messagesQuantity }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0">
        <b>
          #
          {' '}
          {name}
        </b>
      </p>
      <span className="text-muted">
        {messagesQuantity}
        {' '}
        {t('pages.home.message', { count: messagesQuantity })}
      </span>
    </div>
  );
};

MessagesTitle.propTypes = {
  name: PropTypes.string.isRequired,
  messagesQuantity: PropTypes.number.isRequired,
};

export default MessagesTitle;
