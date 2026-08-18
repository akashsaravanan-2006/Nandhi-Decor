/* =========================================================
   NANDHI DECOR
   COMPLETE WEBSITE JAVASCRIPT
========================================================= */

"use strict";


/* =========================================================
   WAIT FOR PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initLoader();
    initMobileMenu();
    initNavbar();
    initScrollReveal();
    initHeroSlider();
    initGallery();
    initFeedback();
    initRating();
    initFAQ();
    initBackToTop();
    initParticles();

});


/* =========================================================
   1. PAGE LOADER
========================================================= */

function initLoader() {

    const loader = document.getElementById("pageLoader");

    if (!loader) return;

    window.addEventListener("load", function () {

        setTimeout(function () {

            loader.classList.add("hidden");

        }, 900);

    });

}


/* =========================================================
   2. MOBILE MENU
========================================================= */

function initMobileMenu() {

    const menuButton =
        document.getElementById("mobileMenuButton");

    const navMenu =
        document.getElementById("navMenu");

    if (!menuButton || !navMenu) return;


    menuButton.addEventListener("click", function () {

        menuButton.classList.toggle("active");

        navMenu.classList.toggle("open");

        document.body.classList.toggle("menu-open");

    });


    /* Close menu when clicking a link */

    const navLinks =
        navMenu.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            menuButton.classList.remove("active");

            navMenu.classList.remove("open");

            document.body.classList.remove("menu-open");

        });

    });

}


/* =========================================================
   3. NAVBAR
========================================================= */

function initNavbar() {

    const header =
        document.querySelector(".header");

    const navLinks =
        document.querySelectorAll(".nav-link");

    if (!header) return;


    function updateNavbar() {

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* Active menu based on section */

    const sections = [
        "home",
        "about",
        "services",
        "events",
        "gallery",
        "feedback",
        "contact"
    ];


    function updateActiveLink() {

        let currentSection = "home";

        const scrollPosition =
            window.scrollY + 180;


        sections.forEach(function (sectionId) {

            const section =
                document.getElementById(sectionId);

            if (!section) return;

            if (
                section.offsetTop <=
                scrollPosition
            ) {

                currentSection = sectionId;

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (
                href ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveLink,
        { passive: true }
    );

    updateActiveLink();

}


/* =========================================================
   4. SCROLL REVEAL ANIMATION
========================================================= */

function initScrollReveal() {

    const revealElements =
        document.querySelectorAll(".reveal");

    if (!revealElements.length) return;


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -40px 0px"
            }
        );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });

}


/* =========================================================
   5. HERO IMAGE + TEXT SLIDER
========================================================= */

function initHeroSlider() {

    const heroImage =
        document.getElementById("heroImage");

    const heroDescription =
        document.getElementById(
            "heroDescription"
        );

    if (!heroImage) return;


    /*
       CHANGE THESE IMAGES
       IF YOU WANT DIFFERENT HERO IMAGES
    */

    const heroSlides = [

        {
            image: "../img/img2.jpg",

            text:
                "We transform ordinary spaces into extraordinary celebrations filled with beauty, elegance and unforgettable memories."
        },

        {
            image: "../img/img5.jpg",

            text:
                "Beautiful wedding decorations designed to make every moment feel magical, elegant and unforgettable."
        },

        {
            image: "../img/img3.jpg",

            text:
                "From birthdays to grand celebrations, we create colorful spaces filled with joy, creativity and beautiful memories."
        },

        {
            image: "../img/img13.jpg",

            text:
                "Traditional Haldi celebrations brought to life with flowers, colors, lighting and creative decoration."
        }

    ];


    let currentSlide = 0;


    function changeHeroSlide() {

        currentSlide++;

        if (
            currentSlide >=
            heroSlides.length
        ) {

            currentSlide = 0;

        }


        const slide =
            heroSlides[currentSlide];


        heroImage.style.opacity = "0";


        setTimeout(function () {

            heroImage.src =
                slide.image;

            if (heroDescription) {

                heroDescription.textContent =
                    slide.text;

            }

            heroImage.style.opacity = "1";

        }, 300);

    }


    heroImage.style.transition =
        "opacity 0.6s ease";


    setInterval(
        changeHeroSlide,
        6000
    );

}


/* =========================================================
   6. GALLERY FILTER
========================================================= */

function initGallery() {

    const filterButtons =
        document.querySelectorAll(
            ".filter-button"
        );

    const galleryItems =
        document.querySelectorAll(
            ".gallery-item"
        );

    const loadMoreButton =
        document.getElementById(
            "loadMoreGallery"
        );


    if (!galleryItems.length) return;


    /* -----------------------------------------------------
       GALLERY FILTER
    ----------------------------------------------------- */

    filterButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const filter =
                    button.dataset.filter;


                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                galleryItems.forEach(
                    function (item) {

                        if (
                            filter === "all" ||
                            item.classList.contains(
                                filter
                            )
                        ) {

                            item.style.display =
                                "block";

                            setTimeout(
                                function () {

                                    item.style.opacity =
                                        "1";

                                    item.style.transform =
                                        "scale(1)";

                                },
                                20
                            );

                        } else {

                            item.style.opacity =
                                "0";

                            item.style.transform =
                                "scale(0.92)";

                            setTimeout(
                                function () {

                                    item.style.display =
                                        "none";

                                },
                                300
                            );

                        }

                    }
                );

            }
        );

    });


    /* -----------------------------------------------------
       VIEW MORE
    ----------------------------------------------------- */

    if (loadMoreButton) {

        let expanded = false;


        loadMoreButton.addEventListener(
            "click",
            function () {

                expanded =
                    !expanded;


                const hiddenItems =
                    document.querySelectorAll(
                        ".gallery-item.hidden-gallery"
                    );


                if (expanded) {

                    hiddenItems.forEach(
                        function (item) {

                            item.classList.add(
                                "show-gallery"
                            );

                        }
                    );

                    loadMoreButton.innerHTML =
                        'Show Less <i class="fa-solid fa-arrow-up"></i>';


                } else {

                    hiddenItems.forEach(
                        function (item) {

                            item.classList.remove(
                                "show-gallery"
                            );

                        }
                    );

                    loadMoreButton.innerHTML =
                        'View More Work <i class="fa-solid fa-arrow-down"></i>';

                }

            }
        );

    }

}


