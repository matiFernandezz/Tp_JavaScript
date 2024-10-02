# Desarrollo de Software - Trabajo Práctico de JavaScript

## Autor

**Matias Fernández** - Legajo: **49483** - Comisión **3K10**

## Descripción 

Este es un proyecto práctico de JavaScript utilizando Vite, que cubre varios temas fundamentales del lenguaje, tales como operadores, funciones, manipulación del DOM, manejo de eventos y uso del Local Storage. Cada sección contiene ejercicios interactivos para que el usuario pueda practicar diferentes aspectos del lenguaje.

## Estructura del proyecto

## Estructura del Proyecto

El proyecto está organizado en diferentes secciones, cada una con un enfoque en un tema específico de JavaScript. La estructura del proyecto es la siguiente:

```plaintext
|-- index.html  # Archivo principal que estructura el contenido

|-- style.css   # Hoja de estilos del proyecto

|-- codigos/   
|   |-- introduccion.js  # Código para la sección "Introducción a JavaScript"
|   |-- operadoresLogicos.js   # Código para la sección "Operadores lógicos y condicionales"
|   |-- operadoresAsignacion.js # Código para la sección "Operadores de asignación y bucles"
|   |-- funciones.js  # Código para la sección "Funciones de JavaScript"
|   |-- objetos.js   # Código para la sección "Objetos en JavaScript"
|   |-- arrays.js  # Código para la sección "Arrays en JavaScript"
|   |-- introduccionDOM.js   # Código para la sección "Introducción al DOM"
|   |-- eventosDOM.js  # Código para la sección "Eventos en DOM"
|   |-- localStorage.js  # Código para la sección "Local Storage"
```

### `index.html`

Este archivo define la estructura básica de la página web, incluyendo:
- Un título principal.
- Secciones para demostrar conceptos de JavaScript.
- Un formulario para manejar el almacenamiento de correos electrónicos en `localStorage`.
- Botones para ejecutar funciones JavaScript.

### `style.css`
El archivo `style.css` define los estilos del proyecto, proporcionando una interfaz limpia y organizada. Algunos de sus principales aspectos son:

- **Body**: Fuente base, fondo suave, y uso de `flexbox` para centrar el contenido vertical y horizontalmente.
- **Grid Layout**: La clase `contenedorSecciones` utiliza un diseño de **grid** con tres columnas y un espacio uniforme entre las secciones, permitiendo una distribución responsiva del contenido.
- **Secciones**: Cada sección está envuelta en una caja con fondo blanco, bordes redondeados, sombras sutiles, y espacio uniforme gracias al uso de **grid**.
- **Botones y formularios**: Estilos personalizados con botones que cambian de color al pasar el cursor, y formularios centrados.

El uso de `grid` en el diseño asegura que las secciones se distribuyan de manera eficiente, mejorando la estructura visual del proyecto.

### `codigos`

Esta carpeta contiene los archivos JavaScript que implementan las diferentes secciones del proyecto:
- Ejecutar ejemplos de secciones de JavaScript (Operadores, Bucles, Funciones, Objetos, Arrays).
- Manejar eventos del DOM como cambiar colores y mostrar alertas.
- Administrar el almacenamiento de correos electrónicos en `localStorage`, incluyendo funciones para guardar, mostrar y eliminar correos electrónicos.

## Funcionalidades de las secciones

- **1 a 6**: Al hacer clic en los botones correspondientes, se ejecutan diferentes ejemplos de código JavaScript.
 - **7 - Introducción al DOM**: Permite interactuar con el DOM, como cambiar colores de elementos y generar alertas basadas en la entrada del usuario.
 - **8 - Eventos en DOM**: Gestiona eventos como clics en una lista y la activación o desactivación de campos de texto.
- **9 - Local Storage**: Guarda y muestra direcciones de correo electrónico utilizando `localStorage`, con la opción de eliminarlas cuando sea necesario.

## Cómo Ejecutar el Proyecto

1. **Clona el repositorio**:

    ```bash
    git clone https://github.com/matiFernandezz/Tp_JavaScript
    ```

2. **Navega al directorio del proyecto**:

    ```bash
    cd tp_JavaScript
    ```

3. **Instala las dependencias con Vite**:

    ```bash
    npm install
    ```

4. **Inicia el servidor de desarrollo**:

    ```bash
    npm run dev
    ```

5. **Abre el archivo `index.html` en tu navegador** para ver la página web en acción.

## Tecnologías Implementadas

- **HTML5**: Estructura del documento.
- **CSS3**: Estilos para la presentación visual.
- **JavaScript**: Lógica de los ejercicios y funcionalidades interactivas.
- **DOM Manipulation**: Manipulación de los elementos del DOM.
- **Local Storage**: Almacenamiento local en el navegador.

