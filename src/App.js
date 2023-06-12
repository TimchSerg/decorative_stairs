import React, {useState} from 'react';
// import { Border } from './app/components/border';
import { Header } from './app/header';
import { Main } from './app/main';
import { ReleaseInfo } from './app/release.info';
import { WhoMy } from './app/who_my';
import { Gallery } from './app/components/gallery';
import { Contacts } from './app/contacts';
import { Reviews } from './app/reviews';
import { Footer } from './app/footer';
import { Window } from './app/components/window';

import './css/App.css';
import './css/components.css';
import './css/media.css';

import "react-image-gallery/styles/css/image-gallery.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    img: "/images/lestnica_1.jpg",
    title: "ЛЕСТНИЦА ИЗ МАССИВА ЯСЕНЯ",
    type: 'Лестница с поворотами на 180, с забежными ступенями',
    coating: 'Тонировка в один цвет',
    material: 'Ясень',
    price: '225 т.р'
  },
  {
    img: "/images/IMG_2897.JPG", 
    title: "ЛЕСТНИЦА ИЗ МАССИВА ДУБА",
    type: 'Лестница с поворотом на 180, с забежными ступенями',
    coating: 'Тонировка в один цвет',
    material: 'Дуб',
    price: '245 т.р'
  },
  {
    img: "/images/IMG_2908.JPG",
    title: "ЛЕСТНИЦА ИЗ МАССИВА ЯСЕНЯ",
    type: 'Лестница с поворотом на 180, с площадкой',
    coating: 'Тонировка в один цвет',
    material: 'Ясень',
    price: '295 т.р'
  }
]

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Header />

      <Main setShow={setShow}/>

      <div className='col-12 padding-setup'>
        <h2 className='mb-4 header-block link-header'>Примеры проектов</h2>

        <ReleaseInfo item={items[1]} color="#B99FEA" position="left" setShow={setShow}/>
        <ReleaseInfo item={items[0]} color="#EBA789" position="right" setShow={setShow}/>
        <ReleaseInfo item={items[2]} color="#96DBC6" position="left" setShow={setShow}/>
      </div>

      <WhoMy />

      <div className='col-12 padding-setup'>
        <h2 id="works" className='mb-4 header-block link-header'>Наши работы</h2>

        <Gallery />
      </div>

      <div className='col-12 padding-setup'>
        <h2 id="reviews" className='mb-4 header-block link-header'>Отзывы</h2>

        <Reviews />
      </div>

      <Window show={show} setShow={setShow}/>

      <Contacts setShow={setShow}/>
      <Footer />
    </div>
  );
}

export default App;
