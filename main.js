// Interactions principales du portfolio
 document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navUl = document.querySelector('.NavBarre ul');

    const closeMenu = () => {
        if (!hamburger || !navUl) return;
        hamburger.classList.remove('active');
        navUl.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Ouvrir le menu');
    };

    if (hamburger && navUl) {
        hamburger.addEventListener('click', function() {
            const opening = !navUl.classList.contains('active');
            hamburger.classList.toggle('active', opening);
            navUl.classList.toggle('active', opening);
            hamburger.setAttribute('aria-expanded', String(opening));
            hamburger.setAttribute('aria-label', opening ? 'Fermer le menu' : 'Ouvrir le menu');
        });
        navUl.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navUl.classList.contains('active')) {
                closeMenu();
                hamburger.focus();
            }
        });
        document.addEventListener('click', function(event) {
            if (navUl.classList.contains('active') && !navUl.contains(event.target) && !hamburger.contains(event.target)) closeMenu();
        });
    }

    // Smooth scroll pour les ancres internes.
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(event) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Respecter les préférences du navigateur et éviter les erreurs si IntersectionObserver manque.
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.content, .hero-btns, .social-links, .inspiration-content, .video-section, .story-content').forEach(el => observer.observe(el));
    }

    // Âge affiché depuis la date de naissance, recalculé automatiquement chaque année.
    document.querySelectorAll('[data-age-from]').forEach(function(node) {
        const parts = node.getAttribute('data-age-from').split('-').map(Number);
        if (parts.length !== 3 || parts.some(Number.isNaN)) return;
        const today = new Date();
        let age = today.getFullYear() - parts[0];
        if (today.getMonth() + 1 < parts[1] || (today.getMonth() + 1 === parts[1] && today.getDate() < parts[2])) age--;
        node.textContent = String(age);
    });
});

// Point d’entrée conservé pour le formulaire de contact.
function submitContactForm(event) {
    event.preventDefault();
    alert('Formulaire envoyé ! (À connecter à un service backend)');
}
