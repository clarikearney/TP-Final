// js que me tira el detalle de las peliculas con toda la info
window.addEventListener("load", function() {

  var imgPath = "https://image.tmdb.org/t/p/original"
  var idDePelicula = new URLSearchParams(window.location.search).get("idDePelicula")

    fetch("https://api.themoviedb.org/3/movie/" + idDePelicula + "?api_key=95b9e84c8317f917cebb3f232298f131")
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
          }// tiene que estar linkeado a pag de generos!
          var lenguajepeli = pelicula.original_language
          var fechaEstreno = pelicula.
        //  var trailer =

        document.querySelector(".detalle-peli").innerHTML += "<li><h1>" + title + "</h1> <img src=" + imgPath + imagenpeli + " alt='' uk-cover><div class='uk-position-center uk-position-small uk-text-center uk-light'><h2 class='uk-margin-remove'>" + "<p> <a href=generos.html" + generos + "</a> </p></li>"

      })
      .catch(function(error) {
        console.log("Error: " + error);
      })
    })
