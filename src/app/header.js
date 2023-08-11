import React from 'react';
import { NavbarComponent } from './components/nav.bar'

export function Header() {

  return (
    <header className="App-header col-12 align-items-start align-items-lg-center">
      <a href="https://forest-room46.ru" className='col-2 order-2 order-md-0'>
        <img src={`${process.env.PUBLIC_URL}/images/photo_2023-05-22_15-24-07.png`} style={{maxHeight: "48px"}} alt="Forest Room46" />
      </a>
      <div className='col-3 col-md-7 order-0'>
        <NavbarComponent />
      </div>
      <div className='col-7 col-md-3 justify-content-center justify-content-md-end d-flex pt-3 pt-lg-0 order-1'>
        <a href="tel:79308526443" className='header-text'>+7(930)-852-64-43</a>
      </div>
    </header>
  );
}