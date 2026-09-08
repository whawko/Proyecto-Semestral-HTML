function ingresar() {
    // Capturar los valores exactos ingresados por el usuariow
    let correo = document.getElementById("Correo").value;
    let clave = document.getElementById("Clave").value;

    // 1. Validar que no haya campos vacíos
    if (correo === "" || clave === "") {
        alert("Por favor, completa todos los campos para ingresar.");
        return;
    }

    // 2. Validar que el formato del correo sea correcto
    let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(correo)) {
        alert("Ingresa un correo electrónico válido.");
        return;
    }

    // 3. La contraseña debe tener entre 4 y 8 caracteres
    if (clave.length < 4 || clave.length > 8) {
        alert("La contraseña debe tener entre 4 y 8 caracteres.");
        return;
    }

    // 4. Acceso para el Administrador (Veterinario/Recepcionista)
    if (correo === "admin@sanmarcos.cl" && clave === "admin123") {
        alert("Bienvenido al panel de administración de San Marcos.");
        window.location.href = "indexAdmin.html"; // Cambia este nombre por el index de admin
    }

    // 5. Acceso para el Cliente (Dueño de la mascota)
    else if (correo === "cliente@email.com" && clave === "1234") {
        alert("Bienvenido. Redirigiendo a la pagina principal.");
        window.location.href = "index.html"; // manda a la página index de usuario
    }
    
    // 6. Si los datos no coinciden con ninguna cuenta
    else {
        alert("Correo o contraseña incorrectos. Intenta nuevamente.");
    }
}