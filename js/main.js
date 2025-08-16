// Carrusel infinito duplicando elementos
const track = document.getElementById("carruselTrack");
const items = track.innerHTML;
track.innerHTML += items; // Duplicar imágenes para efecto infinito

// Pausar animación cuando el usuario toque o pase el mouse
track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
});
track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
});
track.addEventListener("touchstart", () => {
    track.style.animationPlayState = "paused";
});
track.addEventListener("touchend", () => {
    track.style.animationPlayState = "running";
});

// Botón sorpresa
document.getElementById("btnSorpresa").addEventListener("click", function() {
    const mensaje = document.getElementById("mensajeOculto");
    mensaje.classList.toggle("oculto");
});
