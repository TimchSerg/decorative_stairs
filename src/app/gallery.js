import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

const images = [
  {
    original: process.env.PUBLIC_URL + '/images/lestnica_1.jpg',
    thumbnail: process.env.PUBLIC_URL + '/images/lestnica_1.jpg',
    originalHeight: '450'
  },
  {
    original: process.env.PUBLIC_URL + '/images/lestnica_1.jpg',
    thumbnail: process.env.PUBLIC_URL + '/images/lestnica_1.jpg',
    originalHeight: '450'
  },
  {
    original: process.env.PUBLIC_URL + '/images/lestnica_1.jpg',
    thumbnail: process.env.PUBLIC_URL + '/images/lestnica_1.jpg',
    originalHeight: '450'
  },
  {
    original: process.env.PUBLIC_URL + '/images/lestnica_1.jpg',
    thumbnail: process.env.PUBLIC_URL + '/images/lestnica_1.jpg',
    originalHeight: '450'
  },
  {
    original: process.env.PUBLIC_URL + '/images/lestnica_1.jpg',
    thumbnail: process.env.PUBLIC_URL + '/images/lestnica_1.jpg',
    originalHeight: '450',
  },
  {
    original: process.env.PUBLIC_URL + '/images/lestnica_1.jpg',
    thumbnail: process.env.PUBLIC_URL + '/images/lestnica_1.jpg',
    originalHeight: '450',
  },
  {
    original: process.env.PUBLIC_URL + '/images/lestnica_1.jpg',
    thumbnail: process.env.PUBLIC_URL + '/images/lestnica_1.jpg',
    originalHeight: '450',
  },
  {
    original: process.env.PUBLIC_URL + 'https://mobimg.b-cdn.net/v3/fetch/03/03f8cd3f6796daaacc1fe43ffb7704b7.jpeg?w=1470&r=0.5625',
    thumbnail: process.env.PUBLIC_URL + 'https://mobimg.b-cdn.net/v3/fetch/03/03f8cd3f6796daaacc1fe43ffb7704b7.jpeg?w=1470&r=0.5625',
    originalHeight: '450',
    fullscreen: 'https://mobimg.b-cdn.net/v3/fetch/03/03f8cd3f6796daaacc1fe43ffb7704b7.jpeg?w=1470&r=0.5625'
  },
];

export class Reviews extends React.Component {
  render() {
    return (
      <Carousel show={3.5} slide={2} transition={0.5}>
          <p color="#f27a1a">We love Trendyol orange</p>
          <p color="#d53f8c">This is our github</p>
          <p color="#16be48">We love Trendyol green</p>
          <p color="#3f51b5">This is our website</p>
      </Carousel>
    );
  }
}