const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeList = (item) => {
 return ingredients.map((text) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = text;
  itemEl.classList.add(`item`);

  return itemEl;
 });
  
}

const elements = makeList(ingredients);

const list = document.querySelector(`#ingredients`);
list.append(...elements)

// console.log(list);






// ........................................................................................................................


// const elements = ingredients.map((text) => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = text;
//   itemEl.classList.add(`item`);

//   return itemEl;
// });

// console.log(elements);

// const list = document.querySelector (`#ingredients`)
// list.append(...elements)

// console.log(list);


// ................................................................................................................


// const text = ingredients[0];
// const itemFirstEl = document.createElement('li');
// itemFirstEl.textContent = text;
// itemFirstEl.classList.add(`item`);

// console.log(itemFirstEl);

// const itemSecondEl = document.createElement('li');
// itemSecondEl.textContent = "Mushrooms";
// itemSecondEl.classList.add(`item`);

// console.log(itemSecondEl);

// const itemThirdEl = document.createElement('li');
// itemThirdEl.textContent = "Garlic";
// itemThirdEl.classList.add(`item`);

// console.log(itemThirdEl);

// const itemForthEl = document.createElement('li');
// itemForthEl.textContent = "Tomatos";
// itemForthEl.classList.add(`item`);

// console.log(itemForthEl);

// const itemFivthEl = document.createElement('li');
// itemFivthEl.textContent = "Herbs";
// itemFivthEl.classList.add(`item`);

// console.log(itemFivthEl);

// const itemSixthEl = document.createElement('li');
// itemSixthEl.textContent = "Condiments";
// itemSixthEl.classList.add(`item`);

// console.log(itemSixthEl);

// const list = document.querySelector (`#ingredients`)
// list.append(itemFirstEl, itemSecondEl, itemThirdEl, itemForthEl, itemFivthEl, itemSixthEl) 

// console.log(list);