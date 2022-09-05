import * as Yup from 'yup';

export default () => Yup.object({
  username: Yup.string().trim().required('forms.login.errors.required'),
  password: Yup.string().required('forms.login.errors.required'),
});
