window.addEventListener("load", function() {
var idDePelicula = new URLSearchParams(window.location.search).get("idDePelicula")

fetch("https://api.themoviedb.org/3/movie/" + idDePelicula +  "/videos?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US") // esta bien el idDePeliculas?
.then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    console.log(informacion.results);
    var arrayDePeliculas = informacion.results
    var key = informacion.results[0].key
    document.querySelector(".trailer-peli").src += key

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })
})
