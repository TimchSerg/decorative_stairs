import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export function Gallery() {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const items = [
    {link: 'lestnica_1.jpg'},
    {link: 'lestnica_1.jpg'},
    {link: 'lestnica_1.jpg'},
    {link: 'lestnica_1.jpg'},
    {link: 'lestnica_1.jpg'},
    {link: 'lestnica_1.jpg'},
    {link: 'lestnica_1.jpg'},
  ]

  let data = items.map((item, index) => {
    return (
      <SwiperSlide
        key={index}
        className="ItemViewer-gallery--slide"
        zoom={true}
        virtualIndex={index}
      >
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/images/' + item.link})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            width: '100%',
            height: '380px',
            margin:'0 3rem'
          }}
        >
          asdas
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div>
      Наши работы

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {data}
      </Swiper>
    </div>
  );
}