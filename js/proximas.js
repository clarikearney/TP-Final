// como tiene que haber tres eventos para que aparezcan los tres archivos js con
// puntaje, populares y proximamente hay que incluir addEventListener

window.addEventListener("load", function() {
var imgPath = "https://image.tmdb.org/t/p/original"
 // Modificar el ejercicio para tener un archivo home.html que sea el que
// muestre los las películas
var url = "https://api.themoviedb.org/3/movie/upcoming?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&page=1"
    fetch(url)
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(informacion) {
        console.log(informacion);
        var arrayDeGifs = informacion.results
        console.log(arrayDeGifs);

        for (var i = 0; i < 9; i++) {
          var id = arrayDeGifs[i].id
          var title = arrayDeGifs[i].title
          var imagenpelicula = arrayDeGifs[i].poster_path
          document.querySelector(".ul-proximas").innerHTML += "<li> <img src=" + imgPath + imagenpelicula + " alt='' uk-cover><div class='uk-position-center uk-position-small uk-text-center uk-light'><h2 class='uk-margin-remove'>" + title + "</h2></div></li>"
          document.querySelector("#proximamente").innerHTML += "<a href=detallepeli.html </a>"
        }
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })

})
