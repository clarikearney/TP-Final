// quiero que al cliquear en mi genero la pagina web me redirija a las paginas de los generos que
// selecciono el usuario!
/*window.onload = function() {
var imgPath = "https://image.tmdb.org/t/p/original"
var url = "https://api.themoviedb.org/3/movie/upcoming?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&page=1"
    fetch(url)
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(generos) {
        var generos = informacion.genres

        for (var i = 0; i < 6; i++) {
          var id = generos[i].id // adaptar los puntos a las caract. de la API
          var title = generos[i].title // adaptar los puntos a las caract. de la API
          var imagenpelicula = generos[i].poster_path
          document.querySelector(".lista-generos").innerHTML += "<li><img src=" + imgPath +imagenpelicula + " alt='' uk-cover><div class='uk-position-center uk-position-small uk-text-center uk-light'><h2 class='uk-margin-remove'>" + title + "</h2></div></li>"
        }

      })
      .catch(function(error) {
        console.log("Error: " + error);
      })

}) */
window.onload = function() {

    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(informacion) {
        console.log(informacion);

        var generos = informacion.genres

        for (var i = 0; i < 6; i++) {
          var id = generos[i].id // adaptar los puntos a las caract. de la API
          var title = generos[i].name // adaptar los puntos a las caract. de la API

          document.querySelector("#desplegable").innerHTML += '<p> <a class="dropdown-menu" href=generos.html?id="' + id + '>' + title + '</a></p>'

        }

      })
      .catch(function(error) {
        console.log("Error: " + error);
      })

}
