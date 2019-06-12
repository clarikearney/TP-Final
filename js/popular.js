// como tiene que haber tres eventos para que aparezcan los tres archivos js con
// puntaje, populares y proximamente hay que incluir addEventListener

window.addEventListener("load", function() {
  var imgPath = "https://image.tmdb.org/t/p/original"


    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&page=1")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(informacion) {
        console.log("populares");
        console.log(informacion.results);

        var arrayDeGifs = informacion.results
        console.log(arrayDeGifs);

        for (var i = 0; i < 9; i++) {
          var id = arrayDeGifs[i].id
          var title = arrayDeGifs[i].title
          var imagenpelicula = arrayDeGifs[i].poster_path
          document.querySelector(".ul-popular").innerHTML += "<li><img src=" + imgPath +imagenpelicula + " alt='' uk-cover><div class='uk-position-center uk-position-small uk-text-center uk-light'><h2 class='uk-margin-remove'>" + title + "</h2></div></li>"
        }

      })
      .catch(function(error) {
        console.log("Error: " + error);
      })

})
