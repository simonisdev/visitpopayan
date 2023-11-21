let header__background = document.getElementById('header__background');
let contador = 0;

function cambioColor() {
 if (contador == 0) {
    header__background.style.backgroundColor = 'red';
 } else if (contador == 1) {
    header__background.style.backgroundColor = 'blue';
 } else if (contador == 2) {
    header__background.style.backgroundColor = 'green';
 } else if (contador == 3) {
    header__background.style.backgroundColor = 'yellow';
    contador = -1; // reiniciar el contador
 }
 contador++;
}

// Cambiar el color cada 3 segundos
setInterval(cambioColor, 3000);