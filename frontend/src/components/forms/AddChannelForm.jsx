import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { useSocket } from '../../hooks';

const AddChannelForm = ({ closeModal }) => {
  const socket = useSocket();

  const formik = useFormik({
    initialValues: {
      channelName: '',
    },
    onSubmit: async ({ channelName }) => {
      socket.newChannel({ name: channelName }, ({ status }) => {
        if (status === 'ok') {
          closeModal();
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
    <Form onSubmit={formik.handleSubmit} id="addChannelForm">
      <InputGroup>
        <Form.Control
          id="channelName"
          onChange={formik.handleChange}
          value={formik.values.channelName}
          aria-label={t('forms.addChannel.fields.channelName.label')}
          ref={input}
        />
      </InputGroup>
    </Form>
  );
};

export default AddChannelForm;
