function toggleMenu() {
    const menu = document.querySelector('.navbar__menu');
    const burger = document.querySelector('.navbar__burger');
    menu.classList.toggle('active');
    burger.classList.toggle('active');
  

  document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 992) {
        menu.classList.remove('active');
        burger.classList.remove('active');
      }
    });
  });
}

// Highlight current section in navigation
window.addEventListener('scroll', function() {
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      const id = section.getAttribute('id');
      document.querySelectorAll('.navbar__link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});