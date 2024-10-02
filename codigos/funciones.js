//4. Funciones de JavaScript
function funciones() {
    console.log("========== Funciones de JavaScript.==========");
    function esPar(numero) {
      return "El número " + numero + " es par: " + (numero % 2 === 0);
    }
    console.log("Función esPar");
    console.log(esPar(8));
    console.log(esPar(7));
    console.log(esPar(6));
    console.log(esPar(5));
    
    function convertirCelciusAFahrenheit (celcius) {
      return celcius + "°C son equivalentes a " + (celcius * 1.8 + 32) + "°F";
    }
    console.log("Función Celcius a Fahrenheit");
    console.log(convertirCelciusAFahrenheit(30));
  }