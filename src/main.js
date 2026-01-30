console.log("JavaScript loaded");

// Navbar Logic
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navLogo = document.getElementById("nav_logo")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("navActive");
  navLinks.classList.toggle("navActive");
  navLogo.classList.toggle("navLogoActive")
});

document.querySelectorAll(".nav-links li a").forEach(link =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    navLogo.classList.remove("navLogoActive")
  })
);

// Dynamic Results Rendering
document.addEventListener("DOMContentLoaded", () => {
  const resultsContainer = document.getElementById("results-container");

  if (resultsContainer) {
    fetch("./results.json")
      .then(res => res.json())
      .then(data => {
        resultsContainer.innerHTML = data.map((item, index) => `
          <div class="resultCard" data-aos="zoom-in" data-aos-delay="${index * 100}">
            <div class="resultShape">
               <i class="${item.icon}"></i>
            </div>
            <h2 class="title resultStat">${item.stat}</h2>
            <p class="subContent resultDesc">${item.description}</p>
          </div>
        `).join("");
      })
      .catch(err => console.error("Error loading results:", err));
  }
});
// Dynamic Team Rendering
document.addEventListener("DOMContentLoaded", () => {
  const teamContainer = document.getElementById("team-container");

  if (teamContainer) {
    fetch("./team.json")
      .then(res => res.json())
      .then(data => {
        teamContainer.innerHTML = data.map(member => `
          <div class="team-member" data-aos="fade-up" data-aos-duration="800">
            <img src="${member.image}" alt="${member.name}" />
            <p class="teamName">${member.name}</p>
            <p class="teamRole content">${member.role}</p>
            <a href="${member.xLink}" target="_blank" class="xlogo">
              <img src="./public/x.png" alt="X" />
            </a>
          </div>
        `).join("");
      })
      .catch(err => console.error("Error loading team data:", err));
  }
});


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