const elements = document.querySelectorAll(
    "section, h2, h3, p, img, iframe, table, .linkedin-grid, .doc-viewer, .internal-stack, .internal-item"
);

elements.forEach(el => {

    // Ignore the table of contents and anything inside it
    if (el.closest(".toc")) return;

    el.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});
