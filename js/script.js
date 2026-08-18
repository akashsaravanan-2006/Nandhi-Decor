/* =========================================================
   NANDHI DECOR
   COMPLETE SCRIPT.JS
   Firebase + Reviews + Gallery + Animations
   ========================================================= */



   

/* =========================================================
   FIREBASE CONNECTION
   NANDHI DECOR
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


/* =========================================================
   INITIALIZE FIREBASE
========================================================= */

let firebaseApp = null;
let database = null;
let reviewsReference = null;


try {

    firebaseApp =
        initializeApp(firebaseConfig);


    database =
        getDatabase(firebaseApp);


    /* Main reviews location */

    reviewsReference =
        ref(
            database,
            "reviews"
        );


    console.log(
        "===================================="
    );

    console.log(
        "Firebase initialized successfully"
    );

    console.log(
        "Realtime Database connected"
    );

    console.log(
        "Reviews path connected: /reviews"
    );

    console.log(
        "===================================="
    );


} catch (error) {

    console.error(
        "===================================="
    );

    console.error(
        "Firebase initialization failed"
    );

    console.error(
        error
    );

    console.error(
        "===================================="
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
   MAIN INITIALIZATION
   ========================================================= */

function initializePage() {

    pageLoader();

    headerScroll();

    mobileMenu();

    scrollProgress();

    smoothNavigation();

    revealAnimations();

    counters();

    ratingSystem();

    reviews();

    gallery();

    galleryScrollRotation();

    faq();

    backToTop();

    rippleEffect();

    magneticButtons();

    tiltCards();

    parallaxEffects();

    imageHoverEffect();

    clickParticles();

    heroEntrance();

    staggerElements();

    preventImageDragging();

    imageErrorHandlers();

    activeNavigation();

    heroMouseLight();

}


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
                        "hide"
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

function mobileMenu() {

    const button =
        document.getElementById(
            "menuButton"
        );

    const menu =
        document.querySelector(
            ".nav-menu"
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

        }
    );


    menu.querySelectorAll(
        "a"
    ).forEach(
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

                }
            );

        }
    );


    document.addEventListener(
        "click",
        event => {

            if (
                !menu.contains(
                    event.target
                ) &&
                !button.contains(
                    event.target
                )
            ) {

                button.classList.remove(
                    "active"
                );

                menu.classList.remove(
                    "open"
                );

            }

        }
    );

}


/* =========================================================
   HEADER SCROLL
   ========================================================= */

