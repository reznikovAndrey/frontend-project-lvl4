import { useFormikContext } from 'formik';
import { React, useRef, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ChannelInput = () => {
  const {
    handleChange,
    values: { channelName },
    errors: { channelName: channelNameErrors },
  } = useFormikContext();

  const input = useRef(null);
  useEffect(() => input.current.focus(), []);

  const { t } = useTranslation();

  return (
    <Form.Group className="mb-3" controlId="channelName">
      <Form.Label visuallyHidden>{t('forms.channel.fields.channelName.label')}</Form.Label>
      <Form.Control
        onChange={handleChange}
        value={channelName}
        aria-label={t('forms.channel.fields.channelName.label')}
        ref={input}
        isInvalid={channelNameErrors}
      />
      <Form.Control.Feedback type="invalid">{t(channelNameErrors, { channelName })}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default ChannelInput;
