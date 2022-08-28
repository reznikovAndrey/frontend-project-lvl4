import axios from 'axios';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import getValidationSchema from './getValidationSchema';

import { useAuth } from '../../../hooks';
import routes from '../../../routes';
import { PasswordConfirmInput, PasswordInput, UsernameInput } from '../fields';

const SignupForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const initialValues = {
    username: '',
    password: '',
    passwordConfirm: '',
  };

  const handleSubmit = async (values, { setFieldError }) => {
    try {
      const response = await axios.post(routes.signup(), values);
      const { data } = response;
      login(data);
      navigate('/', { replace: true });
    } catch (err) {
      const { statusCode } = err.response.data;
      if (statusCode === 409) {
        setFieldError('auth', 'forms.signup.errors.auth');
      } else {
        console.error(err);
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getValidationSchema()}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form noValidate onSubmit={props.handleSubmit}>
          <h1 className="text-center mb-4">{t('forms.signup.title')}</h1>
          <UsernameInput formType="signup" />
          <PasswordInput formType="signup" />
          <PasswordConfirmInput />
          <Button variant="outline-primary" type="submit" className="w-100 mb-3" disabled={props.isSubmitting}>
            {t('forms.signup.buttonText')}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
