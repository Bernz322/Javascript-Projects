const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("confirm-password");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  /* Pass all input fields as an array to check if empty */
  isEmpty([userName, email, password, passwordConfirm]);
  checkLength(username, 3, 15); // min of 3 char and max of 15 char
  checkLength(password, 6, 25); // min of 6 char and max of 25 char
  checkEmail(email);
  checkPassword(password, passwordConfirm);
});

function formSuccess(input) {
  // Success
  input.parentElement.className = "form-control success"; // overwrites div class

  /* adding class to the div doesn't work */
  // input.parentElement.classList.add("success");
}

function formError(input, message) {
  // Error
  input.parentElement.className = "form-control error";

  if (input === passwordConfirm) {
    input.parentElement.querySelector("small").innerHTML =
      "Passwords do not match";
  } else {
    input.parentElement.querySelector("small").innerHTML = message;
  }

  /* adding class to the div doesn't work */
  // input.parentElement.classList.add("error");
}

function isEmpty(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      formError(input, `${getID(input)} is required`);
    } else {
      formSuccess(input);
    }
  });
}

function getID(input) {
  /* Return ID of each fields and the 1st letter is uppercase */
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
  /* Check length of Username and Password */
  if (input.value.length < min) {
    formError(input, `${getID(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    formError(input, `${getID(input)} must be less than ${max} characters`);
  } else {
    formSuccess(input);
  }
}

function checkPassword(input1, input2) {
  /* Checks if both passwords matches each other */
  if (input1.value !== input2.value) {
    formError(input2, "Passwords do not match");
  }
}

function checkEmail(input) {
  /* Checks if it is a valid email using regex */
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    formSuccess(input);
  } else {
    formError(input, "Email is not valid");
  }
}
