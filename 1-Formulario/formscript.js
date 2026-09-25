console.log("Hola mundo!");
console.warn("Esto es una advertencia");
console.error("Esto es un error");

var hola = "Saludo";
let quetal = "Saludo2";
const comoEstas = "Bien";

const elementos = document.getElementsByTagName("*");
console.log(elementos);

let datos = document.getElementById("formulario")
let body = document.getElementById("body")
console.log(document.querySelector("#Micampo"))

datos.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(document.querySelector("#boton_submit"))
    body.classList.add('changecolor')
});



