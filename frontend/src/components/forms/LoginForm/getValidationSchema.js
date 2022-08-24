import * as Yup from 'yup';

const regexp = /^\w+$/;

export default (t) =>
  Yup.object({
    username: Yup.string()
      .matches(regexp, t('forms.login.fields.username.error'))
      .required(t('forms.login.errors.required')),
    password: Yup.string().required(t('forms.login.errors.required')),
  });
