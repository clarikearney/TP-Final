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
          var id = pelicula.id
          var title = pelicula.title
          var imagenpeli = pelicula.poster_path
          var arrayDeGeneros = pelicula.genres
          var lenguajepeli = pelicula.original_language
        // hasta aca llegue bien!
       var li = ''
        li += '<li>'
        li += '<h2>' + title + '</h2>'
        li += '<img src=' + imgPath + imagenpeli + '>'
        li += '<h3>' + lenguajepeli + '</h3>'
        li += '<h3>'
        for (var i=0; i < arrayDeGeneros.length; i++){
              li += '<a href="generos.html?idGenero=' + arrayDeGeneros[i].id + '">'
              li += arrayDeGeneros[i].name
              if (i < arrayDeGeneros.length-1) {
                li += ' / '
              }
              li += '</a>'
        }
        li += '</h3>'
        li += '</li>'
        var ul = document.querySelector(".detalle-peli")
       //.innerHTML += "<li> <a href='detallepeli.html?idDePelicula="+id+"'> <img src=" + imgPath + imagenpelicula + " alt='' uk-cover> <div class='uk-position-center uk-position-small uk-text-center uk-light'> <h2 class='uk-margin-remove'>" + title + "</h2></div></a></li>"
        ul.innerHTML += li
      //  document.querySelector(".detalle-peli").innerHTML += "<li><h1>" + title + "</h1> <img src=" + imgPath + imagenpeli + " alt='' uk-cover><div class='uk-position-center uk-position-small uk-text-center uk-light'><h2 class='uk-margin-remove'>" + "<p> <a href=generos.html" + generos + "</a></p></li>"

      })
      .catch(function(error) {
        console.log("Error: " + error);
      })
    })
