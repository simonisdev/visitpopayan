const capitulos = [
    {
      id: 'capitulo1',
      imagen: '/images/cap1_01.jpg',
      titulo: 'Capítulo 1',
      sinopsis: 'Ciudad Bohemia',
      youtubeID: 'ffEFNTG-PlI&t' },
    {
        id: 'capitulo2',
        imagen: '/images/cap2_01.jpg',
        titulo: 'Capítulo 2',
        sinopsis: 'Popayán Construida por Mujeres',
        youtubeID: 'ffEFNTG-PlI&t' },
    {
        id: 'capitulo3',
        imagen: '/images/cap3_01.jpg',
        titulo: 'Capítulo 3',
        sinopsis: 'Popayán Capital de las Culturas' },
    {
        id: 'capitulo4',
        imagen: '/images/cap4_01.jpg',
        titulo: 'Capítulo 4',
        sinopsis: 'Gastronomía en Popayán' },
    {
        id: 'capitulo5',
        imagen: '/images/cap5_01.jpg',
        titulo: 'Capítulo 5',
        sinopsis: 'El Lenguaje de las Flores' },    
    {
        id: 'capitulo6',
        imagen: '/images/cap6_01.jpg',
        titulo: 'Capítulo 6',
        sinopsis: 'Ser Campesino por un Día' },
    {
        id: 'capitulo7',
        imagen: '/images/cap7_01.jpg',
        titulo: 'Capítulo 7',
        sinopsis: 'Popayán de Aventura' },
    {
        id: 'capitulo8',
        imagen: '/images/cap8_01.jpg',
        titulo: 'Capítulo 8',
        sinopsis: 'Un Viaje a las Estrellas' },        
    {
        id: 'capitulo9',
        imagen: '/images/cap9_01.jpg',
        titulo: 'Capítulo 9',
        sinopsis: 'Popayán Ciudad de Pasión' },        
    {
        id: 'capitulo10',
        imagen: '/images/cap10_01.jpg',
        titulo: 'Capítulo 10',
        sinopsis: 'Popayán Ciudad del Amor Eterno' },
  ];
  
  // Función para generar dinámicamente las miniaturas de los capítulos
  function generarMiniaturas() {
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
  
      // Modifica este enlace para apuntar a los videos de YouTube
      const enlaceCapitulo = document.createElement('a');
      enlaceCapitulo.href = `https://www.youtube.com/watch?v=${capitulo.youtubeID}`;
      enlaceCapitulo.target = '_blank'; // Abre el enlace en una nueva pestaña
  
      enlaceCapitulo.appendChild(imgCapitulo);
      divCapitulo.appendChild(enlaceCapitulo);
      divCapitulo.appendChild(divSinopsis);
  
      seccionCapitulos.appendChild(divCapitulo);
    });
  }
  