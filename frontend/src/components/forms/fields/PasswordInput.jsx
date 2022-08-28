import { useFormikContext } from 'formik';
import { Form, FloatingLabel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const PasswordInput = ({ formType }) => {
  const {
    handleChange,
    handleBlur,
    values: { password },
    errors: { password: passwordErrors, auth: authError },
  } = useFormikContext();

  const { t } = useTranslation();

  return (
    <FloatingLabel controlId="password" label={t(`forms.${formType}.fields.password.label`)} className="mb-4">
      <Form.Control
        onChange={handleChange}
        onBlur={handleBlur}
        value={password}
        isInvalid={passwordErrors || authError}
        placeholder={t(`forms.${formType}.fields.password.placeholder`)}
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