function headerScroll() {

    const header =
        document.getElementById(
            "header"
        );


    if (!header) return;


    function update() {

        if (
            window.scrollY > 40
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
        update,
        {
            passive: true
        }
    );


    update();

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


    function update() {

        const total =
            document.documentElement
                .scrollHeight -
            window.innerHeight;


        if (total <= 0) {

            progress.style.width =
                "0%";

            return;

        }


        const percentage =
            (
                window.scrollY /
                total
            ) * 100;


        progress.style.width =
            Math.min(
                100,
                percentage
            ) + "%";

    }


    window.addEventListener(
        "scroll",
        update,
        {
            passive: true
        }
    );


    update();

}


/* =========================================================
   SMOOTH NAVIGATION
   ========================================================= */

function smoothNavigation() {

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(
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
                        document.querySelector(
                            ".header"
                        );


                    const offset =
                        header
                            ? header.offsetHeight
                            : 0;


                    const position =
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        offset;


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
   REVEAL ANIMATIONS
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
                threshold: .12,
                rootMargin:
                    "0px 0px -50px 0px"
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

    const elements =
        document.querySelectorAll(
            "[data-counter]"
        );


    if (!elements.length) return;


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) return;


                        animateCounter(
                            entry.target
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: .5
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


function animateCounter(
    element
) {

    const target =
        parseFloat(
            element.dataset.counter
        );


    if (
        Number.isNaN(target)
    ) return;


    const suffix =
        element.dataset.suffix ||
        "";


    const decimal =
        target % 1 !== 0;


    const duration =
        1800;


    const start =
        performance.now();


    function update(
        time
    ) {

        const progress =
            Math.min(
                (time - start) /
                duration,
                1
            );


        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        const value =
            target *
            eased;


        element.textContent =
            (
                decimal
                    ? value.toFixed(1)
                    : Math.floor(value)
            ) +
            suffix;


        if (
            progress < 1
        ) {

            requestAnimationFrame(
                update
            );

        } else {

            element.textContent =
                (
                    decimal
                        ? target.toFixed(1)
                        : target
                ) +
                suffix;

        }

    }


    requestAnimationFrame(
        update
    );

}


/* =========================================================
   STAR RATING
   ========================================================= */

function ratingSystem() {

    const container =
        document.getElementById(
            "ratingInput"
        );


    if (!container) return;


    const stars =
        container.querySelectorAll(
            "button"
        );


    let selectedRating =
        0;


    stars.forEach(
        star => {

            star.addEventListener(
                "mouseenter",
                () => {

                    const rating =
                        Number(
                            star.dataset.rating
                        );


                    updateStars(
                        rating
                    );

                }
            );


            star.addEventListener(
                "mouseleave",
                () => {

                    updateStars(
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


                    container.dataset.rating =
                        selectedRating;


                    updateStars(
                        selectedRating
                    );

                }
            );

        }
    );


    function updateStars(
        rating
    ) {

        stars.forEach(
            star => {

                const value =
                    Number(
                        star.dataset.rating
                    );


                star.classList.toggle(
                    "active",
                    value <= rating
                );

            }
        );

    }

}


/* =========================================================
   REVIEWS - FIREBASE
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


    if (!form) {

        console.warn(
            "feedbackForm not found"
        );

        return;

    }


    if (!container) {

        console.warn(
            "reviewsContainer not found"
        );

        return;

    }


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

                container.innerHTML =
                    "";


                const data =
                    snapshot.val();


                if (!data) {

                    container.innerHTML = `
                        <div class="no-reviews">
                            <p>
                                No reviews yet.
                            </p>
                        </div>
                    `;

                    return;

                }


                const reviewList =
                    Object.entries(
                        data
                    ).reverse();


                reviewList.forEach(
                    (
                        [
                            id,
                            review
                        ]
                    ) => {

                        renderReview(
                            review,
                            container
                        );

                    }
                );

            },
            error => {

                console.error(
                    "Firebase review read error:",
                    error
                );

            }
        );

    } else {

        console.error(
            "Firebase database is not available."
        );

    }


    /* -----------------------------------------------------
       SUBMIT REVIEW
       ----------------------------------------------------- */

    form.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "feedbackName"
                )?.value.trim();


            const eventType =
                document.getElementById(
                    "feedbackEvent"
                )?.value;


            const message =
                document.getElementById(
                    "feedbackMessage"
                )?.value.trim();


            const ratingContainer =
                document.getElementById(
                    "ratingInput"
                );


            const selectedRating =
                Number(
                    ratingContainer?.dataset.rating ||
                    0
                );


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

                console.error(
                    "Firebase database is undefined."
                );

                return;

            }


            const submitButton =
                form.querySelector(
                    'button[type="submit"]'
                );


            if (submitButton) {

                submitButton.disabled =
                    true;

                submitButton.dataset.originalText =
                    submitButton.innerHTML;

                submitButton.innerHTML =
                    "Publishing...";

            }


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


                showToast(
                    "Thank you! Your review has been published."
                );


                form.reset();


                if (
                    ratingContainer
                ) {

                    ratingContainer.dataset.rating =
                        "0";


                    ratingContainer
                        .querySelectorAll(
                            "button"
                        )
                        .forEach(
                            star => {

                                star.classList.remove(
                                    "active"
                                );

                            }
                        );

                }

            } catch (error) {

                console.error(
                    "Review submission error:",
                    error
                );


                showToast(
                    "Unable to submit review. Please try again."
                );

            } finally {

                if (submitButton) {

                    submitButton.disabled =
                        false;

                    submitButton.innerHTML =
                        submitButton.dataset.originalText ||
                        "Publish Review";

                }

            }

        }
    );

}


