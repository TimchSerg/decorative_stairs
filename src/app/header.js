import React, { useState } from 'react';
import { NavbarComponent } from './components/nav.bar'

export function Header() {

  return (
    <header className="App-header col-12 align-items-start align-items-lg-center">
      <div className='col-6 col-md-8'>
        <NavbarComponent />
      </div>
      <div className='col-6 col-md-4 justify-content-end d-flex pt-3 pt-lg-0'>
        <a href="tel:79308526443" className='header-text'>+7(930)-852-64-43</a>
      </div>
    </header>
  );
}