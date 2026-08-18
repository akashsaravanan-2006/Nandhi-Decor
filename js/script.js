/* =========================================================
   NANDHI DECOR
   COMPLETE JAVASCRIPT
   FIREBASE REALTIME DATABASE REVIEWS
========================================================= */


/* =========================================================
   FIREBASE IMPORTS
========================================================= */

import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
    getDatabase,
    ref,
    push,
    onValue
} from
    "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";


/* =========================================================
   FIREBASE CONFIGURATION
========================================================= */

const firebaseConfig = {
  apiKey: "AIzaSyAdCk7iH6dzAfheRTJxgjBdeSJzIwruh48",
  authDomain: "nandhidecor-c719e.firebaseapp.com",
  databaseURL: "https://nandhidecor-c719e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nandhidecor-c719e",
  storageBucket: "nandhidecor-c719e.firebasestorage.app",
  messagingSenderId: "956796053723",
  appId: "1:956796053723:web:9c72fa0d956658d53184fe",
  measurementId: "G-56EM207FYY"
};


/* =========================================================
   INITIALIZE FIREBASE
========================================================= */

const app =
    initializeApp(firebaseConfig);


/* =========================================================
   INITIALIZE REALTIME DATABASE
========================================================= */

const database =
    getDatabase(app);


/* =========================================================
   REVIEWS DATABASE REFERENCE
========================================================= */

const reviewsRef =
    ref(database, "reviews");


console.log(
    "Firebase connected successfully"
);


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let selectedRating = 0;


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initLoader();

        initMobileMenu();

        initNavbar();

        initScrollReveal();

        initHeroSlider();

        initGallery();

        initRating();

        initFeedback();

        initFAQ();

        initBackToTop();

        initParticles();

    }
);


/* =========================================================
   PAGE LOADER
========================================================= */

function initLoader() {

    const loader =
        document.getElementById(
            "pageLoader"
        );


    if (!loader) {
        return;
    }


    window.addEventListener(
        "load",
        function () {

            setTimeout(
                function () {

                    loader.classList.add(
                        "hidden"
                    );

                },
                800
            );

        }
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

function initMobileMenu() {

    const menuButton =
        document.getElementById(
            "mobileMenuButton"
        );


    const navMenu =
        document.getElementById(
            "navMenu"
        );


    if (
        !menuButton ||
        !navMenu
    ) {
        return;
    }


    menuButton.addEventListener(
        "click",
        function () {

            menuButton.classList.toggle(
                "active"
            );


            navMenu.classList.toggle(
                "open"
            );


            document.body.classList.toggle(
                "menu-open"
            );

        }
    );


    const navLinks =
        navMenu.querySelectorAll(
            ".nav-link"
        );


    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    menuButton.classList.remove(
                        "active"
                    );


                    navMenu.classList.remove(
                        "open"
                    );


                    document.body.classList.remove(
                        "menu-open"
                    );

                }
            );

        }
    );

}


/* =========================================================
   NAVBAR
========================================================= */

