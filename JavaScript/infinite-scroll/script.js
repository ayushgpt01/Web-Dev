const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
const count = 30;
const apiKey = 'Bsv_FxK5KCqu4JvwE1h4dAGQdO93ePZoEXQdqYfeYXA';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
      ready = true;
      loader.hidden = true;
    }
  }

// helper function for setting attributes
function setAttributes(element, attributes) {
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }

// create img,link and add to DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    photosArray.forEach((photo) => {
        // create link for photo
        const item = document.createElement('a');
        setAttributes(item , {
            href: photo.links.html,
            target: '_blank',
        })
        // create img for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
        })
        // Event Listener, check when img has finished loading
        img.addEventListener('load', imageLoaded);
        // put <img> inside <a> and put both into .image-container
        item.appendChild(img);
        imageContainer.appendChild(item)
    });
}


// Get photos from API
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.log("Error reaching API" + error);
    }
}

// Checking to load more photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
      ready = false;
      getPhotos();
    }
  });

getPhotos();