/* =========================================================
   RENDER REVIEW
   ========================================================= */

function renderReview(
    review,
    container
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "review-card";


    const rating =
        Number(
            review.rating || 0
        );


    let stars =
        "";


    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        stars +=
            i <= rating
                ? "★"
                : "☆";

    }


    const name =
        escapeHTML(
            review.name ||
            "Guest"
        );


    const eventName =
        escapeHTML(
            review.event ||
            "Event"
        );


    const message =
        escapeHTML(
            review.message ||
            ""
        );


    const date =
        review.createdAt
            ? new Date(
                review.createdAt
            ).toLocaleDateString(
                "en-IN",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                }
            )
            : "";


    card.innerHTML = `

        <div class="review-header">

            <div class="reviewer">

                <div class="reviewer-avatar">
                    ${getInitials(name)}
                </div>

                <div>

                    <div class="reviewer-name">
                        ${name}
                    </div>

                    <div class="reviewer-event">
                        ${eventName}
                    </div>

                </div>

            </div>

            <div class="review-stars">
                ${stars}
            </div>

        </div>

        <p class="review-message">
            "${message}"
        </p>

        <div class="review-date">
            ${date}
        </div>

    `;


    container.appendChild(
        card
    );

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
   INITIALS
   ========================================================= */

function getInitials(
    name
) {

    const words =
        String(name)
            .trim()
            .split(/\s+/);


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
   GALLERY
   ========================================================= */

function gallery() {

    const grid =
        document.getElementById(
            "galleryGrid"
        );


    if (!grid) return;


    const items =
        Array.from(
            grid.querySelectorAll(
                ".gallery-item"
            )
        );


    const filters =
        document.querySelectorAll(
            ".filter-button"
        );


    let visibleItems =
        items.slice();


    /* -----------------------------------------------------
       FILTERS
       ----------------------------------------------------- */

    filters.forEach(
        filter => {

            filter.addEventListener(
                "click",
                () => {

                    filters.forEach(
                        button => {

                            button.classList.remove(
                                "active"
                            );

                        }
                    );


                    filter.classList.add(
                        "active"
                    );


                    const category =
                        (
                            filter.dataset.filter ||
                            "all"
                        ).toLowerCase();


                    visibleItems =
                        items.filter(
                            item => {

                                const itemCategory =
                                    (
                                        item.dataset.category ||
                                        ""
                                    ).toLowerCase();


                                return (
                                    category === "all" ||
                                    itemCategory ===
                                        category
                                );

                            }
                        );


                    items.forEach(
                        item => {

                            const show =
                                visibleItems.includes(
                                    item
                                );


                            if (show) {

                                item.style.display =
                                    "";

                                requestAnimationFrame(
                                    () => {

                                        item.style.opacity =
                                            "1";

                                        item.style.transform =
                                            "";

                                    }
                                );

                            } else {

                                item.style.opacity =
                                    "0";

                                setTimeout(
                                    () => {

                                        item.style.display =
                                            "none";

                                    },
                                    350
                                );

                            }

                        }
                    );

                }
            );

        }
    );


    galleryLightbox(
        items,
        () => visibleItems
    );

}


/* =========================================================
   GALLERY LIGHTBOX
   ========================================================= */

function galleryLightbox(
    items,
    getVisibleItems
) {

    const lightbox =
        document.getElementById(
            "lightbox"
        );


    const image =
        document.getElementById(
            "lightboxImage"
        );


    const caption =
        document.getElementById(
            "lightboxCaption"
        );


    const close =
        document.getElementById(
            "lightboxClose"
        );


    const next =
        document.getElementById(
            "lightboxNext"
        );


    const previous =
        document.getElementById(
            "lightboxPrev"
        );


    if (
        !lightbox ||
        !image
    ) return;


    let currentIndex =
        0;


    function open(
        item
    ) {

        const visible =
            getVisibleItems();


        currentIndex =
            visible.indexOf(
                item
            );


        if (
            currentIndex < 0
        ) {

            currentIndex =
                0;

        }


        update();


        lightbox.classList.add(
            "active"
        );


        document.body.style.overflow =
            "hidden";

    }


    function closeBox() {

        lightbox.classList.remove(
            "active"
        );


        document.body.style.overflow =
            "";

    }


    function update() {

        const visible =
            getVisibleItems();


        if (!visible.length) return;


        const item =
            visible[
                currentIndex
            ];


        if (!item) return;


        const img =
            item.querySelector(
                "img"
            );


        if (!img) return;


        image.style.opacity =
            "0";


        setTimeout(
            () => {

                image.src =
                    img.currentSrc ||
                    img.src;


                image.alt =
                    img.alt ||
                    "Nandhi Decor";


                if (caption) {

                    caption.textContent =
                        item.dataset.title ||
                        img.alt ||
                        "";

                }


                image.style.opacity =
                    "1";

            },
            100
        );

    }


    function nextImage() {

        const visible =
            getVisibleItems();


        if (
            visible.length <= 1
        ) return;


        currentIndex =
            (
                currentIndex + 1
            ) %
            visible.length;


        update();

    }


    function previousImage() {

        const visible =
            getVisibleItems();


        if (
            visible.length <= 1
        ) return;


        currentIndex =
            (
                currentIndex -
                1 +
                visible.length
            ) %
            visible.length;


        update();

    }


    items.forEach(
        item => {

            item.addEventListener(
                "click",
                () => {

                    open(item);

                }
            );

        }
    );


    if (close) {

        close.addEventListener(
            "click",
            closeBox
        );

    }


    if (next) {

        next.addEventListener(
            "click",
            nextImage
        );

    }


    if (previous) {

        previous.addEventListener(
            "click",
            previousImage
        );

    }


    lightbox.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                lightbox
            ) {

                closeBox();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                !lightbox.classList.contains(
                    "active"
                )
            ) return;


            if (
                event.key ===
                "Escape"
            ) {

                closeBox();

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
   GALLERY SCROLL ROTATION
   ========================================================= */

function galleryScrollRotation() {

    const items =
        document.querySelectorAll(
            ".gallery-item"
        );


    if (!items.length) return;


    items.forEach(
        item => {

            item.classList.add(
                "scroll-rotate"
            );

        }
    );


    let ticking =
        false;


    function update() {

        const height =
            window.innerHeight;


        items.forEach(
            (
                item,
                index
            ) => {

                const rect =
                    item.getBoundingClientRect();


                const center =
                    rect.top +
                    rect.height / 2;


                const screenCenter =
                    height / 2;


                const distance =
                    center -
                    screenCenter;


                let progress =
                    distance /
                    (
                        height *
                        .65
                    );


                progress =
                    Math.max(
                        -1,
                        Math.min(
                            1,
                            progress
                        )
                    );


                const direction =
                    index % 2 === 0
                        ? 1
                        : -1;


                /* Strong mobile + desktop rotation */

                const rotateX =
                    progress *
                    -20;


                const rotateY =
                    progress *
                    16 *
                    direction;


                const rotateZ =
                    progress *
                    5 *
                    direction;


                const moveX =
                    progress *
                    12 *
                    direction;


                const moveY =
                    progress *
                    -25;


                const scale =
                    1 -
                    Math.abs(
                        progress
                    ) *
                    .045;


                item.style.setProperty(
                    "--scroll-x",
                    `${rotateX}deg`
                );


                item.style.setProperty(
                    "--scroll-y",
                    `${rotateY}deg`
                );


                item.style.setProperty(
                    "--scroll-z",
                    `${rotateZ}deg`
                );


                item.style.setProperty(
                    "--scroll-move-x",
                    `${moveX}px`
                );


                item.style.setProperty(
                    "--scroll-move-y",
                    `${moveY}px`
                );


                item.style.setProperty(
                    "--scroll-scale",
                    scale
                );


                if (
                    Math.abs(distance) <
                    height *
                    .38
                ) {

                    item.classList.add(
                        "scroll-active"
                    );

                } else {

                    item.classList.remove(
                        "scroll-active"
                    );

                }

            }
        );


        ticking =
            false;

    }


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                requestAnimationFrame(
                    update
                );

                ticking =
                    true;

            }

        },
        {
            passive: true
        }
    );


    window.addEventListener(
        "resize",
        update
    );


    update();


    /* -----------------------------------------------------
       ENTER VIEW ANIMATION
       ----------------------------------------------------- */

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "scroll-enter"
                            );

                        }

                    }
                );

            },
            {
                threshold: .15
            }
        );


    items.forEach(
        item => {

            observer.observe(
                item
            );

        }
    );

}


