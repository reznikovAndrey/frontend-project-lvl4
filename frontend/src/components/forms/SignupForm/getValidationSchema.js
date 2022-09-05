import * as Yup from 'yup';

export default () => Yup.object({
  username: Yup.string()
    .trim()
    .min(3, 'forms.signup.fields.username.errors.short')
    .max(20, 'forms.signup.fields.username.errors.long')
    .required('forms.signup.errors.required'),
  password: Yup.string().min(6, 'forms.signup.fields.password.errors.short').required('forms.signup.errors.required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'forms.signup.fields.passwordConfirm.errors.notMatch')
    .required('forms.signup.errors.required'),
});
