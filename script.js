// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger animation delay based on sibling index
                    const siblings = entry.target.parentElement.children;
                    const idx = Array.from(siblings).indexOf(entry.target);
                    entry.target.style.animationDelay = `${idx * 0.1}s`;
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll(
        '.project-featured, .project-card, .skill-group, .contact-card'
    ).forEach(el => observer.observe(el));

    // Smooth nav background on scroll
    const nav = document.querySelector('.nav');
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                nav.style.borderBottomColor =
                    window.scrollY > 50 ? 'var(--border-hover)' : 'var(--border)';
                ticking = false;
            });
            ticking = true;
        }
    });
});
