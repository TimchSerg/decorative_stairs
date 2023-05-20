import React from 'react';

export function Main(){
  return (
    <div className="main padding-setup" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/lestnica_1.jpg'})` 
      }}>
      
      <div className='col-12 main-description'>
        <div className='main-h col-12 col-md-8'>
            <h1>Изготовление и установка домашних лестниц для вашего дома под заказ</h1>
            <span>Мы поможем Вам подобрать материал и дизайн для вашей будущей лестницы</span>
        </div>
        <div className='main-btn'>
            <button className='main-btn-actions'>
              Заказать звонок
            </button>
            <button className='main-btn-works'>
              Почему мы?
            </button>
        </div>
      </div>
      
    </div>
  );
}

export default Main;
