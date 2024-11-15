function abrirCarta() {
    const carta = document.getElementById('carta');
    const hoja = document.getElementById('hoja');
    const imagenExterior = document.getElementById('imagenExterior');

    carta.style.transform = 'rotateX(0deg)'; // Abrir la carta
    hoja.classList.add('visible'); // Mostrar la hoja
    imagenExterior.classList.add('visible'); // Mostrar la imagen exterior
}

function cerrarCarta() {
    const carta = document.getElementById('carta');
    const hoja = document.getElementById('hoja');
    const imagenExterior = document.getElementById('imagenExterior');

    carta.style.transform = 'rotateX(-180deg)'; // Cerrar la carta
    hoja.classList.remove('visible'); // Ocultar la hoja
    imagenExterior.classList.remove('visible'); // Ocultar la imagen exterior
}
