// js que me tira el detalle de las peliculas con toda la info
window.addEventListener("load", function() {

  var imgPath = "https://image.tmdb.org/t/p/original"
  var idDePelicula = new URLSearchParams(window.location.search).get("idDePelicula")

/*   // INICIO BLOQUE 1 - Leer el array de storage

   // Paso 1 - Leo de localStorage
   var jsonFavoritas = localStorage.getItem("peliculasFavoritas")

   if (jsonFavoritas == null) {
     var favoritas = []
   } else {
     // Paso 2 - Desempaqueto el json
     var objLit = JSON.parse(jsonFavoritas)
   // Paso 3 - Leo el obj. lit, la caract. importante
     var favoritas = objLit.caracteristica;
   }
   // CIERRA BLOQUE 1
*/

    fetch("https://api.themoviedb.org/3/movie/" + idDePelicula + "?api_key=95b9e84c8317f917cebb3f232298f131&language=en")
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
          var sinopsis = pelicula.overview
          var lenguajepeli = pelicula.spoken_language
          var fechaEstreno = pelicula.release_date

       var li = ''
        li += '<li>'
        li += '<h2>' + title + '</h2>'
        li += '<img src=' + imgPath + imagenpeli + '>'
        li += '<h4>' + sinopsis + '</h4>'
        li += '<h4>' + "Fecha de estreno: " + fechaEstreno + '</h4>'
        li += '<h4>' + "Lenguaje: " + lenguajepeli + '</h4>'
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
     //INICIO BLOQUE 2 - si la peli ya era favorita que aparezca pintada la estrella
/*      if (favoritas.indexOf(idPelicula) >= 0 ) {
        PONER LA ESTRELLA YA PINTADA
      }
       // FIN BLOQUE 2

       // INICIO BLOQUE 3 - que pasa al clikear la estrella

       document.querySelector("ESTRELLA").onclick = function () {
         // Bloque 3 A - Modifico el array
         if (favoritas.indexOf(idPelicula) >= 0 ) {
          // la quito
          var pos= favoritas.indexOf(idPelicula)
          favoritas.splice(pos,1)
        } else {
           favoritas.push(idPelicula)
           PINTAR LA ESTRELLA
         }
         // FIN BLOQUE 3A

         // BLOQUE 3B
         var objLit = {
           caracteristica: favoritas
         }
         var JSON = JSON.stringify(objLit)

         localStorage.setItem("peliculasFavoritas", json)

         // FIN BLOQUE 3B
       }

       // FIN BLOQUE 3
      .catch(function(error) {
        console.log("Error: " + error);
      })
      */
    })