/* =========================================================
   7. STAR RATING
========================================================= */

let selectedRating = 0;


function initRating() {

    const ratingInput =
        document.getElementById(
            "ratingInput"
        );

    if (!ratingInput) return;


    const ratingButtons =
        ratingInput.querySelectorAll(
            "button"
        );


    ratingButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    selectedRating =
                        Number(
                            button.dataset.rating
                        );


                    updateStars(
                        ratingButtons
                    );

                }
            );


            /* Hover */

            button.addEventListener(
                "mouseenter",
                function () {

                    const hoverRating =
                        Number(
                            button.dataset.rating
                        );


                    ratingButtons.forEach(
                        function (star) {

                            const starRating =
                                Number(
                                    star.dataset.rating
                                );


                            if (
                                starRating <=
                                hoverRating
                            ) {

                                star.style.color =
                                    "#d4af37";

                            } else {

                                star.style.color =
                                    "#444";

                            }

                        }
                    );

                }
            );

        }
    );


    ratingInput.addEventListener(
        "mouseleave",
        function () {

            updateStars(
                ratingButtons
            );

        }
    );

}


function updateStars(buttons) {

    buttons.forEach(
        function (button) {

            const rating =
                Number(
                    button.dataset.rating
                );


            if (
                rating <=
                selectedRating
            ) {

                button.classList.add(
                    "active"
                );

                button.style.color =
                    "#d4af37";

            } else {

                button.classList.remove(
                    "active"
                );

                button.style.color =
                    "#444";

            }

        }
    );

}


/* =========================================================
   8. FEEDBACK SYSTEM
========================================================= */

function initFeedback() {

    const form =
        document.getElementById(
            "feedbackForm"
        );

    const reviewsContainer =
        document.getElementById(
            "reviewsContainer"
        );


    if (!form || !reviewsContainer)
        return;


    /* Load existing reviews */

    loadReviews(
        reviewsContainer
    );


    /* Submit feedback */

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nameInput =
                document.getElementById(
                    "feedbackName"
                );

            const eventInput =
                document.getElementById(
                    "feedbackEvent"
                );

            const messageInput =
                document.getElementById(
                    "feedbackMessage"
                );


            const name =
                nameInput.value.trim();

            const eventType =
                eventInput.value.trim();

            const message =
                messageInput.value.trim();


            /* Validation */

            if (!name) {

                showNotification(
                    "Please enter your name."
                );

                nameInput.focus();

                return;

            }


            if (!eventType) {

                showNotification(
                    "Please select your event."
                );

                eventInput.focus();

                return;

            }


            if (
                selectedRating <
                1
            ) {

                showNotification(
                    "Please select a rating."
                );

                return;

            }


            if (!message) {

                showNotification(
                    "Please enter your feedback."
                );

                messageInput.focus();

                return;

            }


            /* Create review */

            const review = {

                id:
                    Date.now(),

                name:
                    name,

                event:
                    eventType,

                rating:
                    selectedRating,

                message:
                    message,

                date:
                    new Date()
                    .toLocaleDateString(
                        "en-IN",
                        {
                            day: "2-digit",
                            month: "short",
                            year: "numeric"
                        }
                    )

            };


            /* Get old reviews */

            let reviews =
                JSON.parse(
                    localStorage.getItem(
                        "nandhiDecorReviews"
                    )
                ) || [];


            /* Add newest review first */

            reviews.unshift(review);


            /* Keep latest 20 reviews */

            reviews =
                reviews.slice(0, 20);


            /* Save */

            localStorage.setItem(
                "nandhiDecorReviews",
                JSON.stringify(
                    reviews
                )
            );


            /* Display */

            loadReviews(
                reviewsContainer
            );


            /* Reset */

            form.reset();

            selectedRating = 0;

            updateStars(
                document.querySelectorAll(
                    "#ratingInput button"
                )
            );


            showNotification(
                "Thank you! Your feedback has been added."
            );


            /* Scroll to reviews */

            setTimeout(
                function () {

                    reviewsContainer.scrollIntoView(
                        {
                            behavior: "smooth",
                            block: "center"
                        }
                    );

                },
                500
            );

        }
    );

}


