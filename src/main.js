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

// Contact Form Submissions
const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const btnText = document.getElementById("btnText");
const btnLoader = document.getElementById("btnLoader");
const successMessage = document.getElementById("successPanel");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  btnText.textContent = "";
  btnLoader.style.display = "flex";
  submitBtn.disabled = true;

  try {
    const data = new FormData(form);
    const object = Object.fromEntries(data);
    const json = JSON.stringify(object);

    // const response = await fetch("https://submit-form.com/0L6QO6wvG", {
    const response = await fetch("https://submit-form.com/iZS9Y5PdC", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: json,
    });

    if (response.ok) {
      console.log("Thank you! Your message has been sent.");
      successMessage.style.display = "flex";
      form.reset();
    } else {
      alert("Something went wrong, please try again.");
      console.log("Something went wrong, please try again.");
    }
  } catch (error) {
    console.log("Network error. Try again later.");
    console.log(error)
  } finally {
    btnText.textContent = "Submit";
    btnLoader.style.display = "none";
    submitBtn.disabled = false;
    form.reset();
  }
});