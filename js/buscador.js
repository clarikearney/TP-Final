window.addEventListener("load", function() {

  var imgPath = "https://image.tmdb.org/t/p/original"
  var queryString = new URLSearchParams(window.location.search)
  var buscador = queryString.get("query")

    fetch("https://api.themoviedb.org/3/search/movie?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&query=" + buscador + "&page=1&include_adult=false")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(informacion) {
        console.log(informacion.results);

        var arrayDePeliculas = informacion.results
        console.log(arrayDePeliculas);

        for (var i = 0; i < 10; i++) {
          var id = arrayDePeliculas[i].id
          var title = arrayDePeliculas[i].title
          var imagenpelicula = arrayDePeliculas[i].poster_path
          var generopelicula = arrayDePeliculas[i].genre_ids
          var lenguajepelicula = arrayDePeliculas[i].original_language
          var imagenpelicula = arrayDePeliculas[i].poster_path
          //document.querySelector(".ul-puntaje").innerHTML += "<article class='article-movie'><h2>" + title + "</h2> <img src=" + imgPath +imagenpelicula + "></article>"
          var li = ''
          li += '<li>'
          li += '<a href="detallepeli.html?idDePelicula=' + id +'"'
          // li += '<li>'
          // li += '<a href="">'
          li += '<h2>' + title + '</h2>'
          li += '<img src=' + imgPath + imagenpelicula + '>'
          li += '</a>'
          li += '</li>'
         var ul = document.querySelector(".detalle")
         ul.innerHTML += li
//    document.querySelector(".detalle").innerHTML += "<li><img src='" + imgPath +imagenpelicula +  "' alt='' uk-cover><div class='uk-position-center uk-position-small uk-text-center uk-light'><h2 class='uk-margin-remove'>" + title + "</h2></div> </a> </li>"
        }
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })
      var link_envio = document.querySelector(".link_envio")
      link_envio.onclick = function () {
        var formulario = document.querySelector(".form_envio")
        formulario.submit();
      }
})
