/* =========================================================
   NANDHI DECOR - PREMIUM CINEMATIC UI
   SCRIPT.JS
========================================================= */


/* =========================================================
   FIREBASE
========================================================= */

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getDatabase,
    ref,
    push,
    onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


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



/*
    IMPORTANT:

    If your existing Firebase configuration is already working,
    KEEP YOUR OLD firebaseConfig VALUES.

    Replace only the values above if necessary.
*/


let firebaseApp;

let database;

try {

    firebaseApp =
        initializeApp(firebaseConfig);

    database =
        getDatabase(firebaseApp);

} catch (error) {

    console.error(
        "Firebase initialization error:",
        error
    );

}


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializePage();

    }
);


/* =========================================================
   INITIALIZE EVERYTHING
========================================================= */

function initializePage() {

    pageLoader();

    headerScroll();

    mobileMenu();

    scrollProgress();

    customCursor();

    revealAnimations();

    counters();

    rippleEffect();

    gallery();

    faq();

    backToTop();

    smoothNavigation();

    ratingSystem();

    reviews();

    magneticButtons();

    parallaxEffects();

}


/* =========================================================
   PAGE LOADER
========================================================= */

function pageLoader() {

    const loader =
        document.getElementById(
            "pageLoader"
        );

    if (!loader) return;


    window.addEventListener(
        "load",
        () => {

            setTimeout(
                () => {

                    loader.classList.add(
                        "hide"
                    );

                },
                700
            );

        }
    );

}


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

function headerScroll() {

    const header =
        document.getElementById(
            "header"
        );

    if (!header) return;


    function updateHeader() {

        if (window.scrollY > 60) {

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
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();

}


/* =========================================================
   MOBILE MENU
========================================================= */

function mobileMenu() {

    const button =
        document.getElementById(
            "menuButton"
        );

    const menu =
        document.getElementById(
            "navMenu"
        );

    if (!button || !menu) return;


    button.addEventListener(
        "click",
        () => {

            button.classList.toggle(
                "active"
            );

            menu.classList.toggle(
                "open"
            );

            document.body.classList.toggle(
                "lock"
            );

        }
    );


    const links =
        menu.querySelectorAll(
            ".nav-link"
        );


    links.forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    button.classList.remove(
                        "active"
                    );

                    menu.classList.remove(
                        "open"
                    );

                    document.body.classList.remove(
                        "lock"
                    );

                }
            );

        }
    );

}


/* =========================================================
   SCROLL PROGRESS
========================================================= */

function scrollProgress() {

    const progress =
        document.getElementById(
            "scrollProgress"
        );

    if (!progress) return;


    function updateProgress() {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement
                .scrollHeight -
            window.innerHeight;


        if (documentHeight <= 0) {

            progress.style.width =
                "0%";

            return;

        }


        const percentage =
            (
                scrollTop /
                documentHeight
            ) * 100;


        progress.style.width =
            `${percentage}%`;

    }


    window.addEventListener(
        "scroll",
        updateProgress,
        {
            passive: true
        }
    );


    updateProgress();

}


/* =========================================================
   CUSTOM CURSOR
========================================================= */

function customCursor() {

    const dot =
        document.querySelector(
            ".cursor-dot"
        );

    const ring =
        document.querySelector(
            ".cursor-ring"
        );


    if (!dot || !ring) return;


    let mouseX = 0;

    let mouseY = 0;

    let ringX = 0;

    let ringY = 0;


    document.addEventListener(
        "mousemove",
        event => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;


            dot.style.left =
                `${mouseX}px`;

            dot.style.top =
                `${mouseY}px`;

        }
    );


    function animateCursor() {

        ringX +=
            (
                mouseX -
                ringX
            ) * .15;

        ringY +=
            (
                mouseY -
                ringY
            ) * .15;


        ring.style.left =
            `${ringX}px`;

        ring.style.top =
            `${ringY}px`;


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    const interactive =
        document.querySelectorAll(
            "a, button, input, textarea, select"
        );


    interactive.forEach(
        element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    ring.classList.add(
                        "hover"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    ring.classList.remove(
                        "hover"
                    );

                }
            );

        }
    );

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function revealAnimations() {

    const elements =
        document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right"
        );


    if (!elements.length) return;


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: .12
            }
        );


    elements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   COUNTERS
