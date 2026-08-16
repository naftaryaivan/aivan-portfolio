/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close menu when clicking a link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   TYPING ANIMATION
===================================================== */

const typingText = document.getElementById("typingText");

const words = [
    "Software Developer",
    "Problem Solver",
    "Computer Engineering Student",
    "Technology Enthusiast"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    const speed = deleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =====================================================
   PROJECT FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active from all buttons */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        /* Add active to clicked button */

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        projectCards.forEach(card => {

            const category =
                card.getAttribute("data-category");

            if (filter === "all" || category === filter) {

                card.classList.remove("hide");

                setTimeout(() => {
                    card.classList.add("visible");
                }, 50);

            } else {

                card.classList.add("hide");

            }

        });

    });

});


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeBtn =
    document.getElementById("themeBtn");

const themeIcon =
    themeBtn.querySelector("i");


/* Check saved theme */

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");

}


/* Toggle theme */

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const isLight =
        document.body.classList.contains("light-theme");

    if (isLight) {

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    } else {

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    }

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .skill-card, .timeline-item"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }


    formMessage.textContent =
        "Thank you! Your message has been received.";

    contactForm.reset();

});


/* =====================================================
   SMOOTH HEADER EFFECT
===================================================== */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0, 0, 0, 0.15)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =====================================================
   INITIAL PROJECT VISIBILITY
===================================================== */

window.addEventListener("load", () => {

    document
        .querySelectorAll(".project-card")
        .forEach(card => {

            card.classList.add("visible");

        });

});