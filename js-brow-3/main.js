// Obtener elementos del DOM
const form = document.querySelector('form');
const input = document.querySelector('input');
const section = document.querySelector('section');

// Manejar el evento de enviar el formulario
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = input.value;
  localStorage.setItem('name', name);

  showName();
});

// Función para mostrar el nombre guardado en localStorage
function showName() {
  const name = localStorage.getItem('name');
  section.innerHTML = `
    <h2>Nombre guardado:</h2>
    <p>${name}</p>
    <button id="deleteButton">Borrar</button>
  `;

  const deleteButton = document.getElementById('deleteButton');
  deleteButton.addEventListener('click', deleteName);
}

// Función para borrar el nombre guardado en localStorage
function deleteName() {
  localStorage.removeItem('name');
  showName();
}

// Mostrar el nombre guardado al cargar la página
showName();
