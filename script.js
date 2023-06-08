const signupForm = document.querySelector(".signup__form")
const signupEmail = document.querySelector("[data-signup-email]")
const signupInputs = document.querySelectorAll(".signup__input")

const pattern = /.+@.+\..+/
signupForm.addEventListener("submit", e => {
    signupInputs.forEach(input => {
        if (input.value.trim() === "") {
            e.preventDefault()
            showError(input, "")
        } else {
            removeError(input, input.dataset.placeholder)
        }
    })

    if (!pattern.test(signupEmail.value.trim())) {
        e.preventDefault()
        showError(signupEmail, "email@example.com")
    } else {
        removeError(signupEmail, signupEmail.dataset.placeholder)
    }
})

function showError(input, placeholderText) {
    input.closest(".signup__item").classList.add("signup__item--error")
    input.placeholder = placeholderText
}

function removeError(input, placeholderText) {
    input.closest(".signup__item").classList.remove("signup__item--error")
    input.placeholder = placeholderText
}