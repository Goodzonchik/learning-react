import React, { useCallback, useState } from 'react';

import './FeedBack.scss';
import FeedBack from './FeedBack';
import { Prompt } from 'react-router-dom';

const defaultForm = {
  form: {
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 1,
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

export type FormState = typeof defaultForm;

export default function FeedBackContainer() {
  const [form, setForm] = useState<FormState>(defaultForm);

  const changeForm = useCallback(
    (value: FormState) => {
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
        nameRequired: !form.form.name,
        emailRequired: !form.form.email,
        messageRequired: !form.form.message,
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

  const hasChanges = Boolean(
    form.form.name ||
      form.form.email ||
      form.form.phone ||
      form.form.message ||
      form.form.subject !== 1
  );

  return (
    <div className={'container'}>
      <FeedBack
        form={form}
        change={changeForm}
        clear={clearForm}
        submit={submitForm}
      ></FeedBack>
      <Prompt
        when={hasChanges}
        message={
          'You have unsent data; upon transition, they will be sent to a black hole. Are you sure you want to switch?'
        }
      />
    </div>
  );
}
