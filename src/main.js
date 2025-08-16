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

// Carousel JS
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });