import AOS from 'aos';
import 'aos/dist/aos.css';

// Inicializar AOS cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    delay: 0,
  });
});

// Refrescar AOS cuando la página se carga completamente
window.addEventListener('load', function() {
  AOS.refresh();
});