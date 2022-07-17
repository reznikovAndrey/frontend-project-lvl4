import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useRef, useEffect, useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import routes from '../routes';
import { useAuth } from '../hooks';

const regexp = /^\w+$/;

const LoginForm = () => {
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
        .matches(regexp, 'Allowed digits, letters and "_"')
        .required('Required'),
      password: Yup.string().required('Required'),
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
      <h1 className="text-center mb-4">Login</h1>
      <fieldset disabled={loggedIn}>
        <FloatingLabel
          controlId="username"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            placeholder="Your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            ref={inputUsernameEl}
            isInvalid={(formik.touched.username && formik.errors.username) || authError}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.username}
          </Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel
          controlId="password"
          label="Password"
          className="mb-4"
        >
          <Form.Control
            type="password"
            placeholder="Your password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            isInvalid={(formik.touched.password && formik.errors.password) || authError}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
          {authError && (<Form.Control.Feedback type="invalid" tooltip>Invalid username or password</Form.Control.Feedback>)}
        </FloatingLabel>
        <Button variant="outline-primary" type="submit" className="w-100 mb-3">
          Submit
        </Button>
      </fieldset>
    </Form>

  );
};

export default LoginForm;
