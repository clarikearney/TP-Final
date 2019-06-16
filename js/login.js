// primero chequear si se envia el formulario (agarro el formulario: querySelector): var Form = document.querySelector(#myForm)
// lo guardo en una variable (var nombre y var contraseña)
// cuando se envia el formulario (theForm.onsubmit):
// si los campos estan vacios, prevengo el envio del formulario (event.preventDefault)
// el usuario escribe String, si no cargaste nada en nombre y no me cargaste nada en contraseña (==""), preventDefault
// local storage es una caja, adentro guardo valores para que los pueda identificar
// set item almacena valores que tienen que tener un nombre por eso es setItem ("nombre",nombre)

var theForm = document.querySelector ("#myForm");
theForm.onsubmit = function (event) {
  var boton = document.querySelector("#nombre")
  var boton2 = document.querySelector("#contraseña")
  var boton3 = document.querySelector("#mail");

  if(boton.value == "" || boton2.value == "" || boton3.value == ""){
    event.preventDefault();
    // si un input esta vacio, if (input esta vacio) hace prevent default una vez que haga submit, antes del if
    // hacer variables de nombre y contra
    alert("complete your info!");
  }else if ((!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(boton3.value)))){
    event.preventDefault();
    alert("You have entered an invalid email adress!")
  }else {
    var name = boton.value;
    var pass = boton2.value;
    var mail = boton3.value;
    localStorage.setItem("nombre",name);
    localStorage.setItem("nombre",pass);
    localStorage.setItem("mail",mail);
    console.log(name);
    console.log(localStorage);
    var modal = document.querySelector("#modal-overflow")
    modal.style.display = "none";
    var login = document.querySelector(".li-login")
    login.style.display = "none";
     var nombre = localStorage.getItem("nombre");
     var span = document.querySelector("#nombre-de-usuario")
     span.innerText = name;
  }
  }

// si no hay datos, preventDefault    if (boton.value == ""|| boton2.value == ""){
// si hay datos, else (ya me cargaron datos)
// 1 agarrar el modal y ocultarlo
// var modal = document.querySelector(#modal)
// modal.style.display = "none";
// 2 agarrar el boton de login y ocultarlo
// var login = document.querySelector(#modal)
// login.style.display = "none";
// 3 agarrar el nombre que cargaron y reemplazarlo boton de login
// getItem.nombre = localStorage.getItem("nombre");
// agregarlo sobre un span vacio en el html, hacer un innerText porque un string es un texto
// var span = document.querySelector(#span)
// span.innerText = nombre;
