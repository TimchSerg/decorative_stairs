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

import "react-image-gallery/styles/css/image-gallery.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    img: "/images/lestnica_1.jpg",
    title: "ЛЕСТНИЦА ИЗ МАССИВА ЯСЕНЯ",
    type: 'П-образная с двумя площадками',
    coating: 'Тонировка в один цвет',
    material: 'Ясень',
    price: '390 т.р'
  }
]

function App() {
  return (
    <div className="App">
      <Header />

      <Main />

      <WhoMy />

      <div className='col-12 padding-setup'>
        <h2 className='mb-4 header-block'><u>Примеры проектов</u></h2>

        <ReleaseInfo item={items[0]} color="#B99FEA" position="left"/>
        <ReleaseInfo item={items[0]} color="#EBA789" position="right"/>
        <ReleaseInfo item={items[0]} color="#96DBC6" position="left"/>
      </div>

      

      <div className='col-12 padding-setup'>
        <h2 className='mb-4 header-block'><u>Наши работы</u></h2>

        <Gallery />
      </div>

      <div className='col-12 padding-setup'>
        <h2 className='mb-4 header-block'><u>Отзывы</u></h2>

        <Reviews />
      </div>

      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
