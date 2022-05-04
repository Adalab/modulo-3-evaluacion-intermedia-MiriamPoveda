# Módulo 3

## Evaluación intermedia 📋

Vamos a recordar la serie de televisión "Friends", y vamos a hacer una aplicación que nos permita gestionar
la frases de los personajes de esta serie, y lo vamos a hacer con React!

## Pasos a seguir 📋

1. Crear repositorio
   - Crear a través del enlace facilitado en el enunciado.
   - Clonar en nuestro local.
2. Crear estructura la aplicación de React
   - Introducir nuestro template de React SK!
3. Base de HTML
   - Añadir la estructura necesaria para llevar a cabo el ejercicio:
   - Cabecera para el título y filtrar.
   - Lista para las frases predefinidas.
   - Espacio para añadir nueva frase/personaje.
4. **OPCIÓN 1** Importar datos con JSON
   - Exportar los datos de la _API_ en una carpeta llamada _data_
   - Importar datos con su ruta correspondiente.
5. **OPCIÓN 2** Importar datos con FETCH
   - Exportar la función del _fetch_ en una carpeta llamada _services_.
   - Importar _useEffects_.
   - Importar datos con su ruta correspondiente.
   - Crear una variable de estado.
   - Crear la función de _useEffects_ añadiendo el _set_ de la variable de estado.
     `IMPORTANTE - Si utilizamos _fetch_ la variable de estado del _map_ y de otros apartados será la que va vinculada al _fetch_.`
6. Pintar los datos
   - Importar _useState_.
   - Crear una variable de estado.
   - Crear un _map_ para pintar en _HTML_.
7. Añadir
   `IMPORTANTE - Utilizar las variables de estado para definir cada parte del proceso.`
   - Crear evento con funciones manejadoras en los _input_ (onChange) y en el _botón_ (onClick).
   - Controlarlos con el _value_ (no es necesario en el _botón_).
8. Filtrar por frase
   - Crear variable de estado con valor inicial vacío.
   - Crear evento con función manejadora (onChange) en el _input_.
   - Controlarlo con el _value_.
   - Añadir _filter_ (filtrar) antes del _map_ (pintar).
     - Cuando se escriba en el _input_ debe buscar y filtrar cada frase si incluye (_includes_) la letra/palabra que se escribe en el _input_.
9. Filtrar por personaje
   `IMPORTANTE - Seguir los mismos pasos del punto 8.`
   - Añadir _value_ a las _options_.
   - Filtrar con condicionales antes del _map_.
   - Añadir valor inicial con _All_ a la variable de estado.
10. LocalStorage (vinculado al **FETCH**)
    - Crear archivo _js_ con la función del _LS_ en la carpeta _services_.
    - Importar el archivo.
    - Añadir _LS_ a la variable del _fetch_.
    - Añadir a la función manejadora y a donde añadimos un nuevo elemento el _localStorage.set_.
    - Añadir también al _fetch_ con una condición para que te guarde los datos si los encuentra.
11. Maquetación personalizada
    `¡¡Elige tu propio estilo!!`

📌 .................................................................📌

⚙️ Herramientas utilizadas ⚙️

- Visual Studio Code
- GitHub
- Git
- React SK!

⌨️ Lenguajes utilizados ⌨️

- HTML
- SASS ~~ Uso de partials y anidaciones
- Librería de React

📌 .................................................................📌

Miriam Poveda 😊
