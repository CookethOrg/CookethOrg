document.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
    renderFooter();
    // Re-run other dynamic injectors
    initDynamicComponents();
});

function renderNavbar() {
    const navElement = document.getElementById("navbar-component");
    if (!navElement) return;

    fetch("./navbar.json")
        .then(res => res.json())
        .then(links => {
            const currentPage = window.location.pathname.split("/").pop() || "index.html";
            const navHTML = `
                <nav>
                    <div class="nav-container">
                        <a href="index.html"><img class="nav_logo" id="nav_logo" src="./public/navlogo.png" alt="logo"/></a>
                        <ul class="nav-links" id="nav-links">
                            ${links.map(item => `
                                <li><a href="${item.link}" class="${currentPage === item.link ? 'thispagebutton' : ''}">${item.name}</a></li>
                            `).join('')}
                        </ul>
                        <div class="hamburgerContainer" id="hamburger">
                            <i class="fa-solid fa-bars hamburgerMenu"></i>
                        </div>
                    </div>
                </nav>`;
            navElement.innerHTML = navHTML;
            setupHamburger();
        });
}

function setupHamburger() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("navActive");
        });
    }
}

function renderFooter() {
    const footerElement = document.getElementById("footer-component");
    if (!footerElement) return;

    footerElement.innerHTML = `
        <footer class="custom-footer" data-aos="fade-up">
            <div class="footer-left">
                <img src="./public/cooklight.png" alt="Logo" class="footer-logo"/>
                <div class="footer-socials">
                    <a href="https://www.linkedin.com/company/cooketh-company"><img src="./public/linkedin.png" alt="LinkedIn"/></a>
                    <a href="https://discord.com/invite/fN3X4SMK3T"><img src="./public/disc.png" alt="Discord"/></a>
                </div>
            </div>
            <div class="footer-right">
                <ul class="footer-nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="service.html">Services</a></li>
                </ul>
                <p class="copyright">Copyright © 2025 All rights reserved. @cookethcompany</p>
            </div>
        </footer>`;
}

function initDynamicComponents() {
    // Dynamic Results
    const resultsContainer = document.getElementById("results-container");
    if (resultsContainer) {
        fetch("./results.json").then(res => res.json()).then(data => {
            resultsContainer.innerHTML = data.map((item, index) => `
                <div class="resultCard" data-aos="zoom-in" data-aos-delay="${index * 100}">
                    <div class="resultShape"><i class="${item.icon}"></i></div>
                    <h2 class="title resultStat">${item.stat}</h2>
                    <p class="subContent resultDesc">${item.description}</p>
                </div>`).join("");
        });
    }

    // Dynamic Team
    const teamContainer = document.getElementById("team-container");
    if (teamContainer) {
        fetch("./team.json").then(res => res.json()).then(data => {
            teamContainer.innerHTML = data.map(member => `
                <div class="team-member" data-aos="fade-up">
                    <img src="${member.image}" alt="${member.name}" />
                    <p class="teamName">${member.name}</p>
                    <p class="teamRole content">${member.role}</p>
                    <a href="${member.xLink}" target="_blank" class="xlogo"><img src="./public/x.png" alt="X" /></a>
                </div>`).join("");
        });
    }
}