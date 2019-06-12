// como tiene que haber tres eventos para que aparezcan los tres archivos js con
// puntaje, populares y proximamente hay que incluir addEventListener

window.addEventListener("load", function() {
  var imgPath = "https://image.tmdb.org/t/p/original"


    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&page=1")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(informacion) {
        console.log(informacion.results);

        var arrayDePeliculas = informacion.results
        console.log(arrayDePeliculas);

        for (var i = 0; i < 9; i++) {
          var id = arrayDePeliculas[i].id
          var title = arrayDePeliculas[i].title
          console.log(title);
          var imagenpelicula = arrayDePeliculas[i].poster_path
          //document.querySelector(".ul-puntaje").innerHTML += "<article class='article-movie'><h2>" + title + "</h2> <img src=" + imgPath +imagenpelicula + "></article>"

          document.querySelector(".ul-puntaje").innerHTML += "<li><img src=" + imgPath +imagenpelicula + " alt='' uk-cover><div class='uk-position-center uk-position-small uk-text-center uk-light'><h2 class='uk-margin-remove'>" + title + "</h2></div></li>"
        }
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })

})
