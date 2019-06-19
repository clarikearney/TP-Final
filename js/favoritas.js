window.addEventListener("load",function() {
  var jsonFavoritas = localStorage.getItem("peliculasFavoritas")

  if (jsonFavoritas == null) {
    var favoritas = []
  } else {
    var favoritas = JSON.parse(jsonFavoritas)

  }
for (var i = 0; i < favoritas.length; i++) {
//  var buscador = queryString.get("query")

    var url = "https://api.themoviedb.org/3/movie/" + favoritas[i] + "?api_key=95b9e84c8317f917cebb3f232298f131&language=en-US&query&page=1&include_adult=false"
    var imgPath = "https://image.tmdb.org/t/p/original"
    fetch(url)
    .then(function(information) {
      return information.json()
    })
    .then(function(pelicula) {
      console.log(pelicula.title, pelicula.id, pelicula.poster_path);
      var li= ''
      li += '<li>'
      li += "<a href='detallepeli.html?idDePelicula=" + pelicula.id + "'>"
      li += '<p>' + pelicula.title + '</p>'
      li += '<img src=' + imgPath + pelicula.poster_path + '>'
      li += '</a>'
      li += '</li>'
      var ul = document.querySelector("ul.fav")
      console.log(ul);
      ul.innerHTML += li
    //  document.querySelector("ul").innerHTML += "<li>" + "<a href='detallepeli.html?idPelicula='" + pelicula.id"' + "<p>" pelicula.title "</p>" + "<img src='" + urlPic + pelicula.poster_path + " 'style=width: 300px;'>" + "</a>" + </li>"
    })
    .catch(function(error) {
     console.log("Error: " + error);
   })
 }
})
