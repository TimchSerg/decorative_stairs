// import { Border } from './app/components/border';
import { Header } from './app/header';
import {Main} from './app/main';
import {BlockInfo} from './app/components/block.info'
import { Gallery } from './app/gallery';
import { Contacts } from './app/contacts';
import { Reviews } from './app/reviews';
import { Footer } from './app/footer';

import './css/App.css';
import './css/components.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import 'swiper/css/scrollbar';
// import 'swiper/css/pagination.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />

      {/* <Border/> */}

      <BlockInfo 
        position="left"
        img={'/images/lestnica_1.jpg'} 
        count={1} 
        colorCount="#B99FEA"
        title={'Bonus Your Home Today'} 
        header={'Sell your equity to Bonus™ and turn your home into a long-term investment.'} 
        description={'Selling your home doesnt have to mean giving up its future worth. Bonus™ lets you sell your current equity, move out and still keep ownership in your home. With no showings, no closing costs and lower fees than a traditional sale, Bonus™ is a faster, easier and smarter way to sell, all while keeping your home as a long-term investment!'} 
      />
      
      {/* <Border/> */}

      <BlockInfo 
        position="right"
        img={'/images/lestnica_1.jpg'} 
        count={2} 
        colorCount="#EBA789"
        title={'Keep Ownership & Move On'} 
        header={'As your investment partner, Bonus™ takes care of your home so you can move on without worry or costs.'} 
        description={'With Bonus™, your home receives our white-glove management and care. We take care of everything from maintenance, repairs, and all other expenses to optimize the home for long-term value. You can sit back and watch your equity and homes value grow like a stock. Bonus™ guarantees to never come back to you for any money or costs.'} 
      />

      {/* <Border/> */}

      <BlockInfo 
        position="left"
        img={'/images/lestnica_1.jpg'} 
        count={3} 
        colorCount="#96DBC6"
        title={'Sell Again in 5-30 Years'} 
        header={'Unlock your bonus wealth. As your home value rises throughout the years, so does your future net-worth.'} 
        description={'As partners in the home, when you win, we win. Bonus™ allows you to keep ownership in the home and keep building equity over the years to cash out later when the home goes up in value. Never miss out on your homes future worth.'} 
      />

      <Gallery />
      <Reviews />

      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