/* =========================================================
   LOAD REVIEWS
========================================================= */

function loadReviews(
    reviewsContainer
) {

    let reviews =
        JSON.parse(
            localStorage.getItem(
                "nandhiDecorReviews"
            )
        ) || [];


    /* Default reviews */

    if (
        reviews.length === 0
    ) {

        reviews = [

            {
                id: 1,

                name:
                    "Priya & Arun",

                event:
                    "Wedding",

                rating:
                    5,

                message:
                    "The decoration was absolutely beautiful. Every detail looked elegant and perfect. Thank you for making our wedding so memorable!",

                date:
                    "12 Aug 2025"
            },


            {
                id: 2,

                name:
                    "Karthik",

                event:
                    "Birthday",

                rating:
                    5,

                message:
                    "Amazing birthday decoration! The team understood exactly what we wanted and created a wonderful setup.",

                date:
                    "05 Jul 2025"
            },


            {
                id: 3,

                name:
                    "Divya",

                event:
                    "Engagement",

                rating:
                    4,

                message:
                    "Beautiful work and very professional team. The stage and floral decoration looked fantastic.",

                date:
                    "28 Jun 2025"
            }

        ];

    }


    reviewsContainer.innerHTML = "";


    reviews.forEach(
        function (review) {

            const reviewElement =
                createReviewElement(
                    review
                );


            reviewsContainer.appendChild(
                reviewElement
            );

        }
    );

}


/* =========================================================
   CREATE REVIEW CARD
========================================================= */

function createReviewElement(
    review
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "review-card";


    const avatar =
        getInitials(
            review.name
        );


    const stars =
        createStars(
            review.rating
        );


    card.innerHTML = `

        <div class="review-header">

            <div class="reviewer">

                <div class="reviewer-avatar">
                    ${avatar}
                </div>

                <div>

                    <div class="reviewer-name">
                        ${escapeHTML(review.name)}
                    </div>

                    <div class="reviewer-event">
                        ${escapeHTML(review.event)}
                    </div>

                </div>

            </div>

            <div class="review-stars">
                ${stars}
            </div>

        </div>


        <p class="review-message">
            "${escapeHTML(review.message)}"
        </p>


        <div
            style="
                margin-top:14px;
                color:#555;
                font-size:8px;
            "
        >
            ${escapeHTML(review.date)}
        </div>

    `;


    return card;

}


/* =========================================================
   CREATE STARS
========================================================= */

function createStars(
    rating
) {

    let stars = "";

    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        if (
            i <= rating
        ) {

            stars += "★";

        } else {

            stars += "☆";

        }

    }

    return stars;

}


/* =========================================================
   INITIALS
========================================================= */

function getInitials(
    name
) {

    const words =
        name
            .trim()
            .split(" ")
            .filter(Boolean);


    if (!words.length)
        return "?";


    if (words.length === 1) {

        return words[0]
            .substring(0, 2)
            .toUpperCase();

    }


    return (
        words[0][0] +
        words[words.length - 1][0]
    ).toUpperCase();

}


/* =========================================================
   HTML SECURITY
========================================================= */

function escapeHTML(
    text
) {

    return String(text)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   9. FAQ ACCORDION
========================================================= */

function initFAQ() {

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );


    faqItems.forEach(
        function (item) {

            const question =
                item.querySelector(
                    ".faq-question"
                );


            if (!question) return;


            question.addEventListener(
                "click",
                function () {


                    const wasActive =
                        item.classList.contains(
                            "active"
                        );


                    /* Close all */

                    faqItems.forEach(
                        function (faq) {

                            faq.classList.remove(
                                "active"
                            );

                        }
                    );


                    /* Open clicked */

                    if (!wasActive) {

                        item.classList.add(
                            "active"
                        );

                    }

                }
            );

        }
    );

}


