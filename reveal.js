document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        "h2, h3, .summary, .internal-item, .linkedin-grid, .doc-viewer, .social-metrics"
    );

    // Add reveal class to everything we want to animate
    elements.forEach(function (el) {

        // Ignore table of contents
        if (el.closest(".toc")) {
            return;
        }

        el.classList.add("reveal");

    });

    // Create observer
    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    // Show element
                    entry.target.classList.add("visible");

                    // Never hide it again
                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.01,

            // Start revealing 25% before the element reaches
            // the visible viewport
            rootMargin: "25% 0px 25% 0px"
        }
    );

    // Observe every reveal element
    document.querySelectorAll(".reveal").forEach(function (el) {
        observer.observe(el);
    });

});
