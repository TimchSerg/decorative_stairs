import React from 'react';

export function BlockInfo(props) {
  const { img, count, title, header, description, position, colorCount } = props;
  
  return (
    <div className="block-info padding-setup d-flex flex-wrap" style={{flexDirection: `${position === 'right' ? 'row-reverse' : 'row'} `}}>
      <div className='col-12 col-md-6 d-flex' style={{justifyContent: `center`}}>
          <div className='block-info-img' style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + img})`
          }}></div>
      </div>
      <div className='col-12 col-md-6 block-info-text' >
        <div className='block-info-header d-flex'>
          <div className='block-info-count' style={{background: `${colorCount}`}}>{count}</div>
          <div className='block-info-title'>{title}</div>
        </div>
        <h3>{header}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}