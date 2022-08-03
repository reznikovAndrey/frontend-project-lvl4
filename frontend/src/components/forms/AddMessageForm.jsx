import { useFormik } from 'formik';
import { Form, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { AddMessageButton } from '../buttons';

const AddMessageForm = () => {
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: async ({ message }, { resetForm }) => {
      console.log(message);
      resetForm();
    },
  });

  const { t } = useTranslation();

  return (
    <Form onSubmit={formik.handleSubmit} className="py-1 border rounded-2">
      <InputGroup>
        <Form.Control
          id="message"
          className="border-0 p-0 ps-2"
          placeholder={t('forms.addMessage.fields.message.placeholder')}
          aria-label={t('forms.addMessage.fields.message.label')}
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        <AddMessageButton isDisabled={formik.values.message.length === 0} />
      </InputGroup>
    </Form>
  );
};

export default AddMessageForm;
