//Eventos en DOM
//Ejercicio 1
// Selecciona todos los elementos <li> dentro de la lista <ul> con id "miLista"
const lista = document.getElementById('Lista');
const elementos = lista.querySelectorAll('li');
// Agrega un evento click a cada elemento <li>
elementos.forEach(elemento => {
    elemento.addEventListener('click', () => {
        // Muestra el texto del elemento <li> en la consola
        
        console.log(elemento.textContent);
    });
});

//Ejercicio 2
function deshabilitarCampo() {
  const campoTexto = document.getElementById('campoTexto2');
  campoTexto.disabled = true;
  campoTexto.placeholder = "";
}

function habilitarCampo() {
  const campoTexto = document.getElementById('campoTexto2');
  campoTexto.disabled = false;
  campoTexto.placeholder = "Ingrese algo";
}
