// Base de datos completa desde el Excel
const baseDatos = [
    // --- CONSULTAS ---
    { id: "SV001", categoria: "Consultas", nombre: "Consulta general", precio: "$15.000", desc: "Perro / Gato (30 min)." },
    { id: "SV002", categoria: "Consultas", nombre: "Consulta urgencia", precio: "$25.000", desc: "Perro / Gato (30 min). Fuera de horario +$10.000" },
    { id: "SV003", categoria: "Consultas", nombre: "Control postoperatorio", precio: "$10.000", desc: "Perro / Gato (20 min)." },
    { id: "SV004", categoria: "Consultas", nombre: "Consulta ave / conejo", precio: "$18.000", desc: "Ave / Conejo (30 min)." },
    { id: "SV005", categoria: "Consultas", nombre: "Segunda opinión médica", precio: "$20.000", desc: "Todas las especies (40 min). Requiere ficha previa." },

    // --- VACUNACIÓN ---
    { id: "VA001", categoria: "Vacunación", nombre: "Vacuna antirrábica canina", precio: "$12.000", desc: "Perro (10 min). Obligatoria por ley." },
    { id: "VA002", categoria: "Vacunación", nombre: "Vacuna sextuple canina", precio: "$18.000", desc: "Perro (10 min). Refuerzo anual." },
    { id: "VA003", categoria: "Vacunación", nombre: "Vacuna bivalente felina", precio: "$15.000", desc: "Gato (10 min). Refuerzo anual." },
    { id: "VA004", categoria: "Vacunación", nombre: "Vacuna triple felina", precio: "$17.000", desc: "Gato (10 min). Refuerzo anual." },
    { id: "VA005", categoria: "Vacunación", nombre: "Vacuna Bordetella canina", precio: "$14.000", desc: "Perro (10 min). Tos de las perreras." },
    { id: "VA006", categoria: "Vacunación", nombre: "Vacuna antirrábica felina", precio: "$12.000", desc: "Gato (10 min)." },

    // --- CIRUGÍA ---
    { id: "CI001", categoria: "Cirugía", nombre: "Esterilización hembra canina", precio: "$80.000", desc: "Perra (90 min). Incluye anestesia y hospitalización 24h." },
    { id: "CI002", categoria: "Cirugía", nombre: "Esterilización macho canino", precio: "$60.000", desc: "Perro (60 min). Incluye anestesia." },
    { id: "CI003", categoria: "Cirugía", nombre: "Esterilización hembra felina", precio: "$65.000", desc: "Gata (60 min). Incluye anestesia y hospitalización 12h." },
    { id: "CI004", categoria: "Cirugía", nombre: "Esterilización macho felino", precio: "$50.000", desc: "Gato (45 min). Incluye anestesia." },
    { id: "CI005", categoria: "Cirugía", nombre: "Extirpación de tumor cutáneo", precio: "$120.000", desc: "Perro / Gato (60 min). Precio referencial; varía según tamaño." },
    { id: "CI006", categoria: "Cirugía", nombre: "Cesárea de urgencia", precio: "$180.000", desc: "Perra / Gata (120 min)." },

    // --- DESPARASITACIÓN ---
    { id: "DE001", categoria: "Desparasitación", nombre: "Desparasitación interna pequeños (<10 kg)", precio: "$8.000", desc: "Perro (5 min)." },
    { id: "DE002", categoria: "Desparasitación", nombre: "Desparasitación interna medianos (10-25 kg)", precio: "$9.500", desc: "Perro (5 min)." },
    { id: "DE003", categoria: "Desparasitación", nombre: "Desparasitación interna grandes (>25 kg)", precio: "$11.000", desc: "Perro (5 min)." },
    { id: "DE004", categoria: "Desparasitación", nombre: "Desparasitación interna felina", precio: "$8.000", desc: "Gato (5 min)." },
    { id: "DE005", categoria: "Desparasitación", nombre: "Antiparasitario externo (pipeta)", precio: "$7.500", desc: "Perro / Gato (5 min). Incluye aplicación." },

    // --- EXÁMENES ---
    { id: "EX001", categoria: "Exámenes", nombre: "Hemograma completo", precio: "$22.000", desc: "Perro / Gato (30 min). Resultado en 24-48 h." },
    { id: "EX002", categoria: "Exámenes", nombre: "Perfil bioquímico completo", precio: "$35.000", desc: "Perro / Gato (30 min). Resultado en 24-48 h." },
    { id: "EX003", categoria: "Exámenes", nombre: "Radiografía (1 proyección)", precio: "$28.000", desc: "Perro / Gato (20 min)." },
    { id: "EX004", categoria: "Exámenes", nombre: "Ecografía abdominal", precio: "$45.000", desc: "Perro / Gato (30 min)." },
    { id: "EX005", categoria: "Exámenes", nombre: "Test de leishmaniasis", precio: "$18.000", desc: "Perro (20 min)." },

    // --- OTROS ---
    { id: "OT001", categoria: "Otros", nombre: "Corte de uñas", precio: "$5.000", desc: "Perro / Gato (15 min)." },
    { id: "OT002", categoria: "Otros", nombre: "Limpieza dental", precio: "$55.000", desc: "Perro / Gato (45 min). Requiere anestesia." },
    { id: "OT003", categoria: "Otros", nombre: "Microchip identificación", precio: "$15.000", desc: "Perro / Gato (10 min). Incluye registro." },
    { id: "OT004", categoria: "Otros", nombre: "Hospitalización (por día)", precio: "$30.000", desc: "Perro / Gato (24 h). Incluye monitoreo y alimentación básica." }
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

    // Si no hay productos en esa categoría, mostramos un mensaje
    if (productosFiltrados.length === 0) {
        contenedor.innerHTML = `<div class="col-12"><p class="text-muted">No hay servicios disponibles en esta categoría por el momento.</p></div>`;
        return;
    }

    // 4. Dibujamos las tarjetas
    productosFiltrados.forEach(prod => {
        const div = document.createElement('div');
        div.className = 'col hover-card'; 
        div.innerHTML = `
            <div class="card h-100 shadow-sm border-0 p-3">
                <div class="card-body d-flex flex-column">
                    <span class="badge bg-secondary mb-2 align-self-start">${prod.id}</span>
                    <h5 class="fw-bold text-primary mb-2">${prod.nombre}</h5>
                    <p class="text-muted small flex-grow-1">${prod.desc}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3 border-top pt-3">
                        <span class="fw-bold fs-5 text-dark">${prod.precio}</span>
                        <button class="btn btn-sm btn-outline-primary"><i class="bi bi-cart-plus"></i> Seleccionar</button>
                    </div>
                </div>
            </div>
        `;

        // Al hacer clic, guardamos el servicio y pasamos a prod.html
        div.addEventListener('click', () => {
            localStorage.setItem('productoSeleccionado', JSON.stringify(prod));
            window.location.href = 'prod.html';
        });

        contenedor.appendChild(div);
    });
});