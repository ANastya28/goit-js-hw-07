import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const makeHtmlGallary = ({ preview, original, description }) => {
  return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
               <img
                class="${preview}"
                src="${preview}"
                alt="${description}"
               />
            </a>
        </li>`
}

const gallery = galleryItems.map(makeHtmlGallary).join("");

const galleryList = document.querySelector(`.gallery`);
galleryList.insertAdjacentHTML("beforeend", gallery);

