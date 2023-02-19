const imageContainer = document.querySelector("#image-container");
const loader = document.querySelector("#loader");

let photosArray = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

const API_KEY = "HH1bnXAc4JSh0C5CBZB32N63OzJz4zWww_y3Sp-W5c8";
const count = 10;
const API_URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${count}`;

const onImageLoaded = () => {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
};

const setAttributes = (element, attributes) => {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

const displayPhotos = () => {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  photosArray.forEach((photo) => {
    const item = document.createElement("a");
    setAttributes(item, { href: photo.links.html, target: "_blank" });

    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    img.addEventListener("load", onImageLoaded);

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};

const getPhotos = async () => {
  try {
    const response = await fetch(API_URL);
    photosArray = await response.json();
    displayPhotos();
  } catch (err) {
    console.error(err);
  }
};

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
