var indiceImagenActual = 0;
var imagenes = document.querySelectorAll('.galeria-item img');

function mostrarPopup(indice) {
    indiceImagenActual = indice;
    var src = imagenes[indice].getAttribute('src');
    document.getElementById('imagenAmpliada').src = src;
    document.getElementById('popupImagen').style.display = "block";
}

function cerrarPopup() {
    document.getElementById('popupImagen').style.display = "none";
}

function cambiarImagen(direccion) {
    indiceImagenActual += direccion;
    if (indiceImagenActual >= imagenes.length) {
        indiceImagenActual = 0;
    } else if (indiceImagenActual < 0) {
        indiceImagenActual = imagenes.length - 1;
    }
    mostrarPopup(indiceImagenActual);
}

// Agrega el evento click a cada imagen de la galería
imagenes.forEach((imagen, indice) => {
    imagen.addEventListener('click', () => mostrarPopup(indice));
});
