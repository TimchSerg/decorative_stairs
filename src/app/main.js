import React from 'react';

export function Main(props){
  const { setShow } = props;
  return (
    <div className="main " style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/lestnica_1.jpg'})` 
      }}>
      
      <div className='col-12 main-description'>
        <div className='main-h col-md-8'>
            <h1>Изготовление и монтаж лестниц для дома под ключ</h1>
            <span>Мы поможем Вам подобрать материал и дизайн для вашей будущей лестницы</span>
        </div>
        <div className='main-btn'>
            <button className='main-btn-actions' onClick={()=>{
              setShow(true)
            }}>
              Заказать проект
            </button>
            {/* <button className='main-btn-works'>
              Почему мы?
            </button> */}
        </div>
      </div>
      
    </div>
  );
}

export default Main;
