import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const makeHtmlGallary = ({ preview, original, description }) => {
  return `<li class="gallery__item">
            <a class="gallery__image" href="${original}">
               <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
               />
            </a>
        </li>`
}

const gallery = galleryItems.map(makeHtmlGallary).join("");

const galleryList = document.querySelector(`.gallery`);
galleryList.insertAdjacentHTML("beforeend", gallery);

galleryList.addEventListener(`click`, onImgContainerClick);
  
function onImgContainerClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== `IMG`) {
        return;
    };
   
   var lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt' });
   // console.log(lightbox);
    
};
