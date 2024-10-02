//3.Operadores de asignación y bucles 
function operadoresAsignacion() {
    console.log("========== Operadores de asignación y bucles.==========");
    console.log("Bucle While");
    let num = 10;
    while (num > 0){
      console.log(num);
      num = num - 1;
    }
  
    console.log("bucle do while");
    let numero;
    do{
    numero = prompt("Ingrese un número mayor a 100:")
    numero = Number(numero);
    } while (numero <= 100);
    console.log("Ingresaste un número mayor a 100: " +numero);
    
  }