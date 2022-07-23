import axios from 'axios';
import { useFormik } from 'formik';
import { useRef, useEffect, useState } from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { useAuth } from '../hooks';
import routes from '../routes';

const regexp = /^\w+$/;

const LoginForm = () => {
  const { t } = useTranslation();

  const inputUsernameEl = useRef(null);
  useEffect(() => inputUsernameEl.current.focus(), []);

  const [authError, setAuthError] = useState(false);
  const { login, loggedIn } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(regexp, t('forms.login.fields.username.error'))
        .required(t('forms.login.errors.required')),
      password: Yup.string().required(t('forms.login.errors.required')),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(routes.login(), values);
        const { data } = response;
        login(data);
        navigate('/', { replace: true });
      } catch (err) {
        const { statusCode } = err.response.data;
        if (statusCode === 404) {
          throw new Error('Network error');
        }
        setAuthError(true);
      }
    },
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <h1 className="text-center mb-4">{t('forms.login.title')}</h1>
      <fieldset disabled={loggedIn}>
        <FloatingLabel controlId="username" label={t('forms.login.fields.username.label')} className="mb-3">
          <Form.Control
            placeholder={t('forms.login.fields.username.placeholder')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            ref={inputUsernameEl}
            isInvalid={(formik.touched.username && formik.errors.username) || authError}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.username}</Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId="password" label={t('forms.login.fields.password.label')} className="mb-4">
          <Form.Control
            type="password"
            placeholder={t('forms.login.fields.password.placeholder')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            isInvalid={(formik.touched.password && formik.errors.password) || authError}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
          {authError && (
            <Form.Control.Feedback type="invalid" tooltip>
              {t('forms.login.errors.auth')}
            </Form.Control.Feedback>
          )}
        </FloatingLabel>
        <Button variant="outline-primary" type="submit" className="w-100 mb-3">
          {t('forms.login.buttonText')}
        </Button>
      </fieldset>
    </Form>
  );
};

export default LoginForm;
