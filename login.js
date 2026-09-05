function ingresar() {
    let correo = document.getElementById("Correo").value;
    let clave = document.getElementById("Clave").value;


    if (correo === "" || clave === "") {
        alert("Por favor, completa todos los campos para ingresar.");
        return;
    }

    let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(correo)) {
        alert("Ingresa un correo electrónico válido.");
        return;
    }


    if (correo === "admin@sanmarcos.cl" && clave === "admin123") {
        alert("Bienvenido al panel de administración de San Marcos.");
        window.location.href = "admin-vet.html";
    }

    else if (correo === "cliente@email.com" && clave === "1234") {
        alert("Bienvenido. Redirigiendo al historial de tu mascota.");
        window.location.href = "cliente-vet.html";
    }

    else {
        alert("Correo o contraseña incorrectos. Intenta nuevamente.");
    }
}