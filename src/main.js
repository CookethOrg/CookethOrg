document.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
    renderFooter();
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
    if (hamburger && navLinks) {
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
            <div class="footer-container">
                <div class="footer-left">
                    <img src="./public/cooklight.png" alt="Logo" class="footer-logo"/>
                    <p class="footer-tagline content">Turning 'what if' into 'heck yeah'.</p>
                    <div class="footer-socials">
                        <a href="https://www.linkedin.com/company/cooketh-company" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://discord.com/invite/fN3X4SMK3T" target="_blank"><i class="fa-brands fa-discord"></i></a>
                        <a href="https://www.instagram.com/cookethcompany" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://x.com/cookethcompany" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>

                <div class="footer-middle">
                    <h3 class="title">Explore</h3>
                    <ul class="footer-nav-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="service.html">Services</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>

                <div class="footer-right">
                    <h3 class="title">Get in Touch</h3>
                    <div class="email-links">
                        <div class="email-link">
                            <i class="fa-solid fa-envelope"></i>
                            <a href="mailto:cookethcompany@gmail.com">cookethcompany@gmail.com</a>
                        </div>
                        <div class="email-link">
                            <i class="fa-solid fa-envelope"></i>
                            <a href="mailto:subroto.2003@gmail.com">subroto.2003@gmail.com</a>
                        </div>
                    </div>
                    <p class="copyright">Copyright © 2025 All rights reserved. <br>@cookethcompany</p>
                </div>
            </div>
        </footer>`;
}

function initDynamicComponents() {
    const resultsContainer = document.getElementById("results-container");
    if (resultsContainer) {
        fetch("./results.json").then(res => res.json()).then(data => {
            resultsContainer.innerHTML = data.map((item, index) => `
                <div class="resultCard" data-aos="zoom-in" data-aos-delay="${index * 100}">
                    <div class="resultShape"><i class="${item.icon}"></i></div>
                    <h2 class="title resultStat">${item.stat}</h2>
                    <p class="subContent resultDesc">${item.description}</p>
                </div>`).join("");
        }).catch(err => console.log("Results not found"));
    }

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
        }).catch(err => console.log("Team not found"));
    }
}