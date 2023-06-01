const menu = [
    {
      name: 'Home',
      link: '/',
      items: []
    },
    {
      name: 'About',
      link: '/about',
      items: []
    },
    {
      name: 'Products',
      link: '/products',
      items: [
        {
          name: 'Product 1',
          link: '/products/1',
          items: []
        },
        {
          name: 'Product 2',
          link: '/products/2',
          items: [
            {
              name: 'Product 2.1',
              link: '/products/2/1',
              items: []
            },
          ]
        },
      ]
    },
    {
      name: 'Services',
      link: '/services',
      items: [
        {
          name: 'Service 1',
          link: '/services/1',
          items: [
            {
              name: 'Service 1.1',
              link: '/services/1/1',
              items: []
            },
          ]
        },
        {
          name: 'Service 2',
          link: '/services/2',
          items: [
            {
              name: 'Service 2.1',
              link: '/services/2/1',
              items: []
            },
            {
              name: 'Service 2.2',
              link: '/services/2/2',
              items: []
            },
          ]
        },
      ]
    },
  ]


// Paso 1: Crear el contenedor principal ul
const ulContainer = document.createElement('ul');

// Paso 2: Recorrer la estructura de datos menu
menu.forEach(item => {
  // Crear un elemento li
  const li = document.createElement('li');

  // Agregar el nombre del elemento como texto dentro del li
  li.textContent = item.name;

  // Verificar si el elemento tiene elementos hijos (submenú)
  if (item.items.length > 0) {
    // Crear un submenú
    const subMenu = createSubMenu(item.items);
    li.appendChild(subMenu);
  }

  // Agregar el elemento li al contenedor ul
  ulContainer.appendChild(li);
});

// Paso 3: Agregar el contenedor ul al elemento deseado en el DOM
const menuContainer = document.getElementById('menu-container');
menuContainer.appendChild(ulContainer);

// Función para crear submenús de forma recursiva
function createSubMenu(items) {
  const subMenuUl = document.createElement('ul');

  items.forEach(subItem => {
    const subLi = document.createElement('li');
    subLi.textContent = subItem.name;

    if (subItem.items.length > 0) {
      const nestedSubMenu = createSubMenu(subItem.items);
      subLi.appendChild(nestedSubMenu);
    }

    subMenuUl.appendChild(subLi);
  });

  return subMenuUl;
}
