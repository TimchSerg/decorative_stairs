import React from 'react';

export function Contacts() {

  return (
    <div className='contacts d-flex justify-content-between align-items-center col-12 padding-setup'>
      <h2>Контакты</h2>

      <span>Почта: forest-room46@yandex.ru</span>

      <span>Телефон: +7(919)-ХХХ-ХХ-ХХ</span>

      <span>Часы работы: Пн-Вс 8:00 до 20:00</span>

      <span>Часы приема заказов: Пн-Сб 09:00 до 21:00</span>

      <button className='main-btn-actions col-12 col-md-6'>
        Заказать проект
      </button>
    </div>
  );
}