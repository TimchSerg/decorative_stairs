import React from 'react';

export function Contacts() {

  return (
    <div className='contacts d-flex justify-content-center col-12 flex-direction-column'>
      <h2>Контакты</h2>

      Почта: s.timoshenko@yandex.ru
      Часы работы: Пн-Вс 8:00 до 20:00

      Часы приема заказов: Пн-Сб 09:00 до 21:00

      <button className='main-btn-actions'>
        Заказать звонок
      </button>
    </div>
  );
}