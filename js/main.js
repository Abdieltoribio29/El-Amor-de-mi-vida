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

// 💌 Carta de amor (clic para voltear)
const carta = document.querySelector('.carta');
if (carta) {
  carta.addEventListener('click', () => {
    carta.classList.toggle('flipped');
  });
}
  const videos = document.querySelectorAll(".video-item video");
  const carrusel = document.querySelector(".video-carrusel");
  let activeVideo = null;

  videos.forEach(video => {
    // PC hover → solo activar/desactivar audio
    video.addEventListener("mouseenter", () => {
      video.muted = false;
      video.play().catch(() => {}); // fuerza play
    });

    video.addEventListener("mouseleave", () => {
      video.muted = true;
    });

    // 📱 MÓVIL → tap/click para activar
    video.parentElement.addEventListener("click", (e) => {
      e.stopPropagation();

      if (activeVideo && activeVideo !== video) {
        activeVideo.muted = true;
        activeVideo.parentElement.classList.remove("active");
        carrusel.classList.remove("active");
      }

      if (video.parentElement.classList.contains("active")) {
        video.muted = true;
        video.parentElement.classList.remove("active");
        carrusel.classList.remove("active");
        activeVideo = null;
      } else {
        video.muted = false;
        video.play().catch(() => {}); // fuerza play por si el navegador lo pausa
        video.parentElement.classList.add("active");
        carrusel.classList.add("active");
        activeVideo = video;
      }
    });
  });

  // cerrar si toca fuera
  document.addEventListener("click", () => {
    if (activeVideo) {
      activeVideo.muted = true;
      activeVideo.parentElement.classList.remove("active");
      carrusel.classList.remove("active");
      activeVideo = null;
    }
  });

  const folderModal = document.getElementById("folderModal");
  const folderFullImg = document.getElementById("folderFullImg");
  const folderClose = document.querySelector(".folder-close");
  const folderImgs = document.querySelectorAll(".folder-row img");
  const folderPrev = document.querySelector(".folder-prev");
  const folderNext = document.querySelector(".folder-next");

  let folderIndex = 0;

  folderImgs.forEach((img, i) => {
    img.addEventListener("click", () => {
      folderModal.style.display = "flex";
      folderFullImg.src = img.src;
      folderIndex = i;
    });
  });

  folderClose.onclick = () => {
    folderModal.style.display = "none";
  };

  function folderShowImg(i) {
    if (i < 0) i = folderImgs.length - 1;
    if (i >= folderImgs.length) i = 0;
    folderFullImg.src = folderImgs[i].src;
    folderIndex = i;
  }

  folderPrev.onclick = () => folderShowImg(folderIndex - 1);
  folderNext.onclick = () => folderShowImg(folderIndex + 1);

  // Cerrar al hacer click fuera
  folderModal.onclick = (e) => {
    if (e.target === folderModal) folderModal.style.display = "none";
  };

  // Teclas
  document.addEventListener("keydown", (e) => {
    if (folderModal.style.display === "flex") {
      if (e.key === "ArrowLeft") folderShowImg(folderIndex - 1);
      if (e.key === "ArrowRight") folderShowImg(folderIndex + 1);
      if (e.key === "Escape") folderModal.style.display = "none";
    }
  });

  /* 📌 JS para abrir modal */
const pinterestModal = document.getElementById("pinterestModal");
const pinterestModalImg = document.getElementById("pinterestModalImg");
const pinterestCaption = document.getElementById("pinterestCaption");
const pinterestImgs = document.querySelectorAll(".pinterest-grid img");
const pinterestClose = document.querySelector(".pinterest-modal .close");

pinterestImgs.forEach(img => {
  img.addEventListener("click", () => {
    pinterestModal.style.display = "block";
    pinterestModalImg.src = img.src;
    pinterestCaption.innerHTML = img.alt;
  });
});

/* 📌 Cerrar modal con la X */
pinterestClose.onclick = () => {
  pinterestModal.style.display = "none";
};

/* 📌 Cerrar modal al hacer clic en el fondo negro */
window.addEventListener("click", (e) => {
  if (e.target === pinterestModal) {
    pinterestModal.style.display = "none";
  }
});