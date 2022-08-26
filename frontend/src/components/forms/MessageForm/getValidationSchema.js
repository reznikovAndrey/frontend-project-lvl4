import * as Yup from 'yup';

export default () => Yup.object({ message: Yup.string().trim().required() });
