window.addEventListener("load", function () {
  // guardo el arrayDePelisFavoritas que esta en sessionStorage
  arrayDePelisFavoritas = JSON.parse(window.sessionStorage.getItem("favorita"));

  // chequeo si el array tiene por lo menos una peli favorita
  if (arrayDePelisFavoritas.lenght<0) {
  //como arrayDePelisFavoritas es un array, necesito recorrerlo
  for (var i = 0; i < arrayDePelisFavoritas.length; i++) {
    //recorro el array
    arrayDePelisFavoritas[i]

    var url = "https://api.themoviedb.org/3/movie/"+ arrayDePelisFavoritas[i] + "?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US " + arrayDePelisFavoritas[i]
    var urlImg = "https://image.tmbd.org/t/original" //esta es la parte fija de la img
    fetch(url)
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(informacion) {
        // guarda en pelicula el objetio literal que recibo como rta
        console.log(informacion)
        var ul = document.querySelector("section ul")
        var li;

         li = "<li>"
         li += "<a href=''></a>"
         li += "<h2>" + pelicula.title + "</h2>"
         li += "<img src='"+ urlImg + pelicula.poster_path + "'>"
         li += "</a>"
         li += "</li>"
         ul.innerHTML += li
  }
.catch(function(error) {
  console.log("Error: " + error);
})
}
