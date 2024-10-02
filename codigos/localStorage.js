//Local Storage
//Ejercicio1
// Seleccionamos los elementos del DOM
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const emailDisplay = document.getElementById('emailGuardado');
const deleteButton = document.getElementById('borrarEmail');

// Función para mostrar el correo en el DOM si está almacenado
function displayStoredEmail() {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
        emailDisplay.textContent = `Correo guardado: ${storedEmail}`;
        deleteButton.style.display = 'inline'; // Mostrar el botón de eliminar
    } else {
        emailDisplay.textContent = ''; // Ocultar el texto si no hay email
        deleteButton.style.display = 'none'; // Ocultar el botón de eliminar
    }
}

// Escuchar el evento de envío del formulario
emailForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el envío del formulario
    const email = emailInput.value;

    // Guardar el correo en localStorage
    localStorage.setItem('email', email);

    // Mostrar el correo en el DOM
    displayStoredEmail();
});

// Eliminar el correo de localStorage
deleteButton.addEventListener('click', function() {
    localStorage.removeItem('email');
    displayStoredEmail();
});

// Mostrar el correo guardado al cargar la página
document.addEventListener('DOMContentLoaded', displayStoredEmail);