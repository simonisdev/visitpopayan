const capitulos = [
    {
      id: 'cap1',
      imagen: '/images/cap1_01.jpg',
      episodio: '1',
      titulo: 'Ciudad Bohemia',
      sinopsis: 'Ciudad Bohemia',
      youtubeID: 'ffEFNTG-PlI'
    },
    {
      id: 'cap2',
      imagen: '/images/cap2_01.jpg',
      episodio: '2',
      titulo: 'Popayán Construida por Mujeres',
      sinopsis: 'Popayán Construida por Mujeres',
      youtubeID: 'codigoVideo'
    },
    {
      id: 'cap3',
      imagen: '/images/cap3_01.jpg',
      episodio: '3',
      titulo: 'Popayán Capital de las Culturas',
      sinopsis: 'Popayán Capital de las Culturas',
      youtubeID: 'codigoVideo'
    },
    {
      id: 'cap4',
      imagen: '/images/cap4_01.jpg',
      episodio: '4',
      titulo: 'Gastronomía en Popayán',
      sinopsis: 'Gastronomía en Popayán',
      youtubeID: 'codigoVideo'
    },
    {
      id: 'cap5',
      imagen: '/images/cap5_01.jpg',
      episodio: '5',
      titulo: 'El Lenguaje de las Flores',
      sinopsis: 'El Lenguaje de las Flores',
      youtubeID: 'codigoVideo'
    },
    {
      id: 'cap6',
      imagen: '/images/cap6_01.jpg',
      episodio: '6',
      titulo: 'Ser Campesino por un Día',
      sinopsis: 'Ser Campesino por un Día',
      youtubeID: 'codigoVideo'
    },
    {
      id: 'cap7',
      imagen: '/images/cap7_01.jpg',
      episodio: '7',
      titulo: 'Popayán de Aventura',
      sinopsis: 'Popayán de Aventura',
      youtubeID: 'codigoVideo'
    },
    {
      id: 'cap8',
      imagen: '/images/cap8_01.jpg',
      episodio: '8',
      titulo: 'Un Viaje a las Estrellas',
      sinopsis: 'Un Viaje a las Estrellas',
      youtubeID: 'codigoVideo'
    },
    {
      id: 'cap9',
      imagen: '/images/cap9_01.jpg',
      episodio: '9',
      titulo: 'Popayán Ciudad de Pasión',
      sinopsis: 'Popayán Ciudad de Pasión',
      youtubeID: 'codigoVideo'
    },
    {
      id: 'cap10',
      imagen: '/images/cap10_01.jpg',
      episodio: '10',
      titulo: 'Popayán Ciudad del Amor Eterno',
      sinopsis: 'Popayán Ciudad del Amor Eterno',
      youtubeID: 'codigoVideo'
    }  
];

// Función para generar dinámicamente las miniaturas de los capítulos
function generarMiniaturas() {
  const submenuCapitulos = document.querySelector('.submenu-capitulos');

  capitulos.forEach(capitulo => {
    const enlaceCapitulo = document.createElement('a');
    enlaceCapitulo.href = 'contenido-' + capitulo.id + '.html'; // Asigna una URL única para cada capítulo.
    enlaceCapitulo.textContent = `Episodio ${capitulo.episodio}: ${capitulo.titulo}`;

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

    const enlaceCapitulo = document.createElement('a');
    enlaceCapitulo.href = `https://www.youtube.com/watch?v=${capitulo.youtubeID}`;
    enlaceCapitulo.target = '_blank'; // Abre el enlace en una nueva pestaña

    divCapitulo.appendChild(imgCapitulo);
    divCapitulo.appendChild(divSinopsis);

    seccionCapitulos.appendChild(divCapitulo);
  });
}

document.addEventListener('DOMContentLoaded', generarMiniaturas);