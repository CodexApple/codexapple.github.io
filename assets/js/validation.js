/*
    Source code by: W3Resources
    Modified for Validation
*/

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    } tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function Validate(evt, tabName) {
    const email = $("#emailValid").val();
    const phoneNumber = $("#telephoneValid").val();
    const orderNumber = $("#orderValid").val();
    const mobileNumber = $("#mobileValid").val();

    var Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });

    if (validateInput(email, phoneNumber, mobileNumber, orderNumber)) {
        openTab(evt, tabName)
        Toast.fire({
            icon: 'success',
            title: 'Details has been accepted'
        });
    } else {
        Toast.fire({
            icon: 'error',
            title: 'You have entered an invalid input, Please check\n' +
            'Email: ' + email + '\nPhone Number: ' + phoneNumber + '\nMobile Number: ' + mobileNumber +
            '\nOrder Number: ' + orderNumber
        });
    }
}

function validateInput(email, phoneNumber, mobileNumber, orderNumber) {
    const validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validPhone = /^\d{9}$/;
    const validMobile = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const validOrder = /^\d{6}$/;

    if (validEmail.test(email) && validPhone.test(phoneNumber) && validMobile.test(mobileNumber) && validOrder.test(orderNumber)) {
        return true;
    }
}