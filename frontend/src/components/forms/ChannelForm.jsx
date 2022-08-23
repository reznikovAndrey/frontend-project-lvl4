import { useFormik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { useSocket } from '../../hooks';

const ChannelForm = ({ closeModal }) => {
  const socket = useSocket();

  const {
    chats: { channels },
    modals: { channelId, modalAction },
  } = useSelector((state) => state);
  const targetChannel = channels.find(({ id }) => id === channelId);

  const { t } = useTranslation();

  const [disabled, setDisabled] = useState(false);

  const formik = useFormik({
    initialValues: {
      channelName: channelId ? targetChannel.name : '',
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

      switch (modalAction) {
        case 'add':
          socket.newChannel({ name: channelName }, responseHandler);
          break;
        case 'rename':
          socket.renameChannel({ id: channelId, name: channelName }, responseHandler);
          break;
        default:
          throw new Error('Unknown modal action:', modalAction);
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
