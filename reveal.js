document.addEventListener("DOMContentLoaded", () => {

    // Elements to animate
    const elements = document.querySelectorAll(
        "h2, h3, .summary, .internal-item, .linkedin-grid, .doc-viewer, .social-metrics"
    );

    // Set up each element
    elements.forEach(el => {

        // Never animate anything inside the table of contents
        if (el.closest(".toc")) return;

        // Check whether the element is already visible when the page loads
        const rect = el.getBoundingClientRect();

        const isVisibleOnLoad =
            rect.top < window.innerHeight &&
            rect.bottom > 0;

        if (isVisibleOnLoad) {

            // Already visible: show it immediately
            el.classList.add("visible");

        } else {

            // Below the viewport: prepare it for reveal
            el.classList.add("reveal");

        }

    });


    // Observe elements that are below the initial viewport
    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                // Reveal the element
                entry.target.classList.add("visible");

                // Stop observing it permanently
                observer.unobserve(entry.target);

            }

        });

    }, {

        // Only a tiny portion needs to enter the observation area
        threshold: 0.01,

        // Start revealing before the element actually reaches the viewport
        // and continue observing after it passes the viewport.
        rootMargin: "20% 0px 20% 0px"

    });


    // Begin observing unrevealed elements
    document.querySelectorAll(".reveal").forEach(el => {
        observer.observe(el);
    });

});
