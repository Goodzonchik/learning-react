import React, { useCallback } from 'react';

import './FeedBack.scss';
import FeedBack from './FeedBack';

const styles = {
  container: {
    display: 'block',
    padding: '1em',
    width: '100%',
    height: '100%',
  },
};

const defaultForm = {
  form: {
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: '',
    subscribe: false,
  },
  status: {
    valid: false,
    submited: false,
    nameRequired: false,
    emailRequired: false,
    messageRequired: false,
    loading: false,
  },
};

export default function FeedBackContainer() {
  const [form, setForm] = React.useState<any>(defaultForm);

  const changeForm = useCallback(
    (value: any) => {
      const newForm = {
        form: value.form,
        status: {
          ...form.status,
          valid: !!form.form.name && !!form.form.email && !!form.form.message,
          nameRequired: !form.form.name,
          emailRequired: !form.form.email,
          messageRequired: !form.form.message,
        },
      };
      setForm(newForm);
    },
    [form]
  );

  const clearForm = useCallback(() => {
    setForm(defaultForm);
  }, []);

  const submitForm = useCallback(() => {
    const newForm = {
      form: form.form,
      status: {
        ...form.status,
        submited: true,
        valid: !!form.form.name && !!form.form.email && !!form.form.message,
      },
    };
    newForm.status.submited = true;

    if (newForm.status.valid) {
      newForm.status.loading = true;
      setForm(newForm);
      setTimeout(() => {
        clearForm();
      }, 2000);
    } else {
      setForm(newForm);
    }
  }, [form, clearForm]);

  return (
    <div style={styles.container}>
      <FeedBack
        form={form}
        change={changeForm}
        clear={clearForm}
        submit={submitForm}
      ></FeedBack>
    </div>
  );
}
