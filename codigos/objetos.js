//5. Objetos en JavaScript
function objetos() {
    console.log("========== Objetos en JavaScript.==========");
  
    let persona = {
      nombre: "Matias",
      edad: 23,
      ciudad: "Cordoba",
      cambiarCiudad: function (nuevaCiudad) {
        this.ciudad = nuevaCiudad;
      }
    };
    console.log("Objeto persona");
    console.log(`Persona:  ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);
  
    persona.cambiarCiudad("Mendoza");
    
    console.log(`Actualizado ==> Persona:  ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);
    
    let libro = {
      titulo: "Romeo y Julieta",
      autor: "William Shakespeare",
      año: 1595,
      esAntiguo: function () {
        let añoActual = new Date().getFullYear();
        if ((añoActual - this.año) > 10 ){
          return true;
        } else {
          return false;
        }
      }
    };
  
    console.log("Objeto libro");
    console.log(`Libro: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.año}`);
    console.log(`El libro "${libro.titulo}" es antiguo: ${libro.esAntiguo()}`);
    
  }