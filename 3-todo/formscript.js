function AñadirDatosLista () {

    const caja = document.getElementById("introducir_tarea");
    
    const elemento = document.createElement("p");
    console.log(caja.value);
    elemento.textContent = caja.value;
    document.getElementById("lista").appendChild(elemento);
}