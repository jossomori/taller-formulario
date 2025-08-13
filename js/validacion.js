function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// Actividad 7.3:
function validateForm() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let contraseña = document.getElementById("password1").value;
    let contraseña2 = document.getElementById("password2").value;
    let checkbox = document.getElementById("terminos");

    // Validar que ningún campo esté vacío
    if (nombre === "" || apellido === "" || email === "" || contraseña === "" || contraseña2 === "") {
        return false;
    }
    // Validar que la contraseña tiene al menos 6 caracteres
    else if (contraseña.length < 6) {
        return false;
    }
    // Validar que ambas contraseñas son iguales
    else if (contraseña !== contraseña2) {
        return false;
    }
    // Validar que el checkbox está marcado
    else if (!checkbox.checked) {
        return false;
    }
    else {
        return true;
    }
} 

const submitButton = document.getElementById('regBtn');

// Cuando se hace click en el botón, se valida el formulario
submitButton.addEventListener('click', function() {
    if (validateForm()) {
        showAlertSuccess();
    }
    else {
        showAlertError();
    }
})