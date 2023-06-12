import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(`.gallery`);
const createGallary = makeHtmlGallary(galleryItems);

galleryList.insertAdjacentHTML("beforeend", createGallary);

galleryList.addEventListener(`click`, onImgContainerClick)

function makeHtmlGallary(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
                   <a class="gallery__link" href="${original}">
                      <img
                       class="${preview}"
                       src="${preview}"
                       data-source="${original}"
                       alt="${description}"
                      />
                   </a>
              </li>`;  
   }).join("");
}

function onImgContainerClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== `IMG`) {
        return;
    };

    const selectedImage = event.target.getAttribute('data-source');

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`);
    
    instance.show()
    
    galleryList.addEventListener('keydown', event => {
		if (event.key === 'Escape') {
			instance.close()
		}
	})
    
};


// const gallery = document.querySelector('.gallery')
// const items = []

// galleryItems.forEach(element => {
// 	const galleryItem = document.createElement('div')
// 	galleryItem.className = 'gallery__item'
// 	const galleryLink = document.createElement('a')
// 	galleryLink.className = 'gallery__link'
// 	galleryLink.href = element.original
// 	const galleryImage = document.createElement('img')
//     galleryImage.className = 'gallery__image'
//     galleryImage.src = element.preview;
//     galleryImage.setAttribute('data-source', element.original)
//     galleryImage.alt = element.description;

// 	galleryItem.append(galleryLink)
// 	galleryLink.append(galleryImage)
// 	items.push(galleryItem)
// })

// gallery.append(...items)

// gallery.addEventListener('click', e => {
//     e.preventDefault();
//     if (e.target.nodeName !== 'IMG') {
// 		return
// 	}

//     const selectedImage = e.target.getAttribute('data-source')

//     const instance = basicLightbox.create(`
//     <img src="${selectedImage}" width="800" height="600">
// `)

//     instance.show()
    
//     gallery.addEventListener('keydown', e => {
// 		if (e.key === 'Escape') {
// 			instance.close()
// 		}
// 	})
// })