function initNavbar() {

    const header =
        document.querySelector(
            ".header"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    if (!header) {
        return;
    }


    function updateNavbar() {

        if (
            window.scrollY > 50
        ) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        {
            passive: true
        }
    );


    updateNavbar();


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections = [

        "home",

        "about",

        "services",

        "events",

        "gallery",

        "feedback",

        "contact"

    ];


    function updateActiveNavigation() {

        let current =
            "home";


        const position =
            window.scrollY + 200;


        sections.forEach(
            function (sectionId) {

                const section =
                    document.getElementById(
                        sectionId
                    );


                if (!section) {
                    return;
                }


                if (
                    section.offsetTop <=
                    position
                ) {

                    current =
                        sectionId;

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    href ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        {
            passive: true
        }
    );


    updateActiveNavigation();

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function initScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    if (!elements.length) {
        return;
    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "active"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -40px 0px"
            }
        );


    elements.forEach(
        function (element) {

            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   HERO SLIDER
   IMPORTANT:
   USE .jpeg
========================================================= */

function initHeroSlider() {

    const heroImage =
        document.getElementById(
            "heroImage"
        );


    const heroDescription =
        document.getElementById(
            "heroDescription"
        );


    if (!heroImage) {
        return;
    }


    const heroSlides = [

        {
            image:
                "../img/img2.jpeg",

            text:
                "We transform ordinary spaces into extraordinary celebrations filled with beauty, elegance and unforgettable memories."
        },


        {
            image:
                "../img/img5.jpeg",

            text:
                "Beautiful wedding decorations designed to make every moment feel magical, elegant and unforgettable."
        },


        {
            image:
                "../img/img3.jpeg",

            text:
                "From birthdays to grand celebrations, we create colorful spaces filled with joy, creativity and beautiful memories."
        },


        {
            image:
                "../img/img4.jpeg",

            text:
                "Elegant event decoration designed around your vision, your style and your special moments."
        }

    ];


    let currentSlide = 0;


    heroImage.style.transition =
        "opacity 0.6s ease";


    function changeSlide() {

        currentSlide++;


        if (
            currentSlide >=
            heroSlides.length
        ) {

            currentSlide = 0;

        }


        const slide =
            heroSlides[
                currentSlide
            ];


        heroImage.style.opacity =
            "0";


        setTimeout(
            function () {

                heroImage.src =
                    slide.image;


                if (
                    heroDescription
                ) {

                    heroDescription.textContent =
                        slide.text;

                }


                heroImage.style.opacity =
                    "1";

            },
            300
        );

    }


    setInterval(
        changeSlide,
        6000
    );

}


/* =========================================================
   GALLERY
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


    if (!galleryItems.length) {
        return;
    }


    filterButtons.forEach(
        function (button) {

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
                                filter ===
                                "all" ||
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
                                    30
                                );

                            } else {

                                item.style.opacity =
                                    "0";

                                item.style.transform =
                                    "scale(0.95)";


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

        }
    );

}


/* =========================================================
   STAR RATING
========================================================= */

function initRating() {

    const ratingInput =
        document.getElementById(
            "ratingInput"
        );


    if (!ratingInput) {
        return;
    }


    const buttons =
        ratingInput.querySelectorAll(
            "button"
        );


    buttons.forEach(
        function (button) {


            /* CLICK */

            button.addEventListener(
                "click",
                function () {

                    selectedRating =
                        Number(
                            button.dataset.rating
                        );


                    updateStars(
                        buttons
                    );

                }
            );


            /* HOVER */

            button.addEventListener(
                "mouseenter",
                function () {

                    const hoverRating =
                        Number(
                            button.dataset.rating
                        );


                    buttons.forEach(
                        function (star) {

                            const rating =
                                Number(
                                    star.dataset.rating
                                );


                            if (
                                rating <=
                                hoverRating
                            ) {

                                star.style.color =
                                    "#d4af37";

                            } else {

                                star.style.color =
                                    "#555";

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
                buttons
            );

        }
    );

}


/* =========================================================
   UPDATE RATING STARS
========================================================= */

function updateStars(
    buttons
) {

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
                    "#555";

            }

        }
    );

}


/* =========================================================
   FIREBASE REVIEW SYSTEM
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


    if (
        !form ||
        !reviewsContainer
    ) {
        return;
    }


    /* =====================================================
       READ REVIEWS FROM FIREBASE
    ===================================================== */

    onValue(
        reviewsRef,
        function (snapshot) {

            const data =
                snapshot.val();


            let reviews = [];


            if (data) {

                reviews =
                    Object.keys(data)
                        .map(
                            function (key) {

                                return {

                                    id:
                                        key,

                                    name:
                                        data[key].name ||
                                        "",

                                    event:
                                        data[key].event ||
                                        "",

                                    rating:
                                        Number(
                                            data[key].rating
                                        ) || 0,

                                    message:
                                        data[key].message ||
                                        "",

                                    date:
                                        data[key].date ||
                                        "",

                                    createdAt:
                                        Number(
                                            data[key].createdAt
                                        ) || 0

                                };

                            }
                        );


                /* Newest review first */

                reviews.sort(
                    function (a, b) {

                        return (
                            b.createdAt -
                            a.createdAt
                        );

                    }
                );

            }


            /* =================================================
               DISPLAY REVIEWS
            ================================================= */

            if (
                reviews.length === 0
            ) {

                displayReviews(
                    reviewsContainer,
                    getDefaultReviews()
                );

            } else {

                displayReviews(
                    reviewsContainer,
                    reviews
                );

            }

        },


        function (error) {

            console.error(
                "Firebase read error:",
                error
            );


            reviewsContainer.innerHTML = `

                <div
                    style="
                        text-align:center;
                        padding:30px;
                        color:#999;
                    "
                >

                    Unable to load reviews.

                </div>

            `;

        }
    );


    /* =====================================================
       SUBMIT REVIEW
    ===================================================== */

    form.addEventListener(
        "submit",
        async function (event) {

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
                nameInput
                    ? nameInput.value.trim()
                    : "";


            const eventType =
                eventInput
                    ? eventInput.value.trim()
                    : "";


            const message =
                messageInput
                    ? messageInput.value.trim()
                    : "";


            /* =================================================
               VALIDATION
            ================================================= */

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
                selectedRating < 1
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


            /* =================================================
               REVIEW OBJECT
            ================================================= */

            const review = {

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
                                day:
                                    "2-digit",

                                month:
                                    "short",

                                year:
                                    "numeric"
                            }
                        ),

                createdAt:
                    Date.now()

            };


            /* =================================================
               SAVE TO FIREBASE
            ================================================= */

            try {

                await push(
                    reviewsRef,
                    review
                );


                console.log(
                    "Review successfully saved:",
                    review
                );


                /* Reset form */

                form.reset();


                selectedRating =
                    0;


                const stars =
                    document.querySelectorAll(
                        "#ratingInput button"
                    );


                updateStars(
                    stars
                );


                showNotification(
                    "Thank you! Your feedback has been added."
                );


                /* Scroll to review section */

                setTimeout(
                    function () {

                        reviewsContainer.scrollIntoView(
                            {
                                behavior:
                                    "smooth",

                                block:
                                    "center"
                            }
                        );

                    },
                    500
                );

            }


            catch (error) {

                console.error(
                    "Firebase write error:",
                    error
                );


                showNotification(
                    "Unable to submit review."
                );

            }

        }
    );

}


/* =========================================================
   DISPLAY ALL REVIEWS
========================================================= */

function displayReviews(
    container,
    reviews
) {

    container.innerHTML =
        "";


    reviews.forEach(
        function (review) {

            const card =
                createReviewElement(
                    review
                );


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   DEFAULT REVIEWS
========================================================= */

function getDefaultReviews() {

    return [

        {

            name:
                "Priya & Arun",

            event:
                "Wedding",

            rating:
                5,

            message:
                "The decoration was absolutely beautiful. Every detail looked elegant and perfect. Thank you for making our wedding so memorable!",

            date:
                "12 Aug 2025",

            createdAt:
                0

        },


        {

            name:
                "Karthik",

            event:
                "Birthday",

            rating:
                5,

            message:
                "Amazing birthday decoration! The team understood exactly what we wanted and created a wonderful setup.",

            date:
                "05 Jul 2025",

            createdAt:
                0

        },


        {

            name:
                "Divya",

            event:
                "Engagement",

            rating:
                4,

            message:
                "Beautiful work and very professional team. The stage and floral decoration looked fantastic.",

            date:
                "28 Jun 2025",

            createdAt:
                0

        }

    ];

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


    const initials =
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

                    ${initials}

                </div>


                <div>

                    <div class="reviewer-name">

                        ${escapeHTML(
                            review.name
                        )}

                    </div>


                    <div class="reviewer-event">

                        ${escapeHTML(
                            review.event
                        )}

                    </div>

                </div>

            </div>


            <div class="review-stars">

                ${stars}

            </div>

        </div>


        <p class="review-message">

            "${escapeHTML(
                review.message
            )}"

        </p>


        <div
            class="review-date"
            style="
                margin-top:14px;
                color:#777;
                font-size:9px;
            "
        >

            ${escapeHTML(
                review.date
            )}

        </div>

    `;


    return card;

}


/* =========================================================
   CREATE STAR DISPLAY
========================================================= */

function createStars(
    rating
) {

    let stars =
        "";


    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        if (
            i <=
            Number(rating)
        ) {

            stars +=
                '<span style="color:#d4af37;">★</span>';

        } else {

            stars +=
                '<span style="color:#555;">☆</span>';

        }

    }


    return stars;

}


/* =========================================================
   GET INITIALS
========================================================= */

function getInitials(
    name
) {

    const words =
        String(name)
            .trim()
            .split(/\s+/)
            .filter(Boolean);


    if (
        words.length === 0
    ) {

        return "?";

    }


    if (
        words.length === 1
    ) {

        return words[0]
            .substring(
                0,
                2
            )
            .toUpperCase();

    }


    return (
        words[0][0] +
        words[
            words.length - 1
        ][0]
    ).toUpperCase();

}


/* =========================================================
   ESCAPE HTML
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
   FAQ
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


            if (!question) {
                return;
            }


            question.addEventListener(
                "click",
                function () {

                    const wasOpen =
                        item.classList.contains(
                            "active"
                        );


                    faqItems.forEach(
                        function (faq) {

                            faq.classList.remove(
                                "active"
                            );

                        }
                    );


                    if (!wasOpen) {

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
   BACK TO TOP
========================================================= */

function initBackToTop() {

    const button =
        document.getElementById(
            "backToTop"
        );


    if (!button) {
        return;
    }


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
        {
            passive: true
        }
    );


    button.addEventListener(
        "click",
        function () {

            window.scrollTo(
                {
                    top:
                        0,

                    behavior:
                        "smooth"
                }
            );

        }
    );

}


/* =========================================================
   BACKGROUND PARTICLES
========================================================= */

function initParticles() {

    const container =
        document.getElementById(
            "particles"
        );


    if (!container) {
        return;
    }


    const count =
        window.innerWidth < 600
            ? 15
            : 30;


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
            Math.random() *
            3 +
            1;


        particle.style.width =
            size +
            "px";


        particle.style.height =
            size +
            "px";


        particle.style.left =
            Math.random() *
            100 +
            "%";


        particle.style.animationDuration =
            (
                Math.random() *
                10 +
                8
            ) +
            "s";


        particle.style.animationDelay =
            (
                Math.random() *
                10
            ) +
            "s";


        container.appendChild(
            particle
        );

    }

}


/* =========================================================
   NOTIFICATION
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

            <div class="notification-icon">

                <i class="fa-solid fa-check"></i>

            </div>


            <div class="notification-message">

            </div>

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

                position:fixed;

                top:90px;

                right:25px;

                z-index:99999;

                display:flex;

                align-items:center;

                gap:12px;

                min-width:280px;

                max-width:360px;

                padding:15px 18px;

                background:
                    rgba(20,20,20,0.97);

                border:
                    1px solid
                    rgba(212,175,55,0.5);

                color:#fff;

                box-shadow:
                    0 20px 50px
                    rgba(0,0,0,0.5);

                transform:
                    translateX(120%);

                opacity:0;

                transition:
                    all 0.4s ease;

            }


            #siteNotification.show {

                transform:
                    translateX(0);

                opacity:1;

            }


            .notification-icon {

                width:32px;

                height:32px;

                border-radius:50%;

                display:flex;

                align-items:center;

                justify-content:center;

                background:#d4af37;

                color:#111;

                flex-shrink:0;

            }


            .notification-message {

                font-family:
                    Poppins,
                    sans-serif;

                font-size:10px;

                line-height:1.5;

            }


            @media(max-width:600px) {

                #siteNotification {

                    left:15px;

                    right:15px;

                    top:80px;

                    min-width:0;

                    max-width:none;

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
        window.nandhiNotificationTimer
    );


    window.nandhiNotificationTimer =
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
   IMAGE ERROR HANDLER
========================================================= */

document.addEventListener(
    "error",
    function (event) {

        if (
            event.target &&
            event.target.tagName ===
            "IMG"
        ) {

            console.error(
                "Image not found:",
                event.target.src
            );

        }

    },
    true
);


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const link =
            event.target.closest(
                'a[href^="#"]'
            );


        if (!link) {
            return;
        }


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


        if (!target) {
            return;
        }


        event.preventDefault();


        target.scrollIntoView(
            {
                behavior:
                    "smooth",

                block:
                    "start"
            }
        );

    }
);


/* =========================================================
   PAGE VISIBILITY
========================================================= */

document.addEventListener(
    "visibilitychange",
    function () {

        if (
            document.hidden
        ) {

            document.title =
                "Nandhi Decor";

        } else {

            document.title =
                "Nandhi Decor";

        }

    }
);


/* =========================================================
   FINAL CONSOLE MESSAGE
========================================================= */

console.log(
    "===================================="
);

console.log(
    "NANDHI DECOR WEBSITE"
);

console.log(
    "Firebase Review System Active"
);

console.log(
    "===================================="
);
