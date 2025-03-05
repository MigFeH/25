const elements = document.querySelectorAll("div");

function checkVisibility() {
    const windowHeight = window.innerHeight; // altura de la ventana grafica
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < windowHeight) { // si el elemento esta dentro del area visible...
            // mostramos el elemento
            element.classList.add('visible');
            element.classList.remove('hidden');
        } else { // sino...
            // oculatamos el elemento
            element.classList.add('hidden');
            element.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();