/* =========================================================
   10. BACK TO TOP
========================================================= */

function initBackToTop() {

    const button =
        document.getElementById(
            "backToTop"
        );


    if (!button) return;


    window.addEventListener(
        "scroll",
        function () {

            if (
                window.scrollY >
                500
            ) {

                button.classList.add(
                    "show"
                );

            } else {

                button.classList.remove(
                    "show"
                );

            }

        },
        { passive: true }
    );


    button.addEventListener(
        "click",
        function () {

            window.scrollTo(
                {
                    top: 0,

                    behavior:
                        "smooth"
                }
            );

        }
    );

}


/* =========================================================
   11. BACKGROUND PARTICLES
========================================================= */

function initParticles() {

    const container =
        document.getElementById(
            "particles"
        );


    if (!container) return;


    /* Don't create too many particles */

    const count =
        window.innerWidth < 600
            ? 18
            : 35;


    for (
        let i = 0;
        i < count;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "particle";


        const size =
            Math.random() * 3 + 1;


        particle.style.width =
            size + "px";


        particle.style.height =
            size + "px";


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.animationDuration =
            (
                Math.random() * 10 +
                8
            ) + "s";


        particle.style.animationDelay =
            (
                Math.random() * 10
            ) + "s";


        container.appendChild(
            particle
        );

    }

}


/* =========================================================
   12. NOTIFICATION
========================================================= */

function showNotification(
    message
) {

    let notification =
        document.getElementById(
            "siteNotification"
        );


    if (!notification) {

        notification =
            document.createElement(
                "div"
            );


        notification.id =
            "siteNotification";


        notification.innerHTML = `

            <div
                class="notification-icon"
            >
                <i class="fa-solid fa-check"></i>
            </div>

            <div
                class="notification-message"
            ></div>

        `;


        document.body.appendChild(
            notification
        );


        const style =
            document.createElement(
                "style"
            );


        style.textContent = `

            #siteNotification {

                position: fixed;

                right: 25px;

                top: 100px;

                z-index: 99999;

                max-width: 360px;

                min-width: 280px;

                display: flex;

                align-items: center;

                gap: 13px;

                padding: 15px 18px;

                background:
                    rgba(18,18,18,0.97);

                border:
                    1px solid
                    rgba(212,175,55,0.4);

                box-shadow:
                    0 20px 50px
                    rgba(0,0,0,0.5);

                color: #fff;

                font-family:
                    "Poppins",
                    sans-serif;

                font-size: 10px;

                transform:
                    translateX(120%);

                opacity: 0;

                transition:
                    all 0.4s ease;

            }


            #siteNotification.show {

                transform:
                    translateX(0);

                opacity: 1;

            }


            .notification-icon {

                width: 32px;

                height: 32px;

                flex-shrink: 0;

                display: flex;

                align-items: center;

                justify-content: center;

                border-radius: 50%;

                background:
                    #d4af37;

                color: #111;

            }


            .notification-message {

                line-height: 1.5;

            }


            @media(max-width:600px) {

                #siteNotification {

                    left: 15px;

                    right: 15px;

                    top: 85px;

                    min-width: 0;

                    max-width: none;

                }

            }

        `;


        document.head.appendChild(
            style
        );

    }


    const messageElement =
        notification.querySelector(
            ".notification-message"
        );


    messageElement.textContent =
        message;


    notification.classList.add(
        "show"
    );


    clearTimeout(
        window.notificationTimer
    );


    window.notificationTimer =
        setTimeout(
            function () {

                notification.classList.remove(
                    "show"
                );

            },
            3500
        );

}


/* =========================================================
   13. IMAGE ERROR HANDLING
========================================================= */

document.addEventListener(
    "error",
    function (event) {

        if (
            event.target.tagName ===
            "IMG"
        ) {

            event.target.style.background =
                "#151515";

        }

    },
    true
);


/* =========================================================
   14. SMOOTH ANCHOR SCROLL
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const link =
            event.target.closest(
                'a[href^="#"]'
            );


        if (!link) return;


        const targetId =
            link.getAttribute(
                "href"
            );


        if (
            !targetId ||
            targetId === "#"
        ) {

            return;

        }


        const target =
            document.querySelector(
                targetId
            );


        if (!target) return;


        event.preventDefault();


        target.scrollIntoView(
            {
                behavior: "smooth",

                block: "start"
            }
        );

    }
);


/* =========================================================
   15. PAGE VISIBILITY
========================================================= */

document.addEventListener(
    "visibilitychange",
    function () {

        if (
            document.hidden
        ) {

            document.title =
                "Nandhi Decor | Beautiful Events";

        } else {

            document.title =
                "Nandhi Decor";

        }

    }
);