import { useFormikContext } from 'formik';
import { useRef, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const MessageInput = ({ currentChannelId }) => {
  const {
    handleChange,
    values: { message },
    validateForm,
  } = useFormikContext();

  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
    validateForm();
  }, [currentChannelId]);

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

export default MessageInput;
