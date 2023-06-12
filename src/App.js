// import { Border } from './app/components/border';
import { Header } from './app/header';
import { Main } from './app/main';
import { ReleaseInfo } from './app/release.info';
import { WhoMy } from './app/who_my';
import { Gallery } from './app/components/gallery';
import { Contacts } from './app/contacts';
import { Reviews } from './app/reviews';
import { Footer } from './app/footer';

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

function App() {
  return (
    <div className="App">
      <Header />

      <Main />

      <div className='col-12 padding-setup'>
        <h2 className='mb-4 header-block'>Примеры проектов</h2>

        <ReleaseInfo item={items[1]} color="#B99FEA" position="left"/>
        <ReleaseInfo item={items[0]} color="#EBA789" position="right"/>
        <ReleaseInfo item={items[2]} color="#96DBC6" position="left"/>
      </div>

      <WhoMy />

      <div className='col-12 padding-setup'>
        <h2 className='mb-4 header-block'>Наши работы</h2>

        <Gallery />
      </div>

      <div className='col-12 padding-setup'>
        <h2 className='mb-4 header-block'>Отзывы</h2>

        <Reviews />
      </div>

      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
