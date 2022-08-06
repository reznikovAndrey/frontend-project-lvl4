import { useFormik } from 'formik';
import { useRef, useEffect } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useSocket, useAuth } from '../../hooks';
import { AddMessageButton } from '../buttons';

const AddMessageForm = () => {
  const socket = useSocket();

  const { getUsername } = useAuth();

  const { currentChannelId } = useSelector((state) => state.chats);

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: async ({ message }, { resetForm }) => {
      const payload = {
        body: message,
        channelId: currentChannelId,
        username: getUsername(),
      };

      socket.newMessage(payload, ({ status }) => {
        if (status === 'ok') {
          resetForm();
        } else {
          console.error(status);
        }
      });
    },
  });

  const input = useRef(null);
  useEffect(() => input.current.focus(), []);

  const { t } = useTranslation();

  return (
    <Form onSubmit={formik.handleSubmit} className="py-1 border rounded-2">
      <InputGroup>
        <Form.Control
          id="message"
          className="border-0 p-0 ps-2"
          placeholder={t('forms.addMessage.fields.message.placeholder')}
          aria-label={t('forms.addMessage.fields.message.label')}
          value={formik.values.message}
          onChange={formik.handleChange}
          ref={input}
        />
        <AddMessageButton isDisabled={formik.values.message.length === 0} />
      </InputGroup>
    </Form>
  );
};

export default AddMessageForm;
