import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import { React, useRef, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const MessageInput = ({ currentChannelId = null }) => {
  const {
    handleChange,
    values: { message },
    validateForm,
  } = useFormikContext();

  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
    validateForm();
  }, [currentChannelId, validateForm]);

  useEffect(() => {
    validateForm();
  }, [message, validateForm]);

  const { t } = useTranslation();

  return (
    <Form.Control
      id="message"
      className="border-0 p-0 ps-2"
      placeholder={t('forms.addMessage.fields.message.placeholder')}
      aria-label={t('forms.addMessage.fields.message.label')}
      value={message}
      onChange={handleChange}
      ref={input}
    />
  );
};

MessageInput.propTypes = {
  currentChannelId: PropTypes.number,
};

export default MessageInput;
