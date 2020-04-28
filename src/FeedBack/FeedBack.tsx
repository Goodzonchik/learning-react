import React from 'react';

import './FeedBack.scss';
import FieldError from './FieldError';

const styles = {
  container: {
    display: 'block',
    padding: '1em',
    width: '100%',
    height: '100%',
  },
};

const isEmpty = 'Is empty';

const subjects = [
  { value: 1, title: 'Sentence' },
  { value: 2, title: 'Error on site' },
];

export default function FeedBack({ form, change, submit, clear }: any) {
  /*
    TODO:
    Верстка
    Всплывающее сообщение
    Валидация обязательных полей
    Маска ввода
    Отправка сообщения
    Кнопка submit задизейблена если нет чекбкокса
    */

  function handleChange(event: any) {
    const input: any = {};
    input[event?.target?.name] = event?.target?.value;
    change({ form: { ...form.form, ...input }, status: form.status });
  }

  return (
    <div style={styles.container}>
      <h2>Feed back</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className='input-wrapper'>
          <label className='required'>Name</label>
          <input
            type='text'
            value={form.form.name}
            name='name'
            onChange={handleChange}
            className='form-input'
          />
          {form.status.nameRequired && form.status.submited ? (
            <FieldError error={isEmpty} />
          ) : null}
        </div>
        <div className='input-wrapper'>
          <label>Phone</label>
          <input
            type='text'
            value={form.form.phone}
            name='phone'
            onChange={handleChange}
            className='form-input'
          />
        </div>
        <div className='input-wrapper'>
          <label className='required'>Email</label>
          <input
            type='text'
            value={form.form.email}
            name='email'
            onChange={handleChange}
            className='form-input'
          />
          {form.status.emailRequired && form.status.submited ? (
            <FieldError error={isEmpty} />
          ) : null}
        </div>
        <div className='input-wrapper'>
          <label>Select subject</label>
          <select className='form-input' name='subject' onChange={handleChange}>
            {subjects.map((subject) => (
              <option key={subject.value} value={subject.value}>
                {subject.title}
              </option>
            ))}
          </select>
        </div>
        <div className='input-wrapper'>
          <label className='required'>Message</label>
          <textarea
            className='form-input form-textarea'
            value={form.form.message}
            name='message'
            onChange={handleChange}
          ></textarea>
          {form.status.messageRequired && form.status.submited ? (
            <FieldError error={isEmpty} />
          ) : null}
        </div>
        <div className='input-wrapper'>
          <input
            type='checkbox'
            name='subscribe'
            value={form.form.subscribe}
            onChange={handleChange}
          />
          <label>Subscribe by mail sending</label>
        </div>
        <div className='button-row'>
          <button
            className='form-button'
            disabled={form.status.loading}
            onClick={clear}
          >
            Clear
          </button>
          <button
            className='form-button'
            disabled={form.status.loading}
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
