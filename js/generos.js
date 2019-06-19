// quiero que al cliquear en mi genero la pagina web me redirija a las paginas de los generos que
// selecciono el usuario!
window.addEventListener("load", function() {
  var imgPath = "https://image.tmdb.org/t/p/original"

    var idGenero = new URLSearchParams(location.search).get("id")
//
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + idGenero) //
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(informacion) {
        console.log(informacion);

        var arrayDePeliculas = informacion.results
        console.log(arrayDePeliculas);

        for (var i = 0; i < 10; i++) {
          var id = arrayDePeliculas[i].id
          var title = arrayDePeliculas[i].title // adaptar los puntos a las caract. de la API
          var imagenpeli= arrayDePeliculas[i].poster_path // adaptar los ptos a las caract. de la API
          var li = ''
          li += '<li>'
          li += '<a href="detallepeli.html?idDePelicula=' + id +'"'
          li += '<h2>' + title + '</h2>'
          li += '<img src=' + imgPath + imagenpeli + '>'
          li += '</a>'
          li += '</li>'
          var ul = document.querySelector(".pelis-genero")
          //.innerHTML += "<li> <a href='detallepeli.html?idDePelicula="+id+"'> <img src=" + imgPath + imagenpelicula + " alt='' uk-cover> <div class='uk-position-center uk-position-small uk-text-center uk-light'> <h2 class='uk-margin-remove'>" + title + "</h2></div></a></li>"
          ul.innerHTML += li

        //  document.querySelector(".pelis-genero").innerHTML += "<li><img src=" + imgPath + imagenpeli + " alt='' uk-cover><div class='uk-position-center uk-position-small uk-text-center uk-light'><h2 class='uk-margin-remove'>" + title + "</h2></div></li>"
        }
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })

})
