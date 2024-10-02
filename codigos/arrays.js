//6. Arrays en JavaScript
function arrays() {
    console.log("========== Arrays en JavaScript.==========");
    console.log("Array Numeros");
    
    let numeros = [1,2,3,4,5,6,7,8,9,10]
    console.log("Números originales: " +numeros.join(","));
    let numeroMultiplicado = numeros.map(element => element * 2);
    console.log("Números multiplicados por 2: " +numeroMultiplicado.join(","));
    
    
    let pares = [];
    for (let i = 1; i <= 20; i++) {
      if (i % 2 == 0) {
        pares.push(i);
      }
    }
    console.log("Array Pares");
    
    console.log("Primeros 10 números pares: " +pares.join(","));
    
    }
    