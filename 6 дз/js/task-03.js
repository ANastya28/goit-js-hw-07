const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const makehtmlGallary = ({ url, alt }) => {
  return `<li class="item">
            <img src=${url}alt= ${alt}>
          </li>`
}

const gallery = images.map(makehtmlGallary).join("");

const galleryList = document.querySelector(`.gallery`);
galleryList.insertAdjacentHTML("beforeend", gallery);

// console.log(galleryList);


// ............................................................................................................


// const makehtmlGallary = images.map(({ url, alt }) => `<li class="item"></li><img src=${url} alt=${alt}>`).join("");

// const galleryList = document.querySelector(`.gallery`);
// galleryList.insertAdjacentHTML("beforeend", makehtmlGallary);
// console.log(galleryList);


// ............................................................................................................


// const makegallery = ({ url, alt }) => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add(`item`);

//   const imgEl = document.createElement(`img`)
//   imgEl.src = url;
//   imgEl.alt = alt;

//   itemEl.append(imgEl);

//   return itemEl;
// };

// const gallery = images.map(makegallery);

// const galleryList = document.querySelector(`.gallery`);
// galleryList.append(...gallery);

// console.log(galleryList);

