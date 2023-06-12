
const range = document.querySelector(`#font-size-control`);
const text = document.querySelector(`#text`);

range.addEventListener(`input`, onIntputRangeChange);

function onIntputRangeChange(event) {
    // console.log(event.currentTarget.value);
    return text.style.fontSize = range.value + "px";
};

