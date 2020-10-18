const form = document.querySelector("#contactForm");
const lastNameError = document.querySelector("#lastNameError");
const lastName = document.querySelector("#lastName");

form.addEventListener("submit", validateForm);

function validateForm() {
    event.preventDefault();

    if (lastName.value.length < 5) {
        lastNameError.style.display = "block";
    } else {
        lastNameError.style.display = "none";
    }
}