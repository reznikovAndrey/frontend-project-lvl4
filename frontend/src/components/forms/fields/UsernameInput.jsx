import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import { React, useRef, useEffect } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const UsernameInput = ({ formType }) => {
  const {
    handleChange,
    handleBlur,
    values: { username },
    errors: { username: usernameErrors, auth: authError },
  } = useFormikContext();

  const inputUsernameEl = useRef(null);
  useEffect(() => inputUsernameEl.current.focus(), []);

  const { t } = useTranslation();

  return (
    <FloatingLabel controlId="username" label={t(`forms.${formType}.fields.username.label`)} className="mb-3">
      <Form.Control
        onChange={handleChange}
        onBlur={handleBlur}
        value={username}
        ref={inputUsernameEl}
        isInvalid={usernameErrors || authError}
        placeholder={t(`forms.${formType}.fields.username.placeholder`)}
      />
      <Form.Control.Feedback type="invalid">{t(usernameErrors)}</Form.Control.Feedback>
    </FloatingLabel>
  );
};

UsernameInput.propTypes = {
  formType: PropTypes.oneOf(['login', 'signup']).isRequired,
};

export default UsernameInput;
