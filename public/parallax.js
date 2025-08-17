// Effet Parallaxe Vanilla JS
document.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  // Déplace l'image de fond
  const parallax = document.querySelector(".parallax");
  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`; // vitesse réduite
  }

  // Si tu veux animer aussi des titres ou sous-titres :
  const title = document.querySelector(".parallax-title");
  if (title) {
    title.style.transform = `translateY(${scrolled * 0.2}px)`;
  }

  const subtitle = document.querySelector(".parallax-subtitle");
  if (subtitle) {
    subtitle.style.transform = `translateY(${scrolled * 0.3}px)`;
  }

  const button = document.querySelector(".parallax-button");
  if (button) {
    button.style.transform = `translateY(${scrolled * 0.4}px)`;
  }
});
