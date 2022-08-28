import { useFormikContext } from 'formik';
import { Form, FloatingLabel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const PasswordConfirmInput = () => {
  const {
    handleChange,
    handleBlur,
    values: { passwordConfirm, username },
    errors: { passwordConfirm: passwordConfirmErrors, auth: authError },
  } = useFormikContext();

  const { t } = useTranslation();

  return (
    <FloatingLabel controlId="passwordConfirm" label={t('forms.signup.fields.passwordConfirm.label')} className="mb-4">
      <Form.Control
        onChange={handleChange}
        onBlur={handleBlur}
        value={passwordConfirm}
        isInvalid={passwordConfirmErrors || authError}
        placeholder={t('forms.signup.fields.passwordConfirm.placeholder')}
        type="password"
      />
      <Form.Control.Feedback type="invalid">{t(passwordConfirmErrors)}</Form.Control.Feedback>
      {authError && (
        <Form.Control.Feedback type="invalid" tooltip>
          {t(authError, { username })}
        </Form.Control.Feedback>
      )}
    </FloatingLabel>
  );
};

export default PasswordConfirmInput;
