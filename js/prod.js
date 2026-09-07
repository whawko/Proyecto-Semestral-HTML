let producto = JSON.parse(
    localStorage.getItem("producto")
);

document.getElementById("imagen").src =
    producto.imagen;

document.getElementById("nombre").textContent =
    producto.nombre;

document.getElementById("precio").textContent =
    "Precio: $"+ producto.precio;

document.getElementById("descripcion").textContent =
    producto.descripcion;