import * as Yup from 'yup';

export default (channels, t) =>
  Yup.object({
    channelName: Yup.string()
      .trim()
      .notOneOf(
        channels.map(({ name }) => name),
        ({ value }) => t('forms.channel.errors.duplicate', { channelName: value }),
      )
      .required(t('forms.channel.errors.required')),
  });
