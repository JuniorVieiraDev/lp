const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


const hero = document.querySelector('.hero');

  // Lista de backgrounds
  const backgrounds = [
    { desktop: './imgs/Hero1_Desktop.jpg', mobile: './imgs/Hero1_Mobile.jpg' },
    { desktop: './imgs/Hero2_Desktop.jpg', mobile: './imgs/Hero2_Mobile.jpg' },
    { desktop: './imgs/Hero3_Desktop.jpg', mobile: './imgs/Hero3_Mobile.jpg' },
    { desktop: './imgs/Hero4_Desktop.jpg', mobile: './imgs/Hero4_Mobile.jpg' },
    { desktop: './imgs/Hero5_Desktop.jpg', mobile: './imgs/Hero5_Mobile.jpg' },
  ];

  let current = 0;

  function setBackground() {
    const isMobile = window.innerWidth <= 768;
    const bg = backgrounds[current];
    const img = isMobile ? bg.mobile : bg.desktop;
    hero.style.backgroundImage = `url(${img})`;
  }

  // Troca a cada 5 segundos
  setInterval(() => {
    current = (current + 1) % backgrounds.length;
    setBackground();
  }, 5000);

  // Detecta mudança de tamanho da tela
  window.addEventListener('resize', setBackground);

  // Inicializa
  setBackground();