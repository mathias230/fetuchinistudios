// Agregar o quitar la clase "scrolled" a la barra de navegación en función del desplazamiento
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) { // Umbral de 50px para que ocurra antes
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
