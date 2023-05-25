import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

import Zoom from "yet-another-react-lightbox/plugins/zoom";

import photos from "./images";

console.log(photos)

export function Gallery() {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <PhotoAlbum 
              photos={photos} 
              layout="rows" 
              targetRowHeight={350} 
              onClick={({ index }) => setIndex(index)} 
            />

            <Lightbox
              slides={photos}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              // enable optional lightbox plugins
              plugins={[Fullscreen, Slideshow, Zoom]}
            />
        </>
    );
}