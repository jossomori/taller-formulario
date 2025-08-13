function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// Actividad 7.3:
function validateForm() {
    let passInput = document.getElementById("password1");

    // Validar que el campo de contraseña no esté vacío
    if (passInput.value.length < 6) {
        return false;
    }
    else {
        return true;
    }
} 

const submitButton = document.getElementById('regBtn');

submitButton.addEventListener('click', function() {
    if (validateForm()) {
        showAlertSuccess();
    }
    else {
        showAlertError();
    }
})