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

  videos.forEach(videoss => {
    // PC hover → solo activar/desactivar audio
    videoss.addEventListener("mouseenter", () => {
      videoss.muted = false;
      videoss.play().catch(() => {}); // fuerza play
    });

    videoss.addEventListener("mouseleave", () => {
      videoss.muted = true;
    });

    // 📱 MÓVIL → tap/click para activar
    videoss.parentElement.addEventListener("click", (e) => {
      e.stopPropagation();

      if (activeVideo && activeVideo !== videoss) {
        activeVideo.muted = true;
        activeVideo.parentElement.classList.remove("active");
        carrusel.classList.remove("active");
      }

      if (videoss.parentElement.classList.contains("active")) {
        videoss.muted = true;
        videoss.parentElement.classList.remove("active");
        carrusel.classList.remove("active");
        activeVideo = null;
      } else {
        videoss.muted = false;
        videoss.play().catch(() => {}); // fuerza play por si el navegador lo pausa
        videoss.parentElement.classList.add("active");
        carrusel.classList.add("active");
        activeVideo = videoss;
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

document.querySelectorAll('#videosExtra .videos-extra-card').forEach(card => {
  const videoEx = card.querySelector('.videos-extra-card video');

  // ✅ PC: hover activa audio
  card.addEventListener('mouseenter', () => {
    videoEx.muted = false;
    card.classList.add('active');
  });

  card.addEventListener('mouseleave', () => {
    videoEx.muted = true;
    card.classList.remove('active');
  });

  // ✅ Móviles: tocar activa audio solo en ese video
  card.addEventListener('touchstart', () => {
    document.querySelectorAll('#videosExtra .videos-extra-card video').forEach(v => {
      v.muted = true;
      v.parentElement.classList.remove('active');
    });

    videoEx.muted = false;
    card.classList.add('active');
  });
});
