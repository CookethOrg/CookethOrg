function loadComponent(id, file, callback) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (typeof callback === "function") callback();
    })
    .catch(error => console.error(`Error loading ${file}:`, error));
}

function highlightActiveNav() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("thispagebutton");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "/components/navbar.html", highlightActiveNav);
  loadComponent("footer", "/components/footer.html");
});