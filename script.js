const emailInput = document.getElementById('email')
const nameInput = document.getElementById('name')
const submitButton = document.getElementById('submit')
const errorNameMessage = document.getElementById('error-name')
const errorEmailMessage = document.getElementById('error-email')
const successMessage = document.getElementById('success')

submitButton.addEventListener('click', () => {
    validate()
})

function validate() {
    if(!nameInput.value.match(/^[a-zA-Z ]+$/)) {
        errorNameMessage.classList.add('active')
        successMessage.classList.remove('active')
    } else if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorEmailMessage.classList.add('active')
        successMessage.classList.remove('active')
    } else {
        errorNameMessage.classList.remove('active')
        errorEmailMessage.classList.remove('active')
        successMessage.classList.add('active')
    }
}