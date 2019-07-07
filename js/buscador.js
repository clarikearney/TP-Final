// UX (User Experience)
// ¿Qué siente mientras interactúa?
// Es aquello que una persona percibe al interactuar con un producto o servicio. Logramos una buena UX al enfocarnos en diseñar productos útiles, usables y deseables, lo cual influye en que el usuario se sienta satisfecho, feliz y encantado. */
//
// Usabilidad o UI
// Con lo que interactúa
// La Usabilidad es un atributo de una buena experiencia de usuario y la UI o Interfaz del Usuario es con lo que se interactúa.
//
// Javascript aporta dinamismo a la UI para hacer más agradable la UX
// Permite validar datos y verificar los mismos antes de enviarlos al servidor

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
  var queryString = new URLSearchParams(window.location.search)
  var buscador = queryString.get("query")

    fetch("https://api.themoviedb.org/3/search/movie?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&query=" + buscador + "&page=1&include_adult=false")
      .then(function(respuesta) {
        return respuesta.json()
      })
      // return CORTA la ejecución y RETORNA (valores de retorno: valores devueltos por la función cuando se completa)
      // Generalmente, se usa un valor de retorno donde la función es un paso intermedio en un cálculo de algún tipo. Quieres llegar a un resultado final, que involucra algunos valores. Esos valores deben ser calculados por una función, que luego devuelve los resultados para que puedan usarse en la siguiente etapa del cálculo.
      .then(function(informacion) {
        console.log(informacion.results);

        var arrayDePeliculas = informacion.results
        console.log(arrayDePeliculas);

        // ¿Cómo obtengo la cantidad de elementos de un array? .length
        // Si hubieramos querido obtener toodas las películas de lo que el usuario seleccione (ya sea una palabra en el buscador, un género, las películas de mayor puntaje, etc.) tendríamos que haber hecho array.length pero como quisimos que el servidor nos de los datos de 10 películas hicimos (var i = 0; i < 10; i++)

        for (var i = 0; i < 10; i++) {

// OBJETOS LITERALES: representación en código de un elemento de la VIDA REAL
// un OBJETO en javascript es un bloque de código que tiene propiedades (las prop tienen un valor determinado)
// ¿Cómo accedemos al valor de dicha propiedad? objeto.prop

// var student = { (student es un objeto)
//   name: "Juana", (name es una propiedad del objeto student y Juana es el valor de dicha propiedad)
// }
// ¿Cómo accedemos al nombre del estudiante?
// console.log(student.name);

          var id = arrayDePeliculas[i].id
          var title = arrayDePeliculas[i].title
          var imagenpelicula = arrayDePeliculas[i].poster_path
          var generopelicula = arrayDePeliculas[i].genre_ids
          var lenguajepelicula = arrayDePeliculas[i].original_language
          var imagenpelicula = arrayDePeliculas[i].poster_path
          var li = ''

          // += agrega un valor a la variable

          li += '<li>'
          li += '<a href="detallepeli.html?idDePelicula=' + id +'"'
          li += '<h2>' + title + '</h2>'
          li += '<img src=' + imgPath + imagenpelicula + '>'
          li += '</a>'
          li += '</li>'

          // El objeto document representa el html que será cargado en el navegador
          // ¿Cómo CAPTURAMOS los elementos existentes en el HTML? document.querySelector("lo que queremos capturar");
          // ¿Cuál es el objetivo de capturar algún elemento de HTML? Modificar algo
          // innerText: agregar cadenas de texto como contenido de una etiqueta HTML
          // innerHTML: reemplazar el contenido de una etiqueta HTML

         var ul = document.querySelector(".detalle")
         ul.innerHTML += li
        }
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })
      var link_envio = document.querySelector(".link_envio")
      link_envio.onclick = function () {
        // un evento es algo que pasa en el navegador o q es ejecutado x usuario,

        var formulario = document.querySelector(".form_envio")
        formulario.submit();
      }
})
