import React, { useState } from 'react';

export function Header() {

  return (
    <header className="App-header col-12">
      <div className='col-6'>
        <ul className='d-flex col-12 justify-content-around'>
          <li className='header-text'>Почему мы</li>
          <li className='header-text'>Наши работы</li>
          <li className='header-text'>Отзывы</li>
          <li className='header-text'>Контакты</li>
        </ul>
      </div>
      <div className='col-6 justify-content-end d-flex'>
        <a href="tel:79191348485" className='header-text'>+7(919)-xxx-xx-xx</a>
      </div>
    </header>
  );
}