/* =========================================================
   FAQ
   ========================================================= */

function faq() {

    const items =
        document.querySelectorAll(
            ".faq-item"
        );


    items.forEach(
        item => {

            const question =
                item.querySelector(
                    ".faq-question"
                );


            if (!question) return;


            question.addEventListener(
                "click",
                () => {

                    const wasOpen =
                        item.classList.contains(
                            "active"
                        );


                    items.forEach(
                        other => {

                            other.classList.remove(
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

function backToTop() {

    const button =
        document.getElementById(
            "backToTop"
        );


    if (!button) return;


    window.addEventListener(
        "scroll",
        () => {

            button.classList.toggle(
                "show",
                window.scrollY > 500
            );

        },
        {
            passive: true
        }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top:
                    0,

                behavior:
                    "smooth"

            });

        }
    );

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(
    message
) {

    const toast =
        document.getElementById(
            "toast"
        );


    if (!toast) {

        alert(message);

        return;

    }


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
   RIPPLE EFFECT
   ========================================================= */

function rippleEffect() {

    document.querySelectorAll(
        ".ripple"
    ).forEach(
        element => {

            element.addEventListener(
                "click",
                event => {

                    const rect =
                        element.getBoundingClientRect();


                    const ripple =
                        document.createElement(
                            "span"
                        );


                    ripple.className =
                        "ripple-effect";


                    const size =
                        Math.max(
                            rect.width,
                            rect.height
                        );


                    ripple.style.width =
                        size + "px";

                    ripple.style.height =
                        size + "px";


                    ripple.style.left =
                        (
                            event.clientX -
                            rect.left -
                            size / 2
                        ) + "px";


                    ripple.style.top =
                        (
                            event.clientY -
                            rect.top -
                            size / 2
                        ) + "px";


                    element.appendChild(
                        ripple
                    );


                    ripple.addEventListener(
                        "animationend",
                        () => {

                            ripple.remove();

                        }
                    );

                }
            );

        }
    );

}


/* =========================================================
   MAGNETIC BUTTONS
   ========================================================= */

function magneticButtons() {

    if (
        window.matchMedia(
            "(max-width: 800px)"
        ).matches
    ) return;


    document.querySelectorAll(
        ".btn, .nav-book"
    ).forEach(
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
   TILT CARDS
   ========================================================= */

function tiltCards() {

    if (
        window.matchMedia(
            "(max-width: 800px)"
        ).matches
    ) return;


    document.querySelectorAll(
        ".tilt-card"
    ).forEach(
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


                    const rotateX =
                        (
                            y -
                            rect.height / 2
                        ) / 18;


                    const rotateY =
                        (
                            rect.width / 2 -
                            x
                        ) / 18;


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


/* =========================================================
   PARALLAX
   ========================================================= */

function parallaxEffects() {

    const heroImage =
        document.querySelector(
            ".hero-background img"
        );


    if (!heroImage) return;


    let ticking =
        false;


    function update() {

        if (
            window.scrollY <
            window.innerHeight
        ) {

            heroImage.style.marginTop =
                (
                    window.scrollY *
                    .12
                ) + "px";

        }


        ticking =
            false;

    }


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                requestAnimationFrame(
                    update
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
   ABOUT IMAGE HOVER
   ========================================================= */

function imageHoverEffect() {

    document.querySelectorAll(
        ".about-main-image, .about-small-image"
    ).forEach(
        wrapper => {

            const image =
                wrapper.querySelector(
                    "img"
                );


            if (!image) return;


            wrapper.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        wrapper.getBoundingClientRect();


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


                    image.style.transform =
                        `
                        scale(1.08)
                        translate(
                            ${moveX}px,
                            ${moveY}px
                        )
                        `;

                }
            );


            wrapper.addEventListener(
                "mouseleave",
                () => {

                    image.style.transform =
                        "";

                }
            );

        }
    );

}


/* =========================================================
   CLICK PARTICLES
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
        x + "px";

    particle.style.top =
        y + "px";

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
        Math.cos(angle) *
        distance;


    const targetY =
        Math.sin(angle) *
        distance;


    const animation =
        particle.animate(
            [

                {
                    transform:
                        "translate(-50%,-50%) scale(1)",

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


    animation.finished
        .catch(
            () => {}
        )
        .finally(
            () => {

                particle.remove();

            }
        );

}


/* =========================================================
   HERO ENTRANCE
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
                (
                    index *
                    150
                ) + "ms";

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
        800
    );

}


/* =========================================================
   STAGGER ELEMENTS
   ========================================================= */

function staggerElements() {

    const groups = [

        ".service-card",

        ".event-card",

        ".gallery-item"

    ];


    groups.forEach(
        selector => {

            document.querySelectorAll(
                selector
            ).forEach(
                (
                    element,
                    index
                ) => {

                    element.style.transitionDelay =
                        (
                            index *
                            70
                        ) + "ms";

                }
            );

        }
    );

}


/* =========================================================
   PREVENT IMAGE DRAG
   ========================================================= */

function preventImageDragging() {

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

}


/* =========================================================
   IMAGE ERROR HANDLERS
   ========================================================= */

function imageErrorHandlers() {

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


    document.querySelectorAll(
        ".gallery-item img"
    ).forEach(
        image => {

            image.addEventListener(
                "error",
                () => {

                    console.error(
                        "Gallery image not found:",
                        image.src
                    );

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


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) return;


                        const id =
                            entry.target.id;


                        links.forEach(
                            link => {

                                link.classList.toggle(
                                    "active",
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    "#" + id
                                );

                            }
                        );

                    }
                );

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(
        section => {

            observer.observe(
                section
            );

        }
    );

}


/* =========================================================
   HERO MOUSE LIGHT
   ========================================================= */

function heroMouseLight() {

    if (
        window.matchMedia(
            "(max-width: 768px)"
        ).matches
    ) return;


    const hero =
        document.querySelector(
            ".hero"
        );


    if (!hero) return;


    const light =
        document.createElement(
            "div"
        );


    light.style.position =
        "absolute";

    light.style.width =
        "260px";

    light.style.height =
        "260px";

    light.style.borderRadius =
        "50%";

    light.style.pointerEvents =
        "none";

    light.style.zIndex =
        "2";

    light.style.transform =
        "translate(-50%,-50%)";

    light.style.background =
        "radial-gradient(circle,rgba(212,175,55,.12),transparent 70%)";

    light.style.transition =
        "left .2s ease,top .2s ease";


    hero.appendChild(
        light
    );


    hero.addEventListener(
        "mousemove",
        event => {

            const rect =
                hero.getBoundingClientRect();


            light.style.left =
                (
                    event.clientX -
                    rect.left
                ) + "px";


            light.style.top =
                (
                    event.clientY -
                    rect.top
                ) + "px";

        }
    );

}


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !==
            "Escape"
        ) return;


        const button =
            document.getElementById(
                "menuButton"
            );


        const menu =
            document.querySelector(
                ".nav-menu"
            );


        if (
            button &&
            menu
        ) {

            button.classList.remove(
                "active"
            );

            menu.classList.remove(
                "open"
            );

        }

    }
);


/* =========================================================
   FINAL MESSAGE
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
