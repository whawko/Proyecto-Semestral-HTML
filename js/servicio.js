const serviciosIniciales = [
  // Consultas
  { codigo: "SV001", categoria: "Consultas", nombre: "Consulta general", especie: "Perro / Gato", duracion: "30 min", precio: 15000, observaciones: "Atención clínica preventiva y diagnóstico básico." },
  { codigo: "SV002", categoria: "Consultas", nombre: "Consulta urgencia", especie: "Perro / Gato", duracion: "30 min", precio: 25000, observaciones: "Fuera de horario +$10.000" },
  { codigo: "SV003", categoria: "Consultas", nombre: "Control postoperatorio", especie: "Perro / Gato", duracion: "20 min", precio: 10000, observaciones: "Revisión de suturas y evolución quirúrgica." },
  { codigo: "SV004", categoria: "Consultas", nombre: "Consulta ave / conejo", especie: "Ave / Conejo", duracion: "30 min", precio: 18000, observaciones: "Atención especializada en animales exóticos." },
  { codigo: "SV005", categoria: "Consultas", nombre: "Segunda opinión médica", especie: "Todas", duracion: "40 min", precio: 20000, observaciones: "Requiere ficha previa" },

  // Vacunación
  { codigo: "VA001", categoria: "Vacunación", nombre: "Vacuna antirrábica canina", especie: "Perro", duracion: "10 min", precio: 12000, observaciones: "Obligatoria por ley" },
  { codigo: "VA002", categoria: "Vacunación", nombre: "Vacuna sextuple canina", especie: "Perro", duracion: "10 min", precio: 18000, observaciones: "Refuerzo anual" },
  { codigo: "VA003", categoria: "Vacunación", nombre: "Vacuna bivalente felina", especie: "Gato", duracion: "10 min", precio: 15000, observaciones: "Refuerzo anual" },
  { codigo: "VA004", categoria: "Vacunación", nombre: "Vacuna triple felina", especie: "Gato", duracion: "10 min", precio: 17000, observaciones: "Refuerzo anual" },
  { codigo: "VA005", categoria: "Vacunación", nombre: "Vacuna Bordetella canina", especie: "Perro", duracion: "10 min", precio: 14000, observaciones: "Tos de las perreras" },
  { codigo: "VA006", categoria: "Vacunación", nombre: "Vacuna antirrábica felina", especie: "Gato", duracion: "10 min", precio: 12000, observaciones: "Inmunización obligatoria" },

  // Cirugía
  { codigo: "CI001", categoria: "Cirugía", nombre: "Esterilización hembra canina", especie: "Perra", duracion: "90 min", precio: 80000, observaciones: "Incluye anestesia y hospitalización 24h" },
  { codigo: "CI002", categoria: "Cirugía", nombre: "Esterilización macho canino", especie: "Perro", duracion: "60 min", precio: 60000, observaciones: "Incluye anestesia" },
  { codigo: "CI003", categoria: "Cirugía", nombre: "Esterilización hembra felina", especie: "Gata", duracion: "60 min", precio: 65000, observaciones: "Incluye anestesia y hospitalización 12h" },
  { codigo: "CI004", categoria: "Cirugía", nombre: "Esterilización macho felino", especie: "Gato", duracion: "45 min", precio: 50000, observaciones: "Incluye anestesia" },
  { codigo: "CI005", categoria: "Cirugía", nombre: "Extirpación de tumor cutáneo", especie: "Perro / Gato", duracion: "60 min", precio: 120000, observaciones: "Precio referencial; varía según tamaño" },
  { codigo: "CI006", categoria: "Cirugía", nombre: "Cesárea de urgencia", especie: "Perra / Gata", duracion: "120 min", precio: 180000, observaciones: "Atención quirúrgica obstétrica inmediata." },

  // Desparasitación
  { codigo: "DE001", categoria: "Desparasitación", nombre: "Desparasitación interna pequeños (<10 kg)", especie: "Perro", duracion: "5 min", precio: 8000, observaciones: "Dosis calculada por peso." },
  { codigo: "DE002", categoria: "Desparasitación", nombre: "Desparasitación interna medianos (10-25 kg)", especie: "Perro", duracion: "5 min", precio: 9500, observaciones: "Dosis calculada por peso." },
  { codigo: "DE003", categoria: "Desparasitación", nombre: "Desparasitación interna grandes (>25 kg)", especie: "Perro", duracion: "5 min", precio: 11000, observaciones: "Dosis calculada por peso." },
  { codigo: "DE004", categoria: "Desparasitación", nombre: "Desparasitación interna felina", especie: "Gato", duracion: "5 min", precio: 8000, observaciones: "Comprimido palatable o pasta oral." },
  { codigo: "DE005", categoria: "Desparasitación", nombre: "Antiparasitario externo (pipeta)", especie: "Perro / Gato", duracion: "5 min", precio: 7500, observaciones: "Incluye aplicación" },

  // Exámenes
  { codigo: "EX001", categoria: "Exámenes", nombre: "Hemograma completo", especie: "Perro / Gato", duracion: "30 min", precio: 22000, observaciones: "Resultado en 24-48 h" },
  { codigo: "EX002", categoria: "Exámenes", nombre: "Perfil bioquímico completo", especie: "Perro / Gato", duracion: "30 min", precio: 35000, observaciones: "Resultado en 24-48 h" },
  { codigo: "EX003", categoria: "Exámenes", nombre: "Radiografía (1 proyección)", especie: "Perro / Gato", duracion: "20 min", precio: 28000, observaciones: "Incluye informe radiológico digital." },
  { codigo: "EX004", categoria: "Exámenes", nombre: "Ecografía abdominal", especie: "Perro / Gato", duracion: "30 min", precio: 45000, observaciones: "Requiere ayuno previo de 8 horas." },
  { codigo: "EX005", categoria: "Exámenes", nombre: "Test de leishmaniasis", especie: "Perro", duracion: "20 min", precio: 18000, observaciones: "Prueba serológica rápida en clínica." },

  // Otros
  { codigo: "OT001", categoria: "Otros", nombre: "Corte de uñas", especie: "Perro / Gato", duracion: "15 min", precio: 5000, observaciones: "Manejo cuidadoso con cauterio preventivo." },
  { codigo: "OT002", categoria: "Otros", nombre: "Limpieza dental", especie: "Perro / Gato", duracion: "45 min", precio: 55000, observaciones: "Requiere anestesia" },
  { codigo: "OT003", categoria: "Otros", nombre: "Microchip identificación", especie: "Perro / Gato", duracion: "10 min", precio: 15000, observaciones: "Incluye registro" },
  { codigo: "OT004", categoria: "Otros", nombre: "Hospitalización (por día)", especie: "Perro / Gato", duracion: "24 h", precio: 30000, observaciones: "Incluye monitoreo y alimentación básica" }
];

// Guardar en localStorage si no existe
if (!localStorage.getItem("serviciosVet")) {
  localStorage.setItem("serviciosVet", JSON.stringify(serviciosIniciales));
}

// Guarda la categoría clicada y lleva a servicios-lista.html
function abrirCategoriaServicio(nombreCategoria) {
  localStorage.setItem("categoriaServicioSeleccionada", nombreCategoria);
  window.location.href = "servicio-lista.html";
}

// Guarda el código del servicio clicado y lleva a servicio-detalle.html
function verDetalleServicio(codigo) {
  localStorage.setItem("servicioDetalleCodigo", codigo);
  window.location.href = "servicio-detalle.html";
}