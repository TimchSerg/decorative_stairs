import React from 'react';
import { Border } from './components/border';

export function ReleaseInfo(props) {
  const { item } = props;
  const { position, color } = props;
  let paddingView = window.innerWidth > 768 ? '5rem' : '0rem';
  
  return (
    <div className="block-info d-flex flex-wrap" style={{ paddingTop: paddingView, flexDirection: `${position === 'right' ? 'row-reverse' : 'row'} `}}>
      <div className='col-12 col-md-6 d-flex' style={{justifyContent: `center`}}>
          <div className='block-info-img' style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + item.img})`
          }}></div>
      </div>
      <div className='col-12 col-md-6 block-info-text' >

        <div className='d-block d-md-none'>
          <Border color={color}/>
        </div>

        <div className='block-info-header d-flex align-items-center'>
          <div className='block-info-point' style={{background: `${color}`}}></div>
          <h3 className='block-info-title' style={{color: `${color}`}}>{item.title}</h3>
        </div>

        <div className='d-none d-md-block'>
          <Border color={color}/>
        </div>

        <div className='col-12 block-info-title'>
          <div className='col-12 d-flex justify-content-start my-2 block-info-project '>
            <strong className='me-2'>ТИП ЛЕСТНИЦЫ: </strong>
            <span>{item.type}</span>
          </div>
          <div className='col-12 d-flex justify-content-start my-2 block-info-project '>
            <strong className='me-2'>ПОКРЫТИЕ: </strong> 
            <span>{item.coating}</span>
          </div>
          <div className='col-12 d-flex justify-content-start my-2 block-info-project '>
            <strong className='me-2'>МАТЕРИАЛ: </strong>
            <span>{item.material}</span>
          </div>
          <div className='col-12 d-flex my-2 block-info-project'>
            <strong className='me-2'>ЦЕНА: </strong>
            <span style={{fontSize: '32px', fontWeight: '800'}} >{item.price}</span>
          </div>
          <div className='col-12 mt-3 mb-2'>
            <button className='main-btn-actions py-2' onClick={()=> props.setShow(true)}>
              Уточнить стоимость
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}