========================================================= */

function counters() {

    const counters =
        document.querySelectorAll(
            "[data-counter]"
        );


    if (!counters.length) return;


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) return;


                        const element =
                            entry.target;


                        const target =
                            parseFloat(
                                element.dataset.counter
                            );


                        const decimal =
                            element.dataset.decimal
                                ? parseInt(
                                    element.dataset.decimal
                                )
                                : 0;


                        animateCounter(
                            element,
                            target,
                            decimal
                        );


                        observer.unobserve(
                            element
                        );

                    }
                );

            },
            {
                threshold: .7
            }
        );


    counters.forEach(
        counter => {

            observer.observe(
                counter
            );

        }
    );

}


/* =========================================================
   COUNTER ANIMATION
========================================================= */

function animateCounter(
    element,
    target,
    decimal
) {

    const duration =
        1800;

    const start =
        performance.now();


    function update(
        currentTime
    ) {

        const elapsed =
            currentTime -
            start;


        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        const eased =
            1 -
            Math.pow(
                1 - progress,
                4
            );


        const value =
            target *
            eased;


        element.textContent =
            value.toFixed(
                decimal
            );


        if (
            progress < 1
        ) {

            requestAnimationFrame(
                update
            );

        } else {

            element.textContent =
                target.toFixed(
                    decimal
                );

        }

    }


    requestAnimationFrame(
        update
    );

}


/* =========================================================
   RIPPLE CLICK EFFECT
========================================================= */

function rippleEffect() {

    const buttons =
        document.querySelectorAll(
            ".ripple"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                event => {

                    const rect =
                        button.getBoundingClientRect();


                    const ripple =
                        document.createElement(
                            "span"
                        );


                    ripple.className =
                        "ripple-wave";


                    const size =
                        Math.max(
                            rect.width,
                            rect.height
                        );


                    ripple.style.width =
                        `${size}px`;

                    ripple.style.height =
                        `${size}px`;


                    ripple.style.left =
                        `${event.clientX - rect.left - size / 2}px`;


                    ripple.style.top =
                        `${event.clientY - rect.top - size / 2}px`;


                    button.appendChild(
                        ripple
                    );


                    setTimeout(
                        () => {

                            ripple.remove();

                        },
                        700
                    );

                }
            );

        }
    );

}


/* =========================================================
   GALLERY SYSTEM
========================================================= */

