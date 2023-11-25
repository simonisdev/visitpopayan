const capitulos = [
  {
      id: 'capitulo1',
      imagen: '/images/cap1_01.jpg',
      titulo: 'Capítulo 1',
      sinopsis: 'Ciudad Bohemia',
      youtubeID: 'ffEFNTG-PlI' },
  {
      id: 'capitulo2',
      imagen: '/images/cap2_01.jpg',
      titulo: 'Capítulo 2',
      sinopsis: 'Popayán Construida por Mujeres',
      youtubeID: 'codigoVideo' },
  {
      id: 'capitulo3',
      imagen: '/images/cap3_01.jpg',
      titulo: 'Capítulo 3',
      sinopsis: 'Popayán Capital de las Culturas',
      youtubeID: 'codigoVideo' },
  {
      id: 'capitulo4',
      imagen: '/images/cap4_01.jpg',
      titulo: 'Capítulo 4',
      sinopsis: 'Gastronomía en Popayán',
      youtubeID: 'codigoVideo' },
  {
      id: 'capitulo5',
      imagen: '/images/cap5_01.jpg',
      titulo: 'Capítulo 5',
      sinopsis: 'El Lenguaje de las Flores',
      youtubeID: 'codigoVideo' },    
  {
      id: 'capitulo6',
      imagen: '/images/cap6_01.jpg',
      titulo: 'Capítulo 6',
      sinopsis: 'Ser Campesino por un Día',
      youtubeID: 'codigoVideo' },
  {
      id: 'capitulo7',
      imagen: '/images/cap7_01.jpg',
      titulo: 'Capítulo 7',
      sinopsis: 'Popayán de Aventura',
      youtubeID: 'codigoVideo' },
  {
      id: 'capitulo8',
      imagen: '/images/cap8_01.jpg',
      titulo: 'Capítulo 8',
      sinopsis: 'Un Viaje a las Estrellas',
      youtubeID: 'codigoVideo' },        
  {
      id: 'capitulo9',
      imagen: '/images/cap9_01.jpg',
      titulo: 'Capítulo 9',
      sinopsis: 'Popayán Ciudad de Pasión',
      youtubeID: 'codigoVideo' },        
  {
      id: 'capitulo10',
      imagen: '/images/cap10_01.jpg',
      titulo: 'Capítulo 10',
      sinopsis: 'Popayán Ciudad del Amor Eterno',
      youtubeID: 'codigoVideo' },
];

// Función para generar dinámicamente las miniaturas de los capítulos
function generarMiniaturas() {

  const submenuCapitulos = document.querySelector('.submenu-capitulos');

capitulos.forEach(capitulo => {
  const enlaceCapitulo = document.createElement('a');
  enlaceCapitulo.href = 'contenido-' + capitulo.id + '.html';
  // Asigna una URL única para cada capítulo.

  enlaceCapitulo.textContent = capitulo.titulo;

  const liCapitulo = document.createElement('li');
  liCapitulo.appendChild(enlaceCapitulo);

  submenuCapitulos.appendChild(liCapitulo);
});

  const seccionCapitulos = document.querySelector('.capitulos');

  capitulos.forEach(capitulo => {

    const divCapitulo = document.createElement('div');
    divCapitulo.classList.add('capitulo');

    const imgCapitulo = document.createElement('img');
    imgCapitulo.src = capitulo.imagen;
    imgCapitulo.alt = capitulo.titulo;

    const divSinopsis = document.createElement('div');
    divSinopsis.classList.add('sinopsis');
    divSinopsis.textContent = capitulo.sinopsis;

    // divCapitulo.addEventListener('click', function () {
    //   window.location.href = '/' + capitulo.id + '.html';
    //   });
    
    // Modifica este enlace para apuntar a los videos de YouTube
  const enlaceCapitulo = document.createElement('a');
  // enlaceCapitulo.href = `https://www.youtube.com/watch?v=${capitulo.youtubeID}`;
  enlaceCapitulo.href = `https://www.youtube.com/watch?v=${capitulo.youtubeID}`;
  enlaceCapitulo.target = '_blank'; // Abre el enlace en una nueva pestaña

    divCapitulo.appendChild(imgCapitulo);
    divCapitulo.appendChild(divSinopsis);

    seccionCapitulos.appendChild(divCapitulo);
    

  });
}

// Llamada a la función para generar las miniaturas al cargar la página
document.addEventListener('DOMContentLoaded', generarMiniaturas);


document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');

  let counter = 1;

  setInterval(() => {
    counter++;
    if (counter > slides.length) {
      counter = 1;
    }

    slider.style.transform = `translateX(${-counter * 100}%)`;
  }, 3000); // Cambia de imagen cada 3 segundos (ajusta según tus preferencias)
});