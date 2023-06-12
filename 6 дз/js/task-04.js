const decrement = document.querySelector(`button[data-action="decrement"]`);
// console.log(decrement);
const increment = document.querySelector(`button[data-action="increment"]`);
// console.log(increment);
const value = document.querySelector(`#value`);
// console.log(value);

let counterValue = 0;

decrement.addEventListener(`click`, onButtonDecremenClick);
increment.addEventListener(`click`, onButtonIncrementClick);

function onButtonDecremenClick() {
    counterValue -= 1;
 
    return value.textContent = counterValue;
};

function onButtonIncrementClick() {
    counterValue += 1;
 
    return value.textContent = counterValue;
};

