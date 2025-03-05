const elements = document.querySelectorAll("div");

function checkVisibility() {
    const windowHeight = window.innerHeight; // altura de la ventana grafica
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < windowHeight) { // si el elemento esta dentro del area visible...
            // mostramos el elemento
            element.classList.add('mostrar');
        } else { // sino...
            // oculatamos el elemento
            element.classList.remove('mostrar');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();