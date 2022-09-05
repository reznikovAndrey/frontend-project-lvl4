/* eslint-disable react/prop-types */
import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
      if (axios.isAxiosError(err) && err.response.data?.statusCode === 401) {
        setFieldError('auth', 'forms.login.errors.auth');
      } else {
        console.error(err);
        toast(t('notifications.errors.network'), { type: 'error' });
      }
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
