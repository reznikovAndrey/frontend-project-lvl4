import * as Yup from 'yup';

export default (channels) => Yup.object({
  channelName: Yup.string()
    .trim()
    .notOneOf(
      channels.map(({ name }) => name),
      'forms.channel.errors.duplicate',
    )
    .required('forms.channel.errors.required'),
});
