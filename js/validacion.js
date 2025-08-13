function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

 function validateForm() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("password1").value;
    var contraseña2 = document.getElementById("password2").value;

    if (nombre === "" || apellido === "" || email === "" || contraseña === "" || contraseña2 === "") {
        showAlertError();
        return false;
    }
    if (contraseña !== contraseña2) {
        showAlertError();
        return false;
    }
 }