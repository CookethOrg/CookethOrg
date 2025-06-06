
console.log("JavaScript loaded");

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  console.log("Hamburger clicked");
  navLinks.classList.toggle('active');
});
