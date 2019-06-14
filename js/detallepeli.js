window.addEventListener("load", function() {

  var imgPath = "https://image.tmdb.org/t/p/original"
  var queryString = new URLSearchParams(window.location.search)
  var idDetalle = queryString.get("id")

    fetch("https://api.themoviedb.org/3/movie/" + idDetalle + "?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(informacion) {
        console.log(informacion);

        var arrayDePeliculas = informacion.results
        console.log(arrayDePeliculas);

        for (var i = 0; i < 9; i++) {
          var id = arrayDePeliculas[i].id
          var title = arrayDePeliculas[i].title
          var imagenpeli = arrayDePeliculas[i].poster_path
          var generopeli = arrayDePeliculas[i].genre_ids // tiene que estar linkeado a pag de generos!
          var lenguajepeli = arrayDePeliculas[i].original_language
        //  var fechaEstreno = arrrayDePeliculas[i].
        //  var trailer = arrayDePeliculas [i].


        document.querySelector("").innerHTML += "<li ><img src='" + imgPath + imagenpeli + "' alt='' uk-cover><div class='uk-position-center uk-position-small uk-text-center uk-light'><h2 class='uk-margin-remove'>" + title + "</h2></div></li>"

        }
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })
