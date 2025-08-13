function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validateForm() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let contraseña = document.getElementById("password1").value;
    let contraseña2 = document.getElementById("password2").value;


    // Validación de campos vacíos y coincidencia de contraseñas

    if (nombre === "" || apellido === "" || email === "" || contraseña === "" || contraseña2 === "") {
        
        return false;
    }
    if (contraseña !== contraseña2) {
        
        return false;
    }
}
