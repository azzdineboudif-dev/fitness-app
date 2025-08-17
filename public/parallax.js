// Fallback Parallax (marche sans React et cible aussi le héros avec background inline)
document.addEventListener("DOMContentLoaded", () => {
  // 1) Repérer le bloc héros qui porte déjà un background-image inline
  //    (les sélecteurs ci-dessous couvrent les variantes qu'on a vues dans tes captures)
  const heroEl =
    document.querySelector('header [style*="background-image"]') ||
    document.querySelector('header .bg-cover') ||
    document.querySelector('[style*="hero-banner"]');

  // 2) Si on le trouve, on lui ajoute la classe .parallax (et on force l'attachement)
  if (heroEl && !heroEl.classList.contains("parallax")) {
    heroEl.classList.add("parallax");
    // renfort CSS pour l'effet
    heroEl.style.backgroundAttachment = "fixed";
    heroEl.style.willChange = "transform";
  }

  // 3) Cible principale pour l'effet (héros prioritaire, sinon tout autre .parallax)
  const bg = heroEl || document.querySelector(".parallax");
  if (!bg) return;

  // --- Effet de défilement pour le fond (50% de la vitesse) ---
  const onScrollBg = () => {
    const y = (window.scrollY || window.pageYOffset) * 0.5; // 0.5 = 50%
    bg.style.backgroundPosition = `center ${-y}px`;
  };

  // --- Effet optionnel pour les items déclarés .parallax-item[data-speed="0.2" ... "0.8"] ---
  const items = Array.from(document.querySelectorAll(".parallax-item"));

  const onScrollItems = () => {
    const scrolly = window.scrollY || window.pageYOffset;
    items.forEach((el) => {
      const speed = parseFloat(el.dataset.speed || "0.3"); // défaut 30%
      el.style.transform = `translate3d(0, ${-(scrolly * speed)}px, 0)`;

      // Si on veut un léger fondu, ajouter la classe .parallax-fade sur l’élément
      if (el.classList.contains("parallax-fade")) {
        el.style.opacity = String(Math.max(0, 1 - scrolly / 800));
      }
    });
  };

  // --- Boucle légère via rAF (limite la charge en évitant trop de calculs) ---
  let ticking = false;
  const tick = () => {
    ticking = false;
    onScrollBg();
    onScrollItems();
  };

  const requestTick = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(tick);
    }
  };

  // init à 0
  requestTick();

  // listeners
  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("resize", requestTick);
});
