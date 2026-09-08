function enviarmensaje() {

    // Capturar los valores exactos ingresados por el usuario
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let comentario = document.getElementById("comentario").value;

    // Validar que no haya campos vacíos
    if (nombre === "" || correo === "" || comentario === "") {
        alert("Por favor, completa todos los campos para ingresar.");
        return;
    }

    // Validar que el nombre tenga menos de 100 caracteres
    if (nombre.length >= 100) {
        alert("El nombre debe tener menos de 100 caracteres.");
        return;
    }

    // Validar que el formato del correo sea correcto
    let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(correo)) {
        alert("Ingresa un correo electrónico válido.");
        return;
    }

    // Validar que el nombre tenga menos de 100 caracteres
    if (nombre.length >= 100) {
        alert("El nombre debe tener menos de 100 caracteres.");
        return;
    }
    // Validar que el correo tenga menos de 100 caracteres
    if (correo.length >= 100) {
        alert("El correo debe tener menos de 100 caracteres.");
        return;
    }

    // Validar que el comentario tenga menos de 500 caracteres
    if (comentario.length >= 500) {
        alert("El comentario debe tener menos de 500 caracteres.");
        return;
    }

    else {
        alert("Correo o contraseña incorrectos. Intenta nuevamente.");
    }

}