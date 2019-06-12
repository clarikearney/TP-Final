window.onload = function() {

    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(informacion) {
        console.log(informacion);

        var generos = informacion.genres

        for (var i = 0; i < generos.length; i++) {
          var id = generos[i].id // adaptar los puntos a las caract. de la API
          var title = generos[i].name // adaptar los puntos a las caract. de la API

          document.querySelector("#desplegable").innerHTML += '<p> <a class="dropdown-menu" href=generos.html?id="' + id + '>' + title + '</a></p>'

        }

      })
      .catch(function(error) {
        console.log("Error: " + error);
      })

}
