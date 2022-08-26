import * as Yup from 'yup';

const regexp = /^\w+$/;

export default () =>
  Yup.object({
    username: Yup.string().matches(regexp, 'forms.login.fields.username.error').required('forms.login.errors.required'),
    password: Yup.string().required('forms.login.errors.required'),
  });
