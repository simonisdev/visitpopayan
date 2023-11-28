const capitulos = [
    {
      id: 'cap1',
      imagen: '/images/miniaturas/cap1_01.png',
      episodio: '1',
      titulo: 'Ciudad Bohemia',
      sinopsis: 'Sinopsis: Ciudad Bohemia',
      youtubeID: 'ffEFNTG-PlI'
    },
    {
      id: 'cap2',
      imagen: '/images/miniaturas/cap2_01.png',
      episodio: '2',
      titulo: 'Popayán Construida por Mujeres',
      sinopsis: 'Sinopsis: Popayán Construida por Mujeres',
      youtubeID: 'codigoVideo'
    },
    {
      id: 'cap3',
      imagen: '/images/miniaturas/cap3_01.png',
      episodio: '3',
      titulo: 'Popayán Capital de las Culturas',
      sinopsis: 'Sinopsis: Popayán Capital de las Culturas',
      youtubeID: 'codigoVideo'
    },
    {
      id: 'cap4',
      imagen: '/images/miniaturas/cap4_01.png',
      episodio: '4',
      titulo: 'Gastronomía en Popayán',
      sinopsis: 'Sinopsis: Gastronomía en Popayán',
      youtubeID: 'codigoVideo'
    },
    {
      id: 'cap5',
      imagen: '/images/miniaturas/cap5_01.png',
      episodio: '5',
      titulo: 'El Lenguaje de las Flores',
      sinopsis: 'Sinopsis: El Lenguaje de las Flores',
      youtubeID: 'codigoVideo'
    },
    {
      id: 'cap6',
      imagen: '/images/miniaturas/cap6_01.png',
      episodio: '6',
      titulo: 'Ser Campesino por un Día',
      sinopsis: 'Sinopsis: Ser Campesino por un Día',
      youtubeID: 'codigoVideo'
    },
    {
      id: 'cap7',
      imagen: '/images/miniaturas/cap7_01.png',
      episodio: '7',
      titulo: 'Popayán de Aventura',
      sinopsis: 'Sinopsis: Popayán de Aventura',
      youtubeID: 'codigoVideo'
    },
    {
      id: 'cap8',
      imagen: '/images/miniaturas/cap8_01.png',
      episodio: '8',
      titulo: 'Un Viaje a las Estrellas',
      sinopsis: 'Sinopsis: Un Viaje a las Estrellas',
      youtubeID: 'codigoVideo'
    },
    {
      id: 'cap9',
      imagen: '/images/miniaturas/cap9_01.png',
      episodio: '9',
      titulo: 'Popayán Ciudad de Pasión',
      sinopsis: 'Sinopsis: Popayán Ciudad de Pasión',
      youtubeID: 'codigoVideo'
    },
    {
      id: 'cap10',
      imagen: '/images/miniaturas/cap10_01.png',
      episodio: '10',
      titulo: 'Popayán Ciudad del Amor Eterno',
      sinopsis: 'Sinopsis: Popayán Ciudad del Amor Eterno',
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

    // const divSinopsis = document.createElement('div');
    // divSinopsis.classList.add('sinopsis');
    // divSinopsis.textContent = capitulo.sinopsis;

    const divTitulo = document.createElement('div');
    divTitulo.classList.add('titulo');
    divTitulo.textContent = `Capitulo `+capitulo.episodio+` - `+capitulo.titulo;

    divCapitulo.addEventListener('click', function () {
      window.location.href = '/capitulo' + capitulo.episodio + '.html';
      });

    // const enlaceCapitulo = document.createElement('a');
    // enlaceCapitulo.href = `https://www.youtube.com/watch?v=${capitulo.youtubeID}`;
    // enlaceCapitulo.target = '_blank'; // Abre el enlace en una nueva pestaña

    divCapitulo.appendChild(imgCapitulo);
    // divCapitulo.appendChild(divSinopsis);
    divCapitulo.appendChild(divTitulo);

    seccionCapitulos.appendChild(divCapitulo);
  });
}

document.addEventListener('DOMContentLoaded', generarMiniaturas);