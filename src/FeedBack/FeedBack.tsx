import React from 'react';

import './FeedBack.scss';

const styles = {
  container: {
    display: 'block',
    padding: '1em',
    width: '100%',
    height: '100%',
  },
};

export default function FeedBack() {
  /*
    TODO:
    Верстка
    Всплывающее сообщение
    Очистка формы
    Валидация обязательных полей
    Маска ввода
    Отправка сообщения
    Кнопка submit задизейблена если нет чекбкокса
    */

  return (
    <div style={styles.container}>
      <h2>Feed back</h2>
      <form>
        <div className='input-wrapper'>
          <label>Name</label>
          <input type='text' className='form-input' />
        </div>
        <div className='input-wrapper'>
          <label>Phone</label>
          <input type='text' className='form-input' />
        </div>
        <div className='input-wrapper'>
          <label>Email</label>
          <input type='text' className='form-input' />
        </div>
        <div className='input-wrapper'>
          <label>Select subject</label>
          <select></select>
        </div>
        <div className='input-wrapper'>
          <label>Message</label>
          <textarea className='form-input form-textarea'></textarea>
        </div>
        <div className='input-wrapper'>
          <input type='checkbox' />
          <label>Subscribe by mail sending</label>
        </div>
        <div className='button-row'>
          <button className='form-button'>Clear</button>
          <button className='form-button'>Submit</button>
        </div>
      </form>
    </div>
  );
}
