// como tiene que haber tres eventos para que aparezcan los tres archivos js con
// puntaje, populares y proximamente hay que incluir addEventListener

window.addEventListener("load", function() {
var imgPath = "https://image.tmdb.org/t/p/original"
 // Modificar el ejercicio para tener un archivo home.html que sea el que
// muestre los las películas
      fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&page=1")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(informacion) {
        console.log("proximamente");
        console.log(informacion.results);

        var arrayDePeliculas = informacion.results
        console.log(arrayDePeliculas);

        for (var i = 0; i < 10; i++) {
          var id = arrayDePeliculas[i].id
          var title = arrayDePeliculas[i].title
          var imagenpelicula = arrayDePeliculas[i].poster_path
          var li = ''
          li += '<li>'
          li += '<a href="detallepeli.html?idDePelicula=' + id +'"'
          // li += '<li>'
          // li += '<a href="">'
          li += '<h2>' + title + '</h2>'
          li += '<img src=' + imgPath + imagenpelicula + '>'
          li += '</a>'
          li += '</li>'
          var ul = document.querySelector(".ul-proximas")
          //.innerHTML += "<li> <a href='detallepeli.html?idDePelicula="+id+"'> <img src=" + imgPath + imagenpelicula + " alt='' uk-cover> <div class='uk-position-center uk-position-small uk-text-center uk-light'> <h2 class='uk-margin-remove'>" + title + "</h2></div></a></li>"
          ul.innerHTML += li

        //  document.querySelector(".ul-proximas").innerHTML += "<li><img src=" + imgPath +imagenpelicula + " alt='' uk-cover><div class='uk-position-center uk-position-small uk-text-center uk-light'><h2 class='uk-margin-remove'>" + title + "</h2></div></li>"
        }

      })
      .catch(function(error) {
        console.log("Error: " + error);
      })

})
