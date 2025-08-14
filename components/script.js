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
  console.log(currentPath)

  document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPath = link.getAttribute("href").replace(/^\//, "");;
    if (linkPath === currentPath) {
      link.classList.add("thispagebutton");
    }
    console.log(linkPath)
  });
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Starting Load...")
  loadComponent("navbar", "navbar.html", highlightActiveNav);
  loadComponent("footer", "footer.html");
});