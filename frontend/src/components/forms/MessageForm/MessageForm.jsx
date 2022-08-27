import { Formik } from 'formik';
import { Form, InputGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import getValidationSchema from './getValidationSchema';
import MessageInput from './MessageInput';

import { useSocket, useAuth } from '../../../hooks';
import { AddMessageButton } from '../../buttons';

const MessageForm = () => {
  const socket = useSocket();
  const { getUsername } = useAuth();
  const { currentChannelId } = useSelector((state) => state.chats);

  const initialValues = { message: '' };

  const handleSubmit = ({ message }, { resetForm }) => {
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
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={getValidationSchema()}>
      {(props) => (
        <Form onSubmit={props.handleSubmit} className="py-1 border rounded-2">
          <InputGroup>
            <MessageInput currentChannelId={currentChannelId} />
            <AddMessageButton isDisabled={props.errors.message} />
          </InputGroup>
        </Form>
      )}
    </Formik>
  );
};

export default MessageForm;