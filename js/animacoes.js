const elementos = document.querySelectorAll(".revelar");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visivel");
        }
    });
}, {
    threshold: 0.12
});

elementos.forEach(el => observer.observe(el));
