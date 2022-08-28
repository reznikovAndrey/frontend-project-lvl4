/* eslint-disable react/prop-types */
import axios from 'axios';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import getValidationSchema from './getValidationSchema';

import { useAuth } from '../../../hooks';
import routes from '../../../routes';
import { UsernameInput, PasswordInput } from '../fields';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const initialValues = { username: '', password: '' };

  const handleSubmit = async (values, { setFieldError }) => {
    try {
      const response = await axios.post(routes.login(), values);
      const { data } = response;
      login(data);
      navigate('/', { replace: true });
    } catch (err) {
      console.error(err);
      setFieldError('auth', 'forms.login.errors.auth');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getValidationSchema()}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {(props) => (
        <Form onSubmit={props.handleSubmit}>
          <h1 className="text-center mb-4">{t('forms.login.title')}</h1>
          <UsernameInput formType="login" />
          <PasswordInput formType="login" />
          <Button variant="outline-primary" type="submit" className="w-100 mb-3" disabled={props.isSubmitting}>
            {t('forms.login.buttonText')}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
