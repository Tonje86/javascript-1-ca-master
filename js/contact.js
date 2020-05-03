const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const answer = document.querySelector("#answer");
const answerError = document.querySelector("#answerError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const invalidEmailError = document.querySelector("#invalidEmailError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

form.addEventListener("submit", validateForm);

function validateForm() {
    event.preventDefault();

    const nameValue = name.value;

    if (validateInput(nameValue, 1) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    const answerValue = answer.value;

    if (validateInput(answerValue, 10) === true) {
        answerError.style.display = "none";
    } else {
        answerError.style.display = "block";
    }

    const emailValue = email.value;

    if (validateInput(emailValue, 1) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (validateEmail(emailValue) === true) {
        invalidEmailError.style.display = "none";
    } else {
        invalidEmailError.style.display = "block";
    }

    const addressValue = address.value;

    if (validateInput(addressValue, 15) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

}

function validateInput(value, lengthToCheck) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= lengthToCheck) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(emailValue) {
    const regEx = /\S+@\S+\.\S+/;

    if (regEx.test(emailValue)) {
        return true;
    } else {
        return false;
    }
}