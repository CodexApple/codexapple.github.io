var stepperForm = document.querySelector('.bs-stepper');
var stepper = new Stepper(document.querySelector('.bs-stepper'));

document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var validFormFeedback = document.querySelector('#contact-part .valid-feedback');
    var invalidFormFeedback = document.querySelector('#contact-part .invalid-feedback');

    form.addEventListener('submit', function(event) {
        form.classList.remove('was-validated');
        invalidFormFeedback.classList.remove('d-block');
        validFormFeedback.classList.remove('d-block');

        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            invalidFormFeedback.classList.add('d-block');
        } else {
            validFormFeedback.classList.add('d-block');
        } form.classList.add('was-validated');
    }, false);
})