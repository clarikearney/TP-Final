

window.onload = function() {

// 2. Modificar el ejercicio de GIPHY para tener un archivo home.html que sea el que
// muestre los GIFS Trending
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(informacion) {
        console.log(informacion.results);

        var arrayDeGifs = informacion.data
        console.log(arrayDeGifs);

        for (var i = 0; i < arrayDeGifs.length; i++) {
          var id = arrayDeGifs[i].id
          var title = arrayDeGifs[i].title
          var url = arrayDeGifs[i].images.original.url

          document.querySelector("div").innerHTML += "<p><a href=detalleGif.html?id=" + id + ">" + title + "</a></p>"
          document.querySelector("div").innerHTML += "<img src=" + url + ">"
        }

      })
      .catch(function(error) {
        console.log("Error: " + error);
      })

}
