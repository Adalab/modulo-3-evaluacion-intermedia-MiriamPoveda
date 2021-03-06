# M贸dulo 3

## Evaluaci贸n intermedia 馃搵

Vamos a recordar la serie de televisi贸n "Friends", y vamos a hacer una aplicaci贸n que nos permita gestionar
la frases de los personajes de esta serie, y lo vamos a hacer con React!

## Pasos a seguir 馃搵

1. Crear repositorio
   - Crear a trav茅s del enlace facilitado en el enunciado.
   - Clonar en nuestro local.
2. Crear estructura la aplicaci贸n de React
   - Introducir nuestro template de React SK!
3. Base de HTML
   - A帽adir la estructura necesaria para llevar a cabo el ejercicio:
   - Cabecera para el t铆tulo y filtrar.
   - Lista para las frases predefinidas.
   - Espacio para a帽adir nueva frase/personaje.
4. **OPCI脫N 1** Importar datos con JSON
   - Exportar los datos de la _API_ en una carpeta llamada _data_
   - Importar datos con su ruta correspondiente.
5. **OPCI脫N 2** Importar datos con FETCH
   - Exportar la funci贸n del _fetch_ en una carpeta llamada _services_.
   - Importar _useEffects_.
   - Importar datos con su ruta correspondiente.
   - Crear una variable de estado.
   - Crear la funci贸n de _useEffects_ a帽adiendo el _set_ de la variable de estado.
     `IMPORTANTE - Si utilizamos _fetch_ la variable de estado del _map_ y de otros apartados ser谩 la que va vinculada al _fetch_.`
6. Pintar los datos
   - Importar _useState_.
   - Crear una variable de estado.
   - Crear un _map_ para pintar en _HTML_.
7. A帽adir
   `IMPORTANTE - Utilizar las variables de estado para definir cada parte del proceso.`
   - Crear evento con funciones manejadoras en los _input_ (onChange) y en el _bot贸n_ (onClick).
   - Controlarlos con el _value_ (no es necesario en el _bot贸n_).
8. Filtrar por frase
   - Crear variable de estado con valor inicial vac铆o.
   - Crear evento con funci贸n manejadora (onChange) en el _input_.
   - Controlarlo con el _value_.
   - A帽adir _filter_ (filtrar) antes del _map_ (pintar).
     - Cuando se escriba en el _input_ debe buscar y filtrar cada frase si incluye (_includes_) la letra/palabra que se escribe en el _input_.
9. Filtrar por personaje
   `IMPORTANTE - Seguir los mismos pasos del punto 8.`
   - A帽adir _value_ a las _options_.
   - Filtrar con condicionales antes del _map_.
   - A帽adir valor inicial con _All_ a la variable de estado.
10. LocalStorage (vinculado al **FETCH**)
    - Crear archivo _js_ con la funci贸n del _LS_ en la carpeta _services_.
    - Importar el archivo.
    - A帽adir _LS_ a la variable del _fetch_.
    - A帽adir a la funci贸n manejadora y a donde a帽adimos un nuevo elemento el _localStorage.set_.
    - A帽adir tambi茅n al _fetch_ con una condici贸n para que te guarde los datos si los encuentra.
11. Maquetaci贸n personalizada
    `隆隆Elige tu propio estilo!!`

馃搶 .................................................................馃搶

鈿欙笍 Herramientas utilizadas 鈿欙笍

- Visual Studio Code
- GitHub
- Git
- React SK!

鈱笍 Lenguajes utilizados 鈱笍

- HTML
- SASS ~~ Uso de partials y anidaciones
- Librer铆a de React

馃搶 .................................................................馃搶

Miriam Poveda 馃槉
