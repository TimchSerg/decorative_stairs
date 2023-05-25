const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (img, width, height) => 
`${process.env.PUBLIC_URL + '/images/' + img}`
    // `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
    { id: "IMG_2864.JPG", width: 1080, height: 1080 },
    { id: "IMG_2888.JPG", width: 960, height: 1280 },
    { id: "IMG_2889.JPG", width: 960, height: 1280 },
    { id: "IMG_2890.JPG", width: 960, height: 1280 },
    { id: "IMG_2891.JPG", width: 1080, height: 1209 },
    { id: "IMG_2892.JPG", width: 864, height: 1152 },
    { id: "IMG_2893.JPG", width: 864, height: 1152 },
    { id: "IMG_2897.JPG", width: 864, height: 1152 },
    { id: "IMG_2901.JPG", width: 864, height: 1152 },
    { id: "IMG_2906.JPG", width: 736, height: 981 },
    { id: "IMG_2907.JPG", width: 736, height: 981 },
    { id: "IMG_2908.JPG", width: 736, height: 1104 },
    { id: "IMG_2912.JPG", width: 1200, height: 1600 },
    { id: "IMG_2914.JPG", width: 757, height: 1600 },
];

const photos = unsplashPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = ((photo.height*1.5) / (photo.width * 1.5)) * width;

    return {
        src: unsplashLink(photo.id, width, height),
        width,
        height,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: unsplashLink(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;