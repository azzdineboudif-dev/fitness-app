
// Fallback Parallax (indépendant de React)
document.addEventListener("DOMContentLoaded", () => {
  // Tous les éléments qui auront un data-speed
  const elements = document.querySelectorAll("[data-speed]");

  const onScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    elements.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-speed")) || 0.3; // défaut 0.3
      const y = -(scrollY * speed);

      // Déplacement vertical
      el.style.transform = `translate3d(0, ${y}px, 0)`;

      // Optionnel : fondu si data-fade="true"
      if (el.dataset.fade === "true") {
        el.style.opacity = String(Math.max(0, 1 - scrollY / 800));
      }
    });
  };

  // Première application + écouteurs
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
});
