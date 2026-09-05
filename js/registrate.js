
document.addEventListener('DOMContentLoaded', () => {
  const regionSelect = document.getElementById('region');
  const comunaSelect = document.getElementById('comuna');
  const form = document.getElementById('registerForm');

  // Mapeo de comunas por región
  const comunasPorRegion = {
    rm: ['Santiago', 'Providencia', 'Las Condes', 'Ñuñoa', 'Maipú'],
    valparaiso: ['Valparaíso', 'Viña del Mar', 'Concón', 'Quilpué'],
    biobio: ['Concepción', 'Talcahuano', 'San Pedro de la Paz', 'Chillán']
  };

  // Cargar comunas al cambiar la región
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


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario enviado con éxito');
  });
});