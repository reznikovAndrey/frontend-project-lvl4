import { useFormikContext } from 'formik';
import { Form, FloatingLabel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const PasswordConfirmInput = () => {
  const {
    handleChange,
    handleBlur,
    values: { passwordConfirm },
    errors: { passwordConfirm: passwordConfirmErrors },
  } = useFormikContext();

  const { t } = useTranslation();

  return (
    <FloatingLabel controlId="passwordConfirm" label={t('forms.signup.fields.passwordConfirm.label')} className="mb-4">
      <Form.Control
        onChange={handleChange}
        onBlur={handleBlur}
        value={passwordConfirm}
        isInvalid={passwordConfirmErrors}
        placeholder={t('forms.signup.fields.passwordConfirm.placeholder')}
        type="password"
      />
      <Form.Control.Feedback type="invalid">{t(passwordConfirmErrors)}</Form.Control.Feedback>
    </FloatingLabel>
  );
};

export default PasswordConfirmInput;
