// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');
    const header = document.querySelector('header h1');

    // Función para cambiar la sección activa
    function setActiveSection(id) {
        sections.forEach(section => {
            if (section.id === id) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Agregar eventos de clic a los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            setActiveSection(sectionId);
            header.textContent = `Bienvenido a ${this.textContent}`;
        });
    });

    // Mostrar la sección de inicio por defecto
    setActiveSection('inicio');

    // Animación simple para el título principal
    let opacity = 0;
    function fadeIn() {
        opacity += 0.1;
        header.style.opacity = opacity;
        if (opacity < 1) {
            requestAnimationFrame(fadeIn);
        }
    }
    fadeIn();
});