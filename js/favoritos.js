// cuando ingreso debo inicializar el array donde voy a guardar las pelis favoritas
var arrayDePelisFavoritas = []

var li;
li = '<li>'




// js que me tira el detalle de las peliculas con toda la info
window.addEventListener("load", function() {

  var imgPath = "https://image.tmdb.org/t/p/original"
  var idDePelicula = new URLSearchParams(window.location.search).get("idDePelicula")

    fetch("https://api.themoviedb.org/3/movie/" + idDePelicula +"?api_key=95b9e84c8317f917cebb3f232298f131&language=en")
    .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(informacion) {
        console.log(informacion);

        var pelicula = informacion
        console.log(pelicula);


          var id = pelicula.id
          var title = pelicula.title
          var imagenpeli = pelicula.poster_path
          var arrayDeGeneros = pelicula.genres
          var generos= ""
          for (var i=0; i < arrayDeGeneros.lenght; i++){
            generos += arrayDeGeneros[i].name + ", "
          }
          //hasta aca llegue bien!
          var lenguajepeli = pelicula.original_language
        //  var fechaEstreno = pelicula.
        //  var trailer =

        document.querySelector(".detalle-peli").innerHTML += "<li><h1>" + title + "</h1> <img src=" + imgPath + imagenpeli + " alt='' uk-cover><div class='uk-position-center uk-position-small uk-text-center uk-light'><h2 class='uk-margin-remove'>" + "<p> <a href=generos.html" + generos + "</a></p></li>"

      })
      .catch(function(error) {
        console.log("Error: " + error);
      })
    })




console.log(li);
document.querySelector(#).innerHTML += li



function agregarFavoritos (id) {
  alert("me clickearon")

  // reviso si hay alguna peli favorita
  if (arrayDePelisFavoritas.indexOf(id)== -1) {
    // en este caso no es favorita
    arrayDePelisFavoritas.push(id)
    window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas)  } else {
      arrayDePelisFavoritas.splice(arrayDePelisFavoritas.indexOf(id),1,id)
      window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas) }
)
  console.log(id);
  console.log(sessionStorage.getItem("favorita"));
}