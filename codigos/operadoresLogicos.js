//2. Operadores logicos y condicionales 
function operadores() {
    console.log("========== Operadores lógicos y condicionales.==========");
    
      let a = 14;
      let b = 10;
      let c = (a > b) ? a : b;
      console.log("El valor de a es: "+a);
      console.log("El valor de b es: "+b);
      console.log("El mayor entre a y b es: "+c);
    
      let numero = prompt("Ingresa un número y te dire si es par o impar")
    
      if (numero % 2 == 0) {
        console.log("El número "+numero+" es par");
        
      } else {
        console.log("El número "+numero+" es impar");
      }
    }