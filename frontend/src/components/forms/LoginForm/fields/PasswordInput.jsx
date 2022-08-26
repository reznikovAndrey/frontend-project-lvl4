import { useFormikContext } from 'formik';
import { Form, FloatingLabel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const PasswordInput = () => {
  const {
    handleChange,
    handleBlur,
    values: { password },
    touched: { password: touchedPassword },
    errors: { password: passwordErrors, auth: authError },
  } = useFormikContext();

  const { t } = useTranslation();

  return (
    <FloatingLabel controlId="password" label={t('forms.login.fields.password.label')} className="mb-4">
      <Form.Control
        onChange={handleChange}
        onBlur={handleBlur}
        value={password}
        isInvalid={(touchedPassword && passwordErrors) || authError}
        placeholder={t('forms.login.fields.password.placeholder')}
        type="password"
      />
      <Form.Control.Feedback type="invalid">{t(passwordErrors)}</Form.Control.Feedback>
      {authError && (
        <Form.Control.Feedback type="invalid" tooltip>
          {t(authError)}
        </Form.Control.Feedback>
      )}
    </FloatingLabel>
  );
};

export default PasswordInput;
