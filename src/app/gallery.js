import React from 'react';
import ImageGallery from 'react-image-gallery';

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

export class Gallery extends React.Component {
  render() {
    return (
      <div className='' style={{padding: '2rem 0rem'}}>
        <ImageGallery items={images} showFullscreenButton={false}/>
      </div>
    );
  }
}