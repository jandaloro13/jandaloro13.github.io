const elements = document.querySelectorAll(
    "h2, h3, .summary, .internal-item, .linkedin-grid, .doc-viewer, .social-metrics"
);

elements.forEach(el => {
    if (el.closest(".toc")) return;
    el.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.01,
    rootMargin: "20% 0px 20% 0px"
});

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});
