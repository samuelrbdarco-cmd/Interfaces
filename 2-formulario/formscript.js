function irAlPaso(e, numPaso) {
    e.preventDefault();

    const pasos = document.querySelectorAll('.paso_siguiente');
    pasos.forEach(paso => {
        paso.classList.remove('paso_visible');
    });

    const pasoDestino = document.getElementById('paso' + numPaso);
    if (pasoDestino) {
        pasoDestino.classList.add('paso_visible');
    }
}