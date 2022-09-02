import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import getValidationSchema from './getValidationSchema';

import { useSocket } from '../../../hooks';
import { actions } from '../../../slices/chatsSlice';
import { ChannelInput } from '../fields';

const ChannelForm = ({ closeModal }) => {
  const socket = useSocket();
  const { t } = useTranslation();

  const {
    chats: { channels },
    modals: { channelId, modalAction },
  } = useSelector((state) => state);
  const targetChannel = channels.find(({ id }) => id === channelId);

  const dispatch = useDispatch();
  const handleAcknowledgements = ({ status, data }) => {
    if (status === 'ok') {
      if (modalAction === 'add') {
        const { id } = data;
        dispatch(actions.changeChannel(id));
      }
      toast(t(`notifications.success.channel.${modalAction}`), { type: 'success' });
      closeModal();
    } else {
      console.error(status);
    }
  };

  const handleSubmit = async ({ channelName }) => {
    switch (modalAction) {
      case 'add':
        socket.newChannel({ name: channelName }, handleAcknowledgements);
        break;
      case 'rename':
        socket.renameChannel({ id: channelId, name: channelName }, handleAcknowledgements);
        break;
      default:
        console.error('No implementation for ChannelForm with such modalAction:', modalAction);
    }
  };

  return (
    <Formik
      initialValues={{ channelName: channelId ? targetChannel.name : '' }}
      validationSchema={getValidationSchema(channels, t)}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      {(props) => (
        // eslint-disable-next-line react/prop-types
        <Form noValidate onSubmit={props.handleSubmit}>
          <ChannelInput />
          <Form.Group className="d-flex justify-content-end">
            <Button variant="secondary" onClick={closeModal} className="me-2">
              {t('forms.channel.cancelButtonText')}
            </Button>
            {/* eslint-disable-next-line react/prop-types */}
            <Button variant="primary" type="submit" disabled={props.isSubmitting}>
              {t('forms.channel.confirmButtonText')}
            </Button>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
};

ChannelForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ChannelForm;
