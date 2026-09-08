document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  const regionSelect = document.getElementById('region');
  const comunaSelect = document.getElementById('comuna');

  // 1. Arreglo de regiones
  const regiones = [
    { id: 'rm', nombre: 'Región Metropolitana' },
    { id: 'valparaiso', nombre: 'Valparaíso' },
    { id: 'biobio', nombre: 'Biobío' }
  ];

  // 2. Mapeo de comunas por región
  const comunasPorRegion = {
    rm: ['Santiago', 'Providencia', 'Las Condes', 'Ñuñoa', 'Maipú', 'Conchalí'],
    valparaiso: ['Valparaíso', 'Viña del Mar', 'Concón', 'Quilpué'],
    biobio: ['Concepción', 'Talcahuano', 'San Pedro de la Paz', 'Chillán']
  };

  // Cargar las regiones dinámicamente desde el arreglo de JS
  if (regionSelect) {
    regionSelect.innerHTML = '<option value="" disabled selected>Seleccionar región</option>';
    regiones.forEach(reg => {
      const option = document.createElement('option');
      option.value = reg.id;
      option.textContent = reg.nombre;
      regionSelect.appendChild(option);
    });

    // Cargar comunas al cambiar la región seleccionada
    regionSelect.addEventListener('change', (e) => {
      const regionSeleccionada = e.target.value;
      const comunas = comunasPorRegion[regionSeleccionada] || [];

      comunaSelect.innerHTML = '<option value="" disabled selected>Seleccionar comuna</option>';

      comunas.forEach(comuna => {
        const option = document.createElement('option');
        option.value = comuna.toLowerCase();
        option.textContent = comuna;
        comunaSelect.appendChild(option);
      });

      comunaSelect.disabled = false;
    });
  }

  // 3. Algoritmo de Módulo 11 para validar el RUN chileno
  function validarRUN(runCompleto) {
    // Debe venir sin puntos ni guion: entre 7 y 8 dígitos seguidos de dígito verificador (0-9 o K)
    const runLimpio = runCompleto.trim().toUpperCase();
    const regexRun = /^[0-9]{7,8}[0-9K]$/;

    if (!regexRun.test(runLimpio)) {
      return false;
    }

    const cuerpo = runLimpio.slice(0, -1);
    const dvIngresado = runLimpio.slice(-1);

    // Cálculo del dígito verificador
    let suma = 0;
    let multiplo = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma += parseInt(cuerpo[i], 10) * multiplo;
      multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    const resto = 11 - (suma % 11);
    let dvEsperado = '';

    if (resto === 11) dvEsperado = '0';
    else if (resto === 10) dvEsperado = 'K';
    else dvEsperado = resto.toString();

    return dvIngresado === dvEsperado;
  }

  // 4. Validación y envío del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Captura de elementos
    const run = document.getElementById('run') ? document.getElementById('run').value.trim() : '';
    const nombre = document.getElementById('nombre') ? document.getElementById('nombre').value.trim() : '';
    const apellidos = document.getElementById('apellidos') ? document.getElementById('apellidos').value.trim() : '';
    const correo = document.getElementById('correo') ? document.getElementById('correo').value.trim().toLowerCase() : '';
    const fechaNacimiento = document.getElementById('fechaNacimiento') ? document.getElementById('fechaNacimiento').value : '';
    const tipoUsuario = document.getElementById('tipoUsuario') ? document.getElementById('tipoUsuario').value : '';
    const region = regionSelect ? regionSelect.value : '';
    const comuna = comunaSelect ? comunaSelect.value : '';
    const direccion = document.getElementById('direccion') ? document.getElementById('direccion').value.trim() : '';
    const contrasena = document.getElementById('contrasena') ? document.getElementById('contrasena').value : '';

    // • RUN: obligatorio, sin puntos ni guión y dígito verificador válido
    if (!run) {
      alert('El RUN es obligatorio.');
      return;
    }
    if (run.includes('.') || run.includes('-')) {
      alert('El RUN debe ingresarse sin puntos ni guión (ej: 19876543K o 123456789).');
      return;
    }
    if (!validarRUN(run)) {
      alert('El RUN ingresado no es válido (dígito verificador incorrecto).');
      return;
    }

    // • Nombre: obligatorio, máximo 50 caracteres
    if (!nombre) {
      alert('El nombre es obligatorio.');
      return;
    }
    if (nombre.length > 50) {
      alert('El nombre no puede exceder los 50 caracteres.');
      return;
    }

    // • Apellidos: obligatorios, máximo 100 caracteres
    if (!apellidos) {
      alert('Los apellidos son obligatorios.');
      return;
    }
    if (apellidos.length > 100) {
      alert('Los apellidos no pueden exceder los 100 caracteres.');
      return;
    }

    // • Correo: obligatorio, máximo 100 caracteres y formato válido
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correo) {
      alert('El correo electrónico es obligatorio.');
      return;
    }
    if (correo.length > 100) {
      alert('El correo electrónico no puede exceder los 100 caracteres.');
      return;
    }
    if (!regexEmail.test(correo)) {
      alert('Por favor, ingresa un formato de correo electrónico válido.');
      return;
    }

    // • Tipo de usuario: obligatorio (seleccionar desde una lista)
    if (!tipoUsuario) {
      alert('Debes seleccionar un tipo de usuario.');
      return;
    }

    // • Región y Comuna: obligatorios
    if (!region) {
      alert('Debes seleccionar una región.');
      return;
    }
    if (!comuna) {
      alert('Debes seleccionar una comuna.');
      return;
    }

    // • Dirección: obligatoria, máximo 300 caracteres
    if (!direccion) {
      alert('La dirección es obligatoria.');
      return;
    }
    if (direccion.length > 300) {
      alert('La dirección no puede exceder los 300 caracteres.');
      return;
    }

    // 5. Guardado en localStorage
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosVet')) || [];

    // Verificar si el RUN o correo ya existen
    const runExistente = usuariosRegistrados.some(u => u.run === run.toUpperCase());
    if (runExistente) {
      alert('El RUN ingresado ya se encuentra registrado.');
      return;
    }

    const correoExistente = usuariosRegistrados.some(u => u.correo === correo);
    if (correoExistente) {
      alert('El correo electrónico ya está en uso.');
      return;
    }

    const nuevoRegistro = {
      run: run.toUpperCase(),
      nombre: nombre,
      apellidos: apellidos,
      correo: correo,
      fechaNacimiento: fechaNacimiento || null,
      rol: tipoUsuario,
      region: region,
      comuna: comuna,
      direccion: direccion,
      contrasena: contrasena || '123456'
    };

    usuariosRegistrados.push(nuevoRegistro);
    localStorage.setItem('usuariosVet', JSON.stringify(usuariosRegistrados));

    alert('¡Registro exitoso! Ya puedes iniciar sesión con tu cuenta.');
    window.location.href = 'login.html';
  });
});