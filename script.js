// Toggle theme between light and dark
const themeSwitcher = document.querySelector('.theme-switcher');
const body = document.body;
const themeIcon = themeSwitcher.querySelector('i');

themeSwitcher.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
});

// Toggle mobile menu visibility
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide mobile menu
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active'); // Hide the menu when a link is clicked
    }
  });
});




