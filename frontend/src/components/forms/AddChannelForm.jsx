import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { useSocket } from '../../hooks';

const AddChannelForm = ({ closeModal }) => {
  const socket = useSocket();
  const { channels } = useSelector((state) => state.chats);

  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      channelName: '',
    },
    validationSchema: Yup.object({
      channelName: Yup.string()
        .trim()
        .notOneOf(
          channels.map(({ name }) => name),
          ({ value }) => t('forms.addChannel.errors.duplicate', { channelName: value }),
        )
        .required(t('forms.addChannel.errors.required')),
    }),
    validateOnChange: false,
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

  return (
    <Form onSubmit={formik.handleSubmit} id="addChannelForm">
      <InputGroup>
        <Form.Control
          id="channelName"
          onChange={formik.handleChange}
          value={formik.values.channelName}
          aria-label={t('forms.addChannel.fields.channelName.label')}
          ref={input}
          isInvalid={formik.errors.channelName}
        />
        <Form.Control.Feedback type="invalid">{formik.errors.channelName}</Form.Control.Feedback>
      </InputGroup>
    </Form>
  );
};

export default AddChannelForm;
