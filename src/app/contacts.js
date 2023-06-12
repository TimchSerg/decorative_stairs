import React from 'react';

export function Contacts(props) {

  return (
    <div className='contacts d-flex justify-content-between align-items-center col-12 padding-setup'>
      <h2 id="contacts" className='link-header'>Контакты</h2>

      <span>Почта: <a href="mailto:forest-room46@yandex.ru">forest-room46@yandex.ru</a></span>

      <span >Телефон: <a href="tel:79308526443" className='header-text' style={{fontSize: '16px'}}>+7(930)-852-64-43</a></span>
      
      <span>Часы работы: Пн-Вс 8:00 до 20:00</span>

      <span>Часы приема заказов: Пн-Сб 09:00 до 21:00</span>

      <button className='main-btn-actions col-12 col-md-6' onClick={()=> props.setShow(true)}>
        Заказать проект
      </button>
    </div>
  );
}