const createBoxButton = document.querySelector(`[data-create]`);
const destroyBoxButton = document.querySelector(`[data-destroy]`);
const divBoxes = document.querySelector(`#boxes`);
const counter = document.querySelector(`input`);
 
createBoxButton.addEventListener("click", getAmount);
destroyBoxButton.addEventListener("click", destroyBoxes);

function getAmount() {
  let amount = counter.value;
  createBoxes(amount);
  // console.log(amount);
};

function createBoxes(amount) {
  let step = 30;
  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement(`div`);
    div.style.width = `${step}px`;
    div.style.height = `${step}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    step += 10;
    // console.log(div);
  };
  
  divBoxes.append(...elements);
};

function destroyBoxes() {
  divBoxes.innerHTML = "";
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};



