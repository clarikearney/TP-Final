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
  // Event Listeners
  // Syntax: element.addEventListener(event,function)
  // cuando suceda el evento (load) se va a ejecutar la función
  // addEventListener permite que se ejecute más de un evento a la vez (window.onload sólo permite que se ejecute un evento al cargar la página)

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

// HTTP (Hyper Text Transform Protocol)
// es un protocolo para la transmisión de información (para que el dispositivo que hace el pedido de info y el dispositivo que recibe el pedido hablen el mismo idioma: solicito el sitio)

//tenemos una ruta/hipervínculo (queryString), entonces podemos acceder a datos del pedido mediante window.location.search
// Un objeto implementando URLSearchParams puede directamente ser usado en una for...of estructura

// El método GET se utiliza para pedir información de un recurso específico
// Pedidos pueden ser cacheados, aparecen en historial
// El query string se incluye en la URL conteniendo los datos a enviar (El ? comienza los datos de configuración de la página)
//Considerando que este es un buscador y me interesa que los datos de lo que el usuario buscó estén visibles en la URL se utiliza el método GET en vez del método POST

// ¿Cómo envío datos por el Query String?
// Podemos enviar datos en el queryString armando un hipervínculo
// Los formularios configurados por GET envían sus datos en el queryString
// Luego del ? aparece lo que el usuario buscó

var imgPath = "https://image.tmdb.org/t/p/original"
var queryString = new URLSearchParams(window.location.search)
var buscador = queryString.get("query")

  // API: sistema para intercambiar información entre distintas aplicaciones (posiblemente en distintos servidores, en este caso entre The Movie DB y este proyecto, queremos consumir una API para obtener información de un sistema externo, obtener información actualizada sobre películas)

  // ¿Cómo consumir API?
  // Realizar un pedido a otra URL (accedemos a una URL que en vez de retornar HTML retorna información en formato de texto para ser procesada por otro sistema)
  // Retorna strings en formato JSON (formato de intercambio de datos)
  // ¿Cómo trabajar con JSON?
  // JSON.stringify(): pasar de objeto literal a JSON
  // JSON.parse (): tomar un string en formato JSON y transformar en objeto literal

// AJAX (llamados asincrónicos: solicitud que sabemos cuando empieza pero no cuando termina)
// Permite hacer peticiones a otras páginas web sin tener que salir del documento HTML actual

// Permite aplicaciones web capaces de actualizarse continuamente sin tener que volver a cargar la página completa. Esto posibilita aplicaciones más rápidas, dinámicas y con mejor respuesta a las acciones del usuario.


    fetch("https://api.themoviedb.org/3/search/movie?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&query=" + buscador + "&page=1&include_adult=false")

    // Fetch esta basado en promesas, devuelve la promesa de suministrar la información solicitada en algún momento
    // Recibe como primer parámetro la URL del endpoint al cual estamos haciendo el llamado

      .then(function(respuesta) {
        return respuesta.json()
      })
      // .then() recibe un callback, el cual retornará la respuesta del llamado en formaro JSON
      // return CORTA la ejecución y RETORNA (valores de retorno: valores devueltos por la función cuando se completa)
      // Generalmente, se usa un valor de retorno donde la función es un paso intermedio en un cálculo de algún tipo. Quieres llegar a un resultado final, que involucra algunos valores. Esos valores deben ser calculados por una función, que luego devuelve los resultados para que puedan usarse en la siguiente etapa del cálculo.
      .then(function(informacion) {
        console.log(informacion.results);
      // .then() recibe un callback, el cual hará lo que le pidamos con la respuesta obtenida, que está en formato JSON
        var arrayDePeliculas = informacion.results
        console.log(arrayDePeliculas);
        // var arrayDePeliculas almacena TODA la información obtenida

        // El for nos permite crear ciclos, donde un bloque de código se repite una y otra vez (recorrer el array)

        // for (valor con que inicia el ciclo una var; límite de repeticiones, mientras se cumpla esta condición, el ciclo se repite; en cuanto se incrementa en cada ciclo la variable inicial {
        //   array[i]
        // }

        // ¿Cómo obtengo la cantidad de elementos de un array? .length
        // Si hubieramos querido obtener toodas las películas de lo que el usuario seleccione (ya sea una palabra en el buscador, un género, las películas de mayor puntaje, etc.) tendríamos que haber hecho array.length pero como quisimos que el servidor nos de los datos de 10 películas hicimos (var i = 0; i < 10; i++)

        for (var i = 0; i < 10; i++) {

        // OBJETOS LITERALES: representación en código de un elemento de la VIDA REAL
        // ¿Cómo accedemos al valor de dicha propiedad? objeto.prop

        // var student = { (student es un objeto)
        //   name: "Juana", (name es una propiedad del objeto student y Juana es el valor de dicha propiedad)
        // }
        // ¿Cómo accedemos al nombre del estudiante?
        // console.log(student.name);

            // var arrayDePeliculas es un objeto  (un OBJETO en javascript es un bloque de código que tiene propiedades. Las prop tienen un valor determinado)

        // Para obtener la información que me interese obtener busco en el objeto arrayDePeliculas las propiedades que me interesan (el nombre de cada propiedad es distinto para cada api)


          var id = arrayDePeliculas[i].id
          var title = arrayDePeliculas[i].title
          var imagenpelicula = arrayDePeliculas[i].poster_path
          var generopelicula = arrayDePeliculas[i].genre_ids
          var lenguajepelicula = arrayDePeliculas[i].original_language
          var imagenpelicula = arrayDePeliculas[i].poster_path
          var li = ''

          // += agrega un valor a la variable
          // El objeto document representa el html que será cargado en el navegador
          // ¿Cómo CAPTURAMOS los elementos existentes en el HTML? document.querySelector("lo que queremos capturar");
          // ¿Cuál es el objetivo de capturar algún elemento de HTML? Modificar algo
          // innerText: agregar cadenas de texto como contenido de una etiqueta HTML
          // innerHTML: reemplazar el contenido de una etiqueta HTML

          // En buscador.html en el main hay una única sección (representa la función del buscador)
          // Las clases de dicha sección corresponden a el slideshow obtenido de uikit
          // (HTML) Hay una ul vacía (clase: detalle) que es a donde se agregaran las li al enviar el formulario

          li += '<li>'
          li += '<a href="detallepeli.html?idDePelicula=' + id +'"'
          li += '<h2>' + title + '</h2>'
          li += '<img src=' + imgPath + imagenpelicula + '>'
          li += '</a>'
          li += '</li>'

         var ul = document.querySelector(".detalle")
         ul.innerHTML += li
        }
      })
      .catch(function(error) {
        console.log("Error: " + error);
        // .catch() atrapará los errores, si los hubiere, e imprimirá en consola en tipo de error obtenido
      })

      //¿Cómo enviar datos del formulario? Se envían al hacer enter o mediante el método submit() que envía el formulario (igual que hacer clic en el botón Enviar).

      // A esta altura los datos del formulario se envían unicamente haciendo enter, falta que funcione el formulario al hacer click en la lupa

      // En buscador.html el buscador esta en el header, es un form (clase: form_envio) con method=get y action=buscador.html
      // Dentro del formulario hay un hipervínculo (ícono lupa) con clase link_envio
      // Hay que capturar la lupa (clase: link_envio) y hacer que al hacer click (.onclick) se envíe el formulario


      var link_envio = document.querySelector(".link_envio")
      link_envio.onclick = function () {


        var formulario = document.querySelector(".form_envio")
        formulario.submit();
      }
})
