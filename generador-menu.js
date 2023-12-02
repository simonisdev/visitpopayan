// Define la estructura del menú en forma de objeto
const menuData = [
    { 
        type: 'logo',
        class: 'logo-alcaldia',
        href: 'https://www.popayan.gov.co/',
        target: '_blank',
        imgSrc: '/images/logo-alcaldia.png',
        imgAlt: 'Logo alcaldía de Popayán'
    },
    {
        type: 'logo',
        class: 'logo-cinecultivo',
        href: 'https://cinecultivo.com',
        target: '_blank',
        imgSrc: '/images/logo_cinecultivo.png',
        imgAlt: '' 
    },
    {
        type: 'link',
        class: 'link-contacto',
        href: 'contacto.html',
        text: 'Contacto'
    },
    {
        type: 'link',
        class: 'link-menu',
        href: '/parrilla.html',
        imgSrc: '/images/botones/menu.png',
        imgAlt: 'Boton menú',
        imgTitle: 'Menú de capítulos'
    }
  ];
  
  // Función para generar dinámicamente la sección del menú
  function generarMenu() {
    const menuContainer = document.getElementById('menu-container');
  
    menuData.forEach(item => {
      const menuItem = document.createElement(item.type === 'logo' ? 'a' : 'div');
      menuItem.className = item.class;
  
      if (item.type === 'logo') {
        menuItem.href = item.href;
        menuItem.target = item.target;
  
        const logoImg = document.createElement('img');
        logoImg.src = item.imgSrc;
        logoImg.alt = item.imgAlt;
  
        menuItem.appendChild(logoImg);
      } else {
        menuItem.innerHTML = `<div class="btn-${item.class}">${item.text || ''}</div>`;
  
        if (item.imgSrc) {
          const img = document.createElement('img');
          img.src = item.imgSrc;
          img.alt = item.imgAlt;
          img.title = item.imgTitle;
          menuItem.appendChild(img);
        }
  
        menuItem.addEventListener('click', () => {
          // Lógica de clic (puedes agregar acciones específicas aquí)
          console.log(`Clic en ${item.class}`);
        });
      }
  
      menuContainer.appendChild(menuItem);
    });
  }
  
  // Llama a la función para generar el menú al cargar la página
  document.addEventListener('DOMContentLoaded', generarMenu);
  