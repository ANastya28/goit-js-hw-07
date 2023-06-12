const form = document.querySelector(`.login-form`);
const input = document.querySelectorAll(`input`);

// console.log(input);

form.addEventListener(`submit`, onFormSubmit);
document.addEventListener("keydown", reset);


function onFormSubmit(event) {
  event.preventDefault();
    
  const formElements = event.currentTarget.elements;
    // console.log(formElements);  
  const mail = formElements.email.value;
  const password = formElements.password.value;
    // console.log(mail, password);
  
  if (mail === "" || password === "" ) {
      return alert ("Enter your email and password")
  } const formData = {
        mail,
        password,
  };
  console.log(formData);
} 

function reset(event) {
  const keyCode = `Escape`;
  if (event.code === keyCode) {
    input.forEach(item => item.value = "");
  };
};


// ........................................................................................................

// 1@mail.com


// const form = document.querySelector(`.login-form`)
// console.log(form)

// form.addEventListener(`submit`, onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
 
//     const formData = new FormData(event.currentTarget);
   
//     console.log(formData);

//     formData.forEach((value, name) => {
//         console.log(value);
//         console.log(name);
//     });
// }

