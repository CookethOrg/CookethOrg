console.log("JavaScript loaded");

// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('nav-links');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });


// FAQ JS
document.querySelectorAll('.faqQues').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;

    faqItem.classList.toggle('active');

    const icon = question.querySelector('span');
  });
});