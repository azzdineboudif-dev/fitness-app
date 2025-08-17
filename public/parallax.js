// Fallback Parallax (marche sans React)
document.addEventListener("DOMContentLoaded", () => {
  const bg = document.querySelector(".parallax");
  if (!bg) return;

  const onScroll = () => {
    // 0.5 = 50% de la vitesse de défilement
    const y = window.scrollY * 0.5;
    bg.style.backgroundPosition = `center ${-y}px`;
  };

  // pour des éléments optionnels: .parallax-item[data-speed="0.2" .. "0.8"]
  const items = Array.from(document.querySelectorAll(".parallax-item"));
  const onScrollItems = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    items.forEach((el) => {
      const speed = parseFloat(el.dataset.speed || "0.3"); // défaut 30%
      el.style.transform = `translate3d(0, ${-(scrollY * speed)}px, 0)`;
      if (el.classList.contains("parallax-fade")) {
        el.style.opacity = String(Math.max(0, 1 - scrollY / 800));
      }
    });
  };

  const tick = () => {
    onScroll();
    onScrollItems();
  };

  tick();
  window.addEventListener("scroll", tick, { passive: true });
  window.addEventListener("resize", tick);
});

