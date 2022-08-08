import { useFormik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { useSocket } from '../../hooks';

const ChannelForm = ({ closeModal, targetChannelId }) => {
  const socket = useSocket();
  const { channels } = useSelector((state) => state.chats);
  const targetChannel = channels.find(({ id }) => id === targetChannelId);

  const { t } = useTranslation();

  const [disabled, setDisabled] = useState(false);

  const formik = useFormik({
    initialValues: {
      channelName: targetChannelId ? targetChannel.name : '',
    },
    validationSchema: Yup.object({
      channelName: Yup.string()
        .trim()
        .notOneOf(
          channels.map(({ name }) => name),
          ({ value }) => t('forms.channel.errors.duplicate', { channelName: value }),
        )
        .required(t('forms.channel.errors.required')),
    }),
    validateOnChange: false,
    onSubmit: async ({ channelName }) => {
      setDisabled(true);

      const responseHandler = ({ status }) => {
        if (status === 'ok') {
          closeModal();
        } else {
          console.error(status);
          setDisabled(false);
        }
      };

      if (targetChannelId) {
        socket.renameChannel({ id: targetChannelId, name: channelName }, responseHandler);
      } else {
        socket.newChannel({ name: channelName }, responseHandler);
      }
    },
  });

  const input = useRef(null);
  useEffect(() => input.current.focus(), []);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          id="channelName"
          onChange={formik.handleChange}
          value={formik.values.channelName}
          aria-label={t('forms.channel.fields.channelName.label')}
          ref={input}
          isInvalid={formik.errors.channelName}
        />
        <Form.Control.Feedback type="invalid">{formik.errors.channelName}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="d-flex justify-content-end">
        <Button variant="secondary" onClick={closeModal} className="me-2">
          {t('forms.channel.cancelButtonText')}
        </Button>
        <Button variant="primary" type="submit" disabled={disabled}>
          {t('forms.channel.confirmButtonText')}
        </Button>
      </Form.Group>
    </Form>
  );
};

export default ChannelForm;
