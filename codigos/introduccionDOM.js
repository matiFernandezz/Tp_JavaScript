//7. Introduccion al DOM
//Ejercicio 1 
function cambiarColor() {
    const parrafos = document.querySelectorAll('p')
    //Cambiar el color para cada parrafo
    parrafos.forEach(parrafo => parrafo.style.color = 'blue')
  }
  //Ejercicio 2
  function mostrarAlerta() {
    // Obtiene el valor del campo de texto
    const campoTexto = document.getElementById('campoTexto').value;
    // Muestra una alerta con el valor ingresado
    alert("Has ingresado: "+campoTexto);
  }