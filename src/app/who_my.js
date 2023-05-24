import React from 'react';

export function WhoMy(){
  return (
    <div className="who-my padding-setup" >
      <h2 className='mb-4 header-block'><u>Наши преимущества</u></h2>

      <ul className='d-flex col-12 justify-content-start flex-wrap' style={{color: '#ffb66d'}}> 
        <li className='header-text text-start mb-3 col-12'>20-летний опыт работы с деревом, позволяет нам гарантировать качество услуг по изготовлению изделий.
        Мы исползуем <strong>МАТЕРИАЛЫ только ВЫСШЕГО КАЧЕСТВА.</strong></li>
        <li className='header-text text-start mb-3 col-12'>Стоимость лестницы рассчитывается до подписания договора. <strong>ГАРАНТИЯ 5 ЛЕТ ПО ДОГОВОРУ.</strong></li>
        <li className='header-text text-start mb-3 col-12'>Опытный специалист <strong>БЕСПЛАТНО</strong> произведет все необходимые замеры в удобное для вас время.</li>
        <li className='header-text text-start col-12'>Вы можете быть уверены, что лестница будет готова точно в срок оговоренный после создания проекта.</li>
      </ul>
    </div>
  );
}

export default WhoMy;
