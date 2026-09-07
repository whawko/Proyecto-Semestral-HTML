// Base de datos simulada (aquí va la info de tu Excel)
const baseDatos = [
    { id: 1, categoria: "Consultas", nombre: "Consulta General", precio: "$15.000", desc: "Revisión completa para perros y gatos (30 min)." },
    { id: 2, categoria: "Consultas", nombre: "Consulta de Urgencia", precio: "$25.000", desc: "Atención inmediata sin agendamiento." },
    { id: 3, categoria: "Vacunación", nombre: "Vacuna Antirrábica", precio: "$12.000", desc: "Obligatoria por ley. Incluye certificado oficial." },
    { id: 4, categoria: "Vacunación", nombre: "Vacuna Óctuple", precio: "$18.000", desc: "Protección anual múltiple para perros." },
    { id: 5, categoria: "Cirugía", nombre: "Esterilización Felina", precio: "$35.000", desc: "Procedimiento seguro con anestesia inhalatoria." },
    { id: 6, categoria: "Desparasitación", nombre: "Pastilla Nexgard", precio: "$15.000", desc: "Protección masticable contra pulgas y garrapatas." },
    { id: 7, categoria: "Exámenes", nombre: "Perfil Bioquímico", precio: "$30.000", desc: "Análisis de sangre completo de laboratorio." },
    { id: 8, categoria: "Otros", nombre: "Corte de Uñas", precio: "$5.000", desc: "Mantenimiento básico ambulatorio." }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Recuperamos la categoría desde el LocalStorage
    const categoriaElegida = localStorage.getItem('categoriaSeleccionada');

    // Si alguien entra directo a cat.html sin elegir categoría, lo devolvemos
    if (!categoriaElegida) {
        window.location.href = 'catalogo.html';
        return;
    }

    // 2. Actualizamos el título de la página
    document.getElementById('titulo-categoria').innerText = categoriaElegida;

    // 3. Filtramos la base de datos
    const productosFiltrados = baseDatos.filter(prod => prod.categoria === categoriaElegida);
    const contenedor = document.getElementById('contenedor-productos');

    // 4. Dibujamos las tarjetas
    productosFiltrados.forEach(prod => {
        const div = document.createElement('div');
        div.className = 'col hover-card'; // Reutilizamos tu clase hover-card
        div.innerHTML = `
            <div class="card h-100 shadow-sm border-0 p-3">
                <div class="card-body d-flex flex-column">
                    <h5 class="fw-bold text-primary mb-2">${prod.nombre}</h5>
                    <p class="text-muted small flex-grow-1">${prod.desc}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3 border-top pt-3">
                        <span class="fw-bold fs-5 text-dark">${prod.precio}</span>
                        <button class="btn btn-sm btn-outline-primary">Ver detalle</button>
                    </div>
                </div>
            </div>
        `;

        // Al hacer clic en un servicio, guardamos sus datos y vamos al último paso (prod.html)
        div.addEventListener('click', () => {
            localStorage.setItem('productoSeleccionado', JSON.stringify(prod));
            window.location.href = 'prod.html';
        });

        contenedor.appendChild(div);
    });
});