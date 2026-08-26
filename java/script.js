// =====================================================
// AWED PORTFOLIO - JAVASCRIPT
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // =================================================
    // BURGER MENU
    // =================================================

    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("active");

            // Change the icon
            if (navbar.classList.contains("active")) {
                menuToggle.textContent = "✕";
            } else {
                menuToggle.textContent = "☰";
            }

        });

        // Close menu when clicking a link
        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("active");
                menuToggle.textContent = "☰";

            });

        });
    }


    // =================================================
    // DARK MODE
    // =================================================

    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                themeToggle.textContent = "☀️";

            } else {

                themeToggle.textContent = "🌙";

            }

        });

    }


    // =================================================
    // LANGUAGE BUTTON
    // =================================================

    const langFr = document.getElementById("lang-fr");

    if (langFr) {

        langFr.addEventListener("click", function () {

            console.log("Français sélectionné");

        });

    }


    // =================================================
    // SCROLL UP / DOWN BUTTONS
    // =================================================

    const scrollUp = document.getElementById("scrollUp");
    const scrollDown = document.getElementById("scrollDown");


    // Scroll UP
    if (scrollUp) {

        scrollUp.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // Scroll DOWN
    if (scrollDown) {

        scrollDown.addEventListener("click", function () {

            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });

        });

    }


    // Show / hide scroll buttons
    window.addEventListener("scroll", function () {

        if (scrollUp) {

            if (window.scrollY > 300) {

                scrollUp.style.display = "flex";

            } else {

                scrollUp.style.display = "none";

            }

        }


        if (scrollDown) {

            const bottomReached =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 10;

            if (bottomReached) {

                scrollDown.style.display = "none";

            } else {

                scrollDown.style.display = "flex";

            }

        }

    });


    // Initial state
    if (scrollUp) {
        scrollUp.style.display = "none";
    }

    if (scrollDown) {
        scrollDown.style.display = "flex";
    }


    // =================================================
    // SKILLS ACCORDION
    // =================================================

    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach(function (card) {

        card.addEventListener("click", function () {

            skillCards.forEach(function (item) {

                if (item !== card) {

                    item.classList.remove("active");

                }

            });

            card.classList.toggle("active");

        });

    });


    // =================================================
    // ABOUT ANIMATION
    // =================================================

    const about = document.querySelector("#about");

    if (about && "IntersectionObserver" in window) {

        const aboutObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        about.classList.add("show");

                    }

                });

            },
            {
                threshold: 0.2
            }
        );

        aboutObserver.observe(about);

    }


    // =================================================
    // HOBBIES ANIMATION
    // =================================================

    const hobbyCards = document.querySelectorAll(".hobby-card");

    if ("IntersectionObserver" in window) {

        const hobbyObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


        hobbyCards.forEach(function (card) {

            hobbyObserver.observe(card);

        });

    }


    // =================================================
    // PROJECTS ANIMATION
    // =================================================

    const projectCards = document.querySelectorAll(".project-card");

    if ("IntersectionObserver" in window) {

        const projectObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


        projectCards.forEach(function (card) {

            projectObserver.observe(card);

        });

    }


    // =================================================
    // COMING SOON BUTTON
    // =================================================

    const toast = document.getElementById("toast");

    const disabledButtons =
        document.querySelectorAll(".btn.disabled");


    if (toast) {

        disabledButtons.forEach(function (button) {

            button.addEventListener("click", function (event) {

                event.preventDefault();

                toast.classList.add("show");

                setTimeout(function () {

                    toast.classList.remove("show");

                }, 2500);

            });

        });

    }


    // =================================================
    // CONSOLE MESSAGE
    // =================================================

    console.log("AWED Portfolio JavaScript loaded successfully.");

});