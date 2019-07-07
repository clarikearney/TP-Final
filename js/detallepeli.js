/* UX (User eXperience)
¿Qué siente mientras interactúa?
Es aquello que una persona percibe al interactuar con un producto o servicio. Logramos una buena UX al enfocarnos en diseñar productos útiles, usables y deseables, lo cual influye en que el usuario se sienta satisfecho, feliz y encantado. */

// Usabilidad o UI
// Con lo que interactúa
// La Usabilidad es un atributo de una buena experiencia de usuario y la UI o Interfaz del Usuario es con lo que se interactúa.




// js que me tira el detalle de las peliculas con toda la info
window.addEventListener("load", function() {
  // un evento es algo que pasa en el navegador o q es ejecutado x usuario


  // ¿Qué son las funciones?
  // Secuencia lógica de instrucciones que realizan acciones (bloque de código asignado para hacer una tarea)
  // Para recibir las instrucciones pueden recibir cosas y retornar cosas
  // 1º invoco a la función, luego () para que sea ejecutada

  // una variable es como si fuera una caja que contiene lo que quisieramos
  // En la caja que utilicemos solo podemos guardar una sola cosa!!!!
  // los arrays pueden almacenar más de un valor al mismo tiempo y podemos acceder a ellos de manera independiente
  // Disponen de un índice (index) que permite especificar la posición de cada elemento que contienen
  // Permiten organizar series de datos que comparten el mismo nombre pero se diferencian por un índice
  // Como trabajamos con themoviedb (muuuuchos elementos) vamos a trabajar con arrays
  var imgPath = "https://image.tmdb.org/t/p/original"
  var idDePelicula = new URLSearchParams(window.location.search).get("idDePelicula")

 // INICIO BLOQUE 1 - Leer el array de storage

   // Paso 1 - Leo de localStorage
   var jsonFavoritas = localStorage.getItem("peliculasFavoritas")
// si json me dice que no tiene favoritas (== indica igualdad)
   if (jsonFavoritas == null) {
     var favoritas = [] // creo un array de favoritas
   } else {
     // Paso 2 - Desempaqueto el json
     var favoritas = JSON.parse(jsonFavoritas)

   }
   // CIERRA BLOQUE 1
// procedo a hacer el fetch, los then y los catch de detallepeli
    fetch("https://api.themoviedb.org/3/movie/" + idDePelicula + "?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US")
    .then(function(respuesta) {
        return respuesta.json()
        // return CORTA la ejecución y RETORNA (valores de retorno: valores devueltos por la función cuando se completa)
        // Generalmente, se usa un valor de retorno donde la función es un paso intermedio en un cálculo de algún tipo. Quieres llegar a un resultado final, que involucra algunos valores. Esos valores deben ser calculados por una función, que luego devuelve los resultados para que puedan usarse en la siguiente etapa del cálculo.      })
      .then(function(informacion) {
        console.log(informacion);

       var pelicula = informacion

       // OBJETOS LITERALES: representación en código de un elemento de la VIDA REAL
       // un OBJETO en javascript es un bloque de código que tiene propiedades (las prop tienen un valor determinado)
       // ¿Cómo accedemos al valor de dicha propiedad? objeto.prop

       // var student = { (student es un objeto)
       //   name: "Juana", (name es una propiedad del objeto student y Juana es el valor de dicha propiedad)
       // }
       // ¿Cómo accedemos al nombre del estudiante?
       // console.log(student.name);

          var id = pelicula.id
          var title = pelicula.title
          var imagenpeli = pelicula.poster_path
          var arrayDeGeneros = pelicula.genres
          var sinopsis = pelicula.overview
          var lenguajepeli = pelicula.original_language
          var fechaEstreno = pelicula.release_date

       var li = ''
        li += '<li>'
        li += '<h2>' + title + '</h2>'
        li += '<img src=' + imgPath + imagenpeli + '>'
        li += '<h4>' + sinopsis + '</h4>'
        li += '<h4>' + "Fecha de estreno: " + fechaEstreno + '</h4>'
        li += '<h4>' + "Lenguaje: " + lenguajepeli + '</h4>'
        li += '<h3>'
        // como los generos estan en un array
        // ¿Cómo obtengo la cantidad de elementos de un array? .length
        // Si  queremos obtener toodas la informacion de lo que el usuario seleccione (ya sea una palabra en el buscador, un género, la información del detalle de una película, las películas de mayor puntaje, etc.) tenemos que hacer .length
        for (var i=0; i < arrayDeGeneros.length; i++){
              li += '<a href="generos.html?id=' + arrayDeGeneros[i].id + '">'
              li += arrayDeGeneros[i].name
              // CONDICIONALES: Generar condiciones para ejecutar código
              // if(condición lógica)
              // condición lógica: se debe probar (utilizando operadores de comparación retorna valor true o false)
              // if(true);else(false)
              if (i < arrayDeGeneros) {
                li += ' - '
              }
              li += '</a>'
        }
        li += '</h3>'
        li += '</li>'

        // El objeto document representa el html que será cargado en el navegador
        // ¿Cómo CAPTURAMOS los elementos existentes en el HTML? document.querySelector("lo que queremos capturar");
        // ¿Cuál es el objetivo de capturar algún elemento de HTML? Modificar algo
        // innerText: agregar cadenas de texto como contenido de una etiqueta HTML
        // innerHTML: reemplazar el contenido de una etiqueta HTML

        var ul = document.querySelector(".detalle-peli")
        ul.innerHTML += li



 //INICIO BLOQUE 2 - si la peli ya era favorita que aparezca pintada la estrella
 // indexOf retorna el primer índice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no está presente

 // CONDICIONALES: Generar condiciones para ejecutar código
 // if(condición lógica)
 // condición lógica: se debe probar (utilizando operadores de comparación retorna valor true o false)
 // if(true);else(false)

      if (favoritas.indexOf(idDePelicula) >= 0 ) {
        document.querySelector(".estrellita").style.backgroundColor = "gold"
      }
       // FIN BLOQUE 2

       // INICIO BLOQUE 3 - que pasa al clikear la estrella

       document.querySelector(".estrellita").onclick = function () {
         // Bloque 3 A - Modifico el array

         // CONDICIONALES: Generar condiciones para ejecutar código
         // if(condición lógica)
         // condición lógica: se debe probar (utilizando operadores de comparación retorna valor true o false)
         // if(true);else(false)
         if (favoritas.indexOf(idDePelicula) >= 0 ) {
           // ¿Cómo puedo obtener la posición de un elemento en un array?
           // El método indexOf retorna el primer índice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no esta presente
           // hacemos favoritas.indexOf para que si encuentra (es >= 0 o distinto de -1) ese elemnto en el array de las películas favoritas

          // la quito // cuando hago click en la estrella, que pase a blanco

          var pos = favoritas.indexOf(idDePelicula)
          favoritas.splice(pos,1)
          document.querySelector(".estrellita").style.backgroundColor = "white"
        } else { // caso contrario, que siga estando pintada
           favoritas.push(idDePelicula)
           // ¿Cómo agregar un elemento al final de un array?
           // El método push () añade uno o más elementos al final de un array y devuelve la nueva longitud del array
        document.querySelector(".estrellita").style.backgroundColor = "gold"

         }
         // FIN BLOQUE 3A

         // BLOQUE 3B
// convierte un objeto o valor de JavaScript en una cadena de texto JSON (vuelve a empaquetar el json)
         var json = JSON.stringify(favoritas)
// esta linea nos guarda la data en el almacenamiento local actual
         localStorage.setItem("peliculasFavoritas", json)

         // FIN BLOQUE 3B
       }
    })
       // FIN BLOQUE 3
      .catch(function(error) {
        console.log("Error: " + error);
      })

/// recomendadas
// similar a la estructura de popular, proximas y mejor puntuadas. Cambia la API
fetch("https://api.themoviedb.org/3/movie/" + idDePelicula + "/recommendations?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&page=1")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    console.log(informacion.results);

    var arrayDePeliculas = informacion.results
    console.log(arrayDePeliculas);

    for (var i = 0; i < 10; i++) {
      var id = arrayDePeliculas[i].id
      var title = arrayDePeliculas[i].title
      var imagenpelicula = arrayDePeliculas[i].poster_path
      var li = ''

      // += agrega un valor a la variable

      li += '<li>'
      li += '<a href="detallepeli.html?idDePelicula=' + id +'"'
      li += '<h2>' + title + '</h2>'
      li += '<img src='+ imgPath + imagenpelicula+ '>'
      li += '</a>'
      li += '</li>'
      var ul = document.querySelector(".recomendaciones")

      ul.innerHTML += li
  }
})
  .catch(function(error) {
    console.log("Error: " + error);
  })
})
