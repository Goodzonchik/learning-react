import React from 'react';

import './FeedBackForm.scss';
import FieldError, { ErrorTypes } from '../Components/FieldError/FieldError';
import { FormState } from './FeedBack';
import { TODO_ANY } from '../Components/Utils/developHelpers';

const subjects = [
  { value: 1, title: 'Sentence' },
  { value: 2, title: 'Error on site' },
];

type SubjectType = typeof subjects[0];

interface FeedBackModel {
  form: FormState;
  change: (state: FormState) => void;
  submit: () => void;
  clear: () => void;
}

export default function FeedBackForm({
  form,
  change,
  submit,
  clear,
}: FeedBackModel) {
  function handleChange(event: TODO_ANY) {
    const input: TODO_ANY = {};
    input[event?.target?.name] = event?.target?.value;
    change({ form: { ...form.form, ...input }, status: form.status });
  }

  return (
    <>
      <h2>Feed back</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='feedback'
      >
        <div className='feedback__input-wrapper'>
          <label className='feedback__input-label_required'>Name</label>
          <input
            type='text'
            value={form.form.name}
            name='name'
            onChange={handleChange}
            className='feedback__input'
          />
          <FieldError
            type={ErrorTypes.required}
            expression={form.status.nameRequired && form.status.submited}
          />
        </div>
        <div className='feedback__input-wrapper'>
          <label>Phone</label>
          <input
            type='text'
            value={form.form.phone}
            name='phone'
            onChange={handleChange}
            className='feedback__input'
          />
        </div>
        <div className='feedback__input-wrapper'>
          <label className='feedback__input-label_required'>Email</label>
          <input
            type='text'
            value={form.form.email}
            name='email'
            onChange={handleChange}
            className='feedback__input'
          />
          <FieldError
            type={ErrorTypes.required}
            expression={form.status.emailRequired && form.status.submited}
          />
        </div>
        <div className='feedback__input-wrapper'>
          <label>Select subject</label>
          <select
            className='feedback__input'
            name='subject'
            onChange={handleChange}
          >
            {subjects.map((subject: SubjectType) => (
              <option key={subject.value} value={subject.value}>
                {subject.title}
              </option>
            ))}
          </select>
        </div>
        <div className='feedback__input-wrapper'>
          <label className='feedback__input-label_required'>Message</label>
          <textarea
            className='feedback__input feedback__textarea'
            value={form.form.message}
            name='message'
            onChange={handleChange}
          ></textarea>
          <FieldError
            type={ErrorTypes.required}
            expression={form.status.messageRequired && form.status.submited}
          />
        </div>
        <div className='feedback__button-row'>
          <button
            className='feedback__form-button'
            disabled={form.status.loading}
            onClick={clear}
          >
            Clear
          </button>
          <button
            className='feedback__form-button'
            disabled={form.status.loading}
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
