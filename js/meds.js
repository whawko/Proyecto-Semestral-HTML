const medicamentos = [
  { codigo: "ME001", categoria: "Antibióticos", nombre: "Amoxibay 250mg", principio: "Amoxicilina", presentacion: "Blíster 10 comp.", especie: "Perro / Gato", stock: 45, precio: 4200 },
  { codigo: "ME002", categoria: "Antibióticos", nombre: "Enrox 50mg", principio: "Enrofloxacino", presentacion: "Blíster 10 comp.", especie: "Perro / Gato", stock: 30, precio: 6800 },
  { codigo: "ME003", categoria: "Antibióticos", nombre: "Metrobay 250mg", principio: "Metronidazol", presentacion: "Blíster 10 comp.", especie: "Perro / Gato", stock: 28, precio: 3900 },
  { codigo: "ME004", categoria: "Antiparasitarios", nombre: "Nexgard", principio: "Afoxolaner", presentacion: "Masticable 1 unid.", especie: "Perro", stock: 60, precio: 9500 },
  { codigo: "ME005", categoria: "Antiparasitarios", nombre: "Bravecto", principio: "Fluralaner", presentacion: "Masticable 1 unid.", especie: "Perro", stock: 40, precio: 18900 },
  { codigo: "ME006", categoria: "Antiparasitarios", nombre: "Revolution Plus", principio: "Selamectina+Sarolaner", presentacion: "Pipeta 1 unid.", especie: "Gato", stock: 35, precio: 14500 },
  { codigo: "ME007", categoria: "Antiparasitarios", nombre: "Drontal Plus", principio: "Praziquantel+Pamoato", presentacion: "Comprimido 1 unid.", especie: "Perro", stock: 80, precio: 3200 },
  { codigo: "ME008", categoria: "Antiparasitarios", nombre: "Milbemax Gato", principio: "Milbemicina+Praziq.", presentacion: "Comprimido 2 unid.", especie: "Gato", stock: 50, precio: 6800 },
  { codigo: "ME009", categoria: "Antiinflamatorios", nombre: "Meloxicam 1mg", principio: "Meloxicam", presentacion: "Blíster 10 comp.", especie: "Perro / Gato", stock: 55, precio: 4500 },
  { codigo: "ME010", categoria: "Antiinflamatorios", nombre: "Carprofen 50mg", principio: "Carprofeno", presentacion: "Blíster 10 comp.", especie: "Perro", stock: 30, precio: 9800 },
  { codigo: "ME011", categoria: "Dermatología", nombre: "Clorhexidina shampoo", principio: "Clorhexidina 2%", presentacion: "Frasco 250ml", especie: "Perro / Gato", stock: 25, precio: 8900 },
  { codigo: "ME012", categoria: "Dermatología", nombre: "Malaseb shampoo", principio: "Miconazol+Clorhex.", presentacion: "Frasco 250ml", especie: "Perro / Gato", stock: 20, precio: 12500 },
  { codigo: "ME013", categoria: "Dermatología", nombre: "Apoquel 16mg", principio: "Oclacitinib", presentacion: "Blíster 10 comp.", especie: "Perro", stock: 18, precio: 22000 },
  { codigo: "ME014", categoria: "Digestivo", nombre: "Probifor", principio: "Bacillus clausii", presentacion: "Sobre 5ml x10", especie: "Perro / Gato", stock: 40, precio: 5600 },
  { codigo: "ME015", categoria: "Digestivo", nombre: "Omeprazol 10mg vet", principio: "Omeprazol", presentacion: "Blíster 10 comp.", especie: "Perro / Gato", stock: 35, precio: 3800 },
  { codigo: "ME016", categoria: "Cardíaco", nombre: "Vetmedin 2.5mg", principio: "Pimobendan", presentacion: "Blíster 10 comp.", especie: "Perro", stock: 15, precio: 28000 },
  { codigo: "ME017", categoria: "Analgésicos", nombre: "Tramadol 50mg vet", principio: "Tramadol", presentacion: "Blíster 10 comp.", especie: "Perro", stock: 22, precio: 5200 },
  { codigo: "ME018", Vacunas: "Vacunas", categoria: "Vacunas", nombre: "Nobivac DHPPI", principio: "Vacuna polivalente", presentacion: "Vial 1 dosis", especie: "Perro", stock: 48, precio: 8500 },
  { codigo: "ME019", categoria: "Vacunas", nombre: "Nobivac Rabies", principio: "Vacuna antirrábica", presentacion: "Vial 1 dosis", especie: "Perro / Gato", stock: 60, precio: 5800 },
  { codigo: "ME020", categoria: "Vacunas", nombre: "Felocell CVR", principio: "Vacuna triple felina", presentacion: "Vial 1 dosis", especie: "Gato", stock: 36, precio: 7200 },
  { codigo: "ME021", categoria: "Suplementos", nombre: "Omega vet 3-6-9", principio: "Ácidos grasos omega", presentacion: "Frasco 100ml", especie: "Perro / Gato", stock: 30, precio: 9900 },
  { codigo: "ME022", categoria: "Suplementos", nombre: "Condrovet forte", principio: "Condroitín+Glucos.", presentacion: "Blíster 30 comp.", especie: "Perro", stock: 25, precio: 14500 }
];

// Si no existen productos en localStorage, los guarda
if (!localStorage.getItem("medicamentosvet")) {
  localStorage.setItem("medicamentosvet", JSON.stringify(medicamentos));
}

// Guarda la categoría clicada y lleva a meds-detalle.html
function abrirCategoria(nombreCategoria) {
  localStorage.setItem("categoriaSeleccionada", nombreCategoria);
  window.location.href = "meds-lista.html"; // Redirige a la página de productos por categoría
}

// Función auxiliar para seleccionar producto y ver detalles
function verDetalleProducto(codigo) {
  localStorage.setItem("productoDetalleCodigo", codigo);
  window.location.href = "meds-detalle.html"; // Redirige a la página de detalles
}