function gallery() {

    const galleryItems =
        Array.from(
            document.querySelectorAll(
                ".gallery-item"
            )
        );


    const filterButtons =
        document.querySelectorAll(
            ".filter-button"
        );


    const lightbox =
        document.getElementById(
            "lightbox"
        );


    const lightboxImage =
        document.getElementById(
            "lightboxImage"
        );


    const lightboxCaption =
        document.getElementById(
            "lightboxCaption"
        );


    const closeButton =
        document.getElementById(
            "lightboxClose"
        );


    const previousButton =
        document.getElementById(
            "lightboxPrev"
        );


    const nextButton =
        document.getElementById(
            "lightboxNext"
        );


    if (!galleryItems.length) return;


    let visibleItems =
        galleryItems.slice();


    let currentIndex =
        0;


    /* -----------------------------------------------------
       FILTER
    ----------------------------------------------------- */

    filterButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    filterButtons.forEach(
                        item => {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    const filter =
                        button.dataset.filter;


                    galleryItems.forEach(
                        item => {

                            const category =
                                item.dataset.category
                                    ?.toLowerCase();


                            const itemClasses =
                                item.classList;


                            const shouldShow =
                                filter === "all" ||
                                itemClasses.contains(
                                    filter
                                ) ||
                                category === filter;


                            if (
                                shouldShow
                            ) {

                                item.classList.remove(
                                    "hidden"
                                );


                                item.style.animation =
                                    "galleryReveal .5s ease";


                            } else {

                                item.classList.add(
                                    "hidden"
                                );

                            }

                        }
                    );


                    visibleItems =
                        galleryItems.filter(
                            item =>
                                !item.classList.contains(
                                    "hidden"
                                )
                        );

                }
            );

        }
    );


    /* -----------------------------------------------------
       OPEN LIGHTBOX
    ----------------------------------------------------- */

    galleryItems.forEach(
        (item, index) => {

            item.addEventListener(
                "click",
                () => {

                    visibleItems =
                        galleryItems.filter(
                            element =>
                                !element.classList.contains(
                                    "hidden"
                                )
                        );


                    currentIndex =
                        visibleItems.indexOf(
                            item
                        );


                    if (
                        currentIndex < 0
                    ) {

                        currentIndex =
                            index;

                    }


                    openLightbox();

                }
            );

        }
    );


    function openLightbox() {

        const item =
            visibleItems[
                currentIndex
            ];


        if (!item) return;


        const image =
            item.querySelector(
                "img"
            );


        if (!image) return;


        lightboxImage.src =
            image.src;


        lightboxImage.alt =
            image.alt;


        lightboxCaption.textContent =
            item.dataset.title ||
            image.alt ||
            "Nandhi Decor";


        lightbox.classList.add(
            "open"
        );


        document.body.classList.add(
            "lock"
        );

    }


    /* -----------------------------------------------------
       CLOSE
    ----------------------------------------------------- */

    function closeLightbox() {

        lightbox.classList.remove(
            "open"
        );


        document.body.classList.remove(
            "lock"
        );


        setTimeout(
            () => {

                lightboxImage.src =
                    "";

            },
            300
        );

    }


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeLightbox
        );

    }


    /* -----------------------------------------------------
       NEXT
    ----------------------------------------------------- */

    function nextImage() {

        if (
            visibleItems.length <= 1
        ) return;


        currentIndex =
            (
                currentIndex + 1
            ) %
            visibleItems.length;


        updateLightbox();

    }


    /* -----------------------------------------------------
       PREVIOUS
    ----------------------------------------------------- */

    function previousImage() {

        if (
            visibleItems.length <= 1
        ) return;


        currentIndex =
            (
                currentIndex - 1 +
                visibleItems.length
            ) %
            visibleItems.length;


        updateLightbox();

    }


    function updateLightbox() {

        const item =
            visibleItems[
                currentIndex
            ];


        const image =
            item.querySelector(
                "img"
            );


        if (!image) return;


        lightboxImage.style.opacity =
            "0";


        setTimeout(
            () => {

                lightboxImage.src =
                    image.src;

                lightboxImage.alt =
                    image.alt;

                lightboxCaption.textContent =
                    item.dataset.title ||
                    image.alt ||
                    "Nandhi Decor";


                lightboxImage.style.opacity =
                    "1";

            },
            150
        );

    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextImage
        );

    }


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            previousImage
        );

    }


    /* -----------------------------------------------------
       CLICK BACKDROP TO CLOSE
    ----------------------------------------------------- */

    if (lightbox) {

        lightbox.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }


    /* -----------------------------------------------------
       KEYBOARD
    ----------------------------------------------------- */

    document.addEventListener(
        "keydown",
        event => {

            if (
                !lightbox.classList.contains(
                    "open"
                )
            ) return;


            if (
                event.key ===
                "Escape"
            ) {

                closeLightbox();

            }


            if (
                event.key ===
                "ArrowRight"
            ) {

                nextImage();

            }


            if (
                event.key ===
                "ArrowLeft"
            ) {

                previousImage();

            }

        }
    );


    /* -----------------------------------------------------
       SWIPE
    ----------------------------------------------------- */

    let touchStartX =
        0;


    lightbox.addEventListener(
        "touchstart",
        event => {

            touchStartX =
                event.changedTouches[
                    0
                ].screenX;

        },
        {
            passive: true
        }
    );


    lightbox.addEventListener(
        "touchend",
        event => {

            const touchEndX =
                event.changedTouches[
                    0
                ].screenX;


            const difference =
                touchEndX -
                touchStartX;


            if (
                Math.abs(
                    difference
                ) < 50
            ) return;


            if (
                difference < 0
            ) {

                nextImage();

            } else {

                previousImage();

            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   FAQ ACCORDION
========================================================= */

function faq() {

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );


    faqItems.forEach(
        item => {

            const question =
                item.querySelector(
                    ".faq-question"
                );


            if (!question) return;


            question.addEventListener(
                "click",
                () => {

                    const wasActive =
                        item.classList.contains(
                            "active"
                        );


                    faqItems.forEach(
                        faq => {

                            faq.classList.remove(
                                "active"
                            );

                        }
                    );


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
   BACK TO TOP
========================================================= */

function backToTop() {

    const button =
        document.getElementById(
            "backToTop"
        );


    if (!button) return;


    function checkScroll() {

        if (
            window.scrollY >
            600
        ) {

            button.classList.add(
                "show"
            );

        } else {

            button.classList.remove(
                "show"
            );

        }

    }


    window.addEventListener(
        "scroll",
        checkScroll,
        {
            passive: true
        }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

function smoothNavigation() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const href =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !href ||
                        href === "#"
                    ) return;


                    const target =
                        document.querySelector(
                            href
                        );


                    if (!target) return;


                    event.preventDefault();


                    const header =
                        document.getElementById(
                            "header"
                        );


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const position =
                        target.offsetTop -
                        headerHeight;


                    window.scrollTo({

                        top:
                            position,

                        behavior:
                            "smooth"

                    });

                }
            );

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function activeNavigation() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const links =
        document.querySelectorAll(
            ".nav-link"
        );


    if (
        !sections.length ||
        !links.length
    ) return;


    function updateActive() {

        const scrollPosition =
            window.scrollY + 150;


        let current =
            "";


        sections.forEach(
            section => {

                if (
                    scrollPosition >=
                    section.offsetTop
                ) {

                    current =
                        section.id;

                }

            }
        );


        links.forEach(
            link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    `#${current}`
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
        updateActive,
        {
            passive: true
        }
    );


    updateActive();

}


activeNavigation();


/* =========================================================
   STAR RATING SYSTEM
========================================================= */

let selectedRating =
    0;


function ratingSystem() {

    const ratingContainer =
        document.getElementById(
            "ratingInput"
        );


    if (!ratingContainer) return;


    const stars =
        ratingContainer.querySelectorAll(
            "button"
        );


    stars.forEach(
        star => {

            star.addEventListener(
                "mouseenter",
                () => {

                    const rating =
                        Number(
                            star.dataset.rating
                        );


                    highlightStars(
                        rating
                    );

                }
            );


            star.addEventListener(
                "mouseleave",
                () => {

                    highlightStars(
                        selectedRating
                    );

                }
            );


            star.addEventListener(
                "click",
                () => {

                    selectedRating =
                        Number(
                            star.dataset.rating
                        );


                    highlightStars(
                        selectedRating
                    );

                }
            );

        }
    );

}


function highlightStars(
    rating
) {

    const stars =
        document.querySelectorAll(
            "#ratingInput button"
        );


    stars.forEach(
        star => {

            const value =
                Number(
                    star.dataset.rating
                );


            if (
                value <= rating
            ) {

                star.classList.add(
                    "active"
                );

            } else {

                star.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =========================================================
   FIREBASE REVIEWS
========================================================= */

function reviews() {

    const form =
        document.getElementById(
            "feedbackForm"
        );


    const container =
        document.getElementById(
            "reviewsContainer"
        );


    if (!form || !container) return;


    /* -----------------------------------------------------
       SUBMIT REVIEW
    ----------------------------------------------------- */

    form.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            const name =
                document
                    .getElementById(
                        "feedbackName"
                    )
                    ?.value
                    .trim();


            const eventType =
                document
                    .getElementById(
                        "feedbackEvent"
                    )
                    ?.value
                    .trim();


            const message =
                document
                    .getElementById(
                        "feedbackMessage"
                    )
                    ?.value
                    .trim();


            if (!name) {

                showToast(
                    "Please enter your name."
                );

                return;

            }


            if (!eventType) {

                showToast(
                    "Please select your event."
                );

                return;

            }


            if (
                !selectedRating ||
                selectedRating < 1
            ) {

                showToast(
                    "Please select a rating."
                );

                return;

            }


            if (!message) {

                showToast(
                    "Please write your review."
                );

                return;

            }


            if (!database) {

                showToast(
                    "Review service is not connected."
                );

                return;

            }


            const submitButton =
                form.querySelector(
                    'button[type="submit"]'
                );


            const originalText =
                submitButton.innerHTML;


            submitButton.disabled =
                true;


            submitButton.innerHTML =
                `
                    <i class="fa-solid fa-spinner fa-spin"></i>
                    Publishing...
                `;


            try {

                await push(
                    ref(
                        database,
                        "reviews"
                    ),
                    {

                        name:

                            name,

                        event:

                            eventType,

                        rating:

                            selectedRating,

                        message:

                            message,

                        createdAt:

                            Date.now()

                    }
                );


                form.reset();


                selectedRating =
                    0;


                highlightStars(
                    0
                );


                showToast(
                    "Thank you! Your review has been submitted."
                );


            } catch (error) {

                console.error(
                    "Review submission error:",
                    error
                );


                showToast(
                    "Unable to submit review. Please try again."
                );

            } finally {

                submitButton.disabled =
                    false;


                submitButton.innerHTML =
                    originalText;

            }

        }
    );


    /* -----------------------------------------------------
       LOAD REVIEWS
    ----------------------------------------------------- */

    if (database) {

        const reviewsReference =
            ref(
                database,
                "reviews"
            );


        onValue(
            reviewsReference,
            snapshot => {

                const data =
                    snapshot.val();


                container.innerHTML =
                    "";


                if (!data) {

                    container.innerHTML =
                        `
                            <div class="review-card">
                                <div class="review-stars">
                                    ★★★★★
                                </div>

                                <h4>
                                    Be the first to review us
                                </h4>

                                <p>
                                    Your experience could be
                                    featured here.
                                </p>
                            </div>
                        `;

                    return;

                }


                const reviewsArray =
                    Object.entries(
                        data
                    )
                    .map(
                        ([id, review]) => ({

                            id,

                            ...review

                        })
                    )
                    .sort(
                        (
                            a,
                            b
                        ) =>
                            (
                                b.createdAt || 0
                            ) -
                            (
                                a.createdAt || 0
                            )
                    );


                reviewsArray
                    .slice(0, 6)
                    .forEach(
                        review => {

                            container.appendChild(
                                createReviewCard(
                                    review
                                )
                            );

                        }
                    );

            },
            error => {

                console.error(
                    "Firebase read error:",
                    error
                );

            }
        );

    }

}


/* =========================================================
   CREATE REVIEW CARD
========================================================= */

function createReviewCard(
    review
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "review-card reveal";


    const rating =
        Math.max(
            1,
            Math.min(
                5,
                Number(
                    review.rating
                ) || 5
            )
        );


    const stars =
        "★".repeat(
            rating
        ) +
        "☆".repeat(
            5 - rating
        );


    const name =
        escapeHTML(
            review.name ||
            "Guest"
        );


    const event =
        escapeHTML(
            review.event ||
            "Event"
        );


    const message =
        escapeHTML(
            review.message ||
            ""
        );


    card.innerHTML =
        `

            <div class="review-stars">

                ${stars}

            </div>


            <h4>

                ${name}

            </h4>


            <small>

                ${event}

            </small>


            <p>

                ${message}

            </p>

        `;


    return card;

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(
    value
) {

    return String(
        value
    )
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
   TOAST MESSAGE
========================================================= */

function showToast(
    message
) {

    const toast =
        document.getElementById(
            "toast"
        );


    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        showToast.timer
    );


    showToast.timer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3500
        );

}


/* =========================================================
   MAGNETIC BUTTON EFFECT
========================================================= */

function magneticButtons() {

    const elements =
        document.querySelectorAll(
            ".btn, .nav-book"
        );


    if (
        window.matchMedia(
            "(max-width: 800px)"
        ).matches
    ) return;


    elements.forEach(
        element => {

            element.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        element.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;


                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    element.style.transform =
                        `
                            translate(
                                ${x * .08}px,
                                ${y * .08}px
                            )
                        `;

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    element.style.transform =
                        "";

                }
            );

        }
    );

}


/* =========================================================
   SERVICE CARD 3D TILT
========================================================= */

function tiltCards() {

    const cards =
        document.querySelectorAll(
            ".tilt-card"
        );


    if (
        window.matchMedia(
            "(max-width: 800px)"
        ).matches
    ) return;


    cards.forEach(
        card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const centerX =
                        rect.width / 2;


                    const centerY =
                        rect.height / 2;


                    const rotateX =
                        (
                            y -
                            centerY
                        ) /
                        18;


                    const rotateY =
                        (
                            centerX -
                            x
                        ) /
                        18;


                    card.style.transform =
                        `
                            perspective(1000px)
                            rotateX(${rotateX}deg)
                            rotateY(${rotateY}deg)
                            translateY(-5px)
                        `;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        }
    );

}


tiltCards();


/* =========================================================
   PARALLAX EFFECTS
========================================================= */

function parallaxEffects() {

    const hero =
        document.querySelector(
            ".hero-background img"
        );


    if (!hero) return;


    let ticking =
        false;


    function updateParallax() {

        if (
            window.scrollY <
            window.innerHeight
        ) {

            const offset =
                window.scrollY *
                .12;


            hero.style.marginTop =
                `${offset}px`;

        }


        ticking =
            false;

    }


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                requestAnimationFrame(
                    updateParallax
                );

                ticking =
                    true;

            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   IMAGE HOVER EFFECT
========================================================= */

function imageHoverEffect() {

    const images =
        document.querySelectorAll(
            ".about-main-image, .about-small-image"
        );


    images.forEach(
        image => {

            image.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        image.getBoundingClientRect();


                    const x =
                        (
                            event.clientX -
                            rect.left
                        ) /
                        rect.width;


                    const y =
                        (
                            event.clientY -
                            rect.top
                        ) /
                        rect.height;


                    const moveX =
                        (
                            x -
                            .5
                        ) * 12;


                    const moveY =
                        (
                            y -
                            .5
                        ) * 12;


                    const img =
                        image.querySelector(
                            "img"
                        );


                    if (img) {

                        img.style.transform =
                            `
                                scale(1.08)
                                translate(
                                    ${moveX}px,
                                    ${moveY}px
                                )
                            `;

                    }

                }
            );


            image.addEventListener(
                "mouseleave",
                () => {

                    const img =
                        image.querySelector(
                            "img"
                        );


                    if (img) {

                        img.style.transform =
                            "";

                    }

                }
            );

        }
    );

}


imageHoverEffect();


/* =========================================================
   BUTTON CLICK PARTICLES
========================================================= */

function clickParticles() {

    document.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".btn, .nav-book, .service-link"
                );


            if (!button) return;


            for (
                let i = 0;
                i < 8;
                i++
            ) {

                createParticle(
                    event.clientX,
                    event.clientY
                );

            }

        }
    );

}


function createParticle(
    x,
    y
) {

    const particle =
        document.createElement(
            "span"
        );


    particle.style.position =
        "fixed";


    particle.style.left =
        `${x}px`;


    particle.style.top =
        `${y}px`;


    particle.style.width =
        "4px";


    particle.style.height =
        "4px";


    particle.style.borderRadius =
        "50%";


    particle.style.background =
        "#d4af37";


    particle.style.pointerEvents =
        "none";


    particle.style.zIndex =
        "100002";


    const angle =
        Math.random() *
        Math.PI *
        2;


    const distance =
        30 +
        Math.random() *
        50;


    const targetX =
        Math.cos(
            angle
        ) *
        distance;


    const targetY =
        Math.sin(
            angle
        ) *
        distance;


    particle.animate(
        [

            {
                transform:
                    "translate(-50%, -50%) scale(1)",

                opacity:
                    1

            },

            {
                transform:
                    `
                        translate(
                            calc(-50% + ${targetX}px),
                            calc(-50% + ${targetY}px)
                        )
                        scale(0)
                    `,

                opacity:
                    0

            }

        ],
        {

            duration:
                700,

            easing:
                "cubic-bezier(.2,.8,.2,1)"

        }
    );


    document.body.appendChild(
        particle
    );


    setTimeout(
        () => {

            particle.remove();

        },
        750
    );

}


clickParticles();


/* =========================================================
   HERO TEXT ENTRANCE
========================================================= */

function heroEntrance() {

    const elements =
        document.querySelectorAll(
            ".hero .reveal"
        );


    elements.forEach(
        (
            element,
            index
        ) => {

            element.style.transitionDelay =
                `${index * 150}ms`;

        }
    );


    setTimeout(
        () => {

            elements.forEach(
                element => {

                    element.classList.add(
                        "revealed"
                    );

                }
            );

        },
        900
    );

}


heroEntrance();


/* =========================================================
   SERVICE CARD STAGGER
========================================================= */

function staggerServices() {

    const cards =
        document.querySelectorAll(
            ".service-card"
        );


    cards.forEach(
        (
            card,
            index
        ) => {

            card.style.transitionDelay =
                `${index * 80}ms`;

        }
    );

}


staggerServices();


/* =========================================================
   EVENT CARD STAGGER
========================================================= */

function staggerEvents() {

    const cards =
        document.querySelectorAll(
            ".event-card"
        );


    cards.forEach(
        (
            card,
            index
        ) => {

            card.style.transitionDelay =
                `${index * 100}ms`;

        }
    );

}


staggerEvents();


/* =========================================================
   GALLERY CARD STAGGER
========================================================= */

function staggerGallery() {

    const cards =
        document.querySelectorAll(
            ".gallery-item"
        );


    cards.forEach(
        (
            card,
            index
        ) => {

            card.style.transitionDelay =
                `${index * 70}ms`;

        }
    );

}


staggerGallery();


/* =========================================================
   PREVENT IMAGE DRAGGING
========================================================= */

document.querySelectorAll(
    "img"
).forEach(
    image => {

        image.addEventListener(
            "dragstart",
            event => {

                event.preventDefault();

            }
        );

    }
);


/* =========================================================
   HERO IMAGE ERROR HANDLER
========================================================= */

const heroImage =
    document.getElementById(
        "heroImage"
    );


if (heroImage) {

    heroImage.addEventListener(
        "error",
        () => {

            console.error(
                "Hero image not found:",
                heroImage.src
            );

        }
    );

}


/* =========================================================
   GALLERY IMAGE ERROR HANDLER
========================================================= */

document.querySelectorAll(
    ".gallery-item img"
).forEach(
    image => {

        image.addEventListener(
            "error",
            () => {

                image.style.opacity =
                    "0.25";

                console.error(
                    "Gallery image not found:",
                    image.src
                );

            }
        );

    }
);


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%c Nandhi Decor ",
    `
        background:#d4af37;
        color:#000;
        padding:8px 15px;
        font-weight:bold;
        border-radius:5px;
    `
);


console.log(
    "Premium cinematic UI loaded successfully."
);
