// main.js - Script principal pour le portfolio

// Animation du texte d'accueil
document.addEventListener('DOMContentLoaded', function() {
    const textChangerVisible = document.getElementById('textChangerVisible');
    const textChangerInvisible = document.getElementById('textChangerInvisible');

    if (textChangerVisible && textChangerInvisible) {
        setInterval(() => {
            textChangerVisible.classList.toggle('hidden');
            textChangerInvisible.classList.toggle('hidden');
        }, 3000);
    }

    // Smooth scroll pour les liens de navigation
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navUl = document.querySelector('.NavBarre ul');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navUl.classList.toggle('active');
        });

        // Fermer le menu quand on clique sur un lien
        const navLinks = navUl.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navUl.classList.remove('active');
            });
        });
    }

    // Animation au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    const animateElements = document.querySelectorAll('.content, .hero-btns, .social-links, .inspiration-content, .video-section, .story-content');
    animateElements.forEach(el => observer.observe(el));
});

// Fonction pour le formulaire de contact (à implémenter avec un service comme Netlify)
function submitContactForm(event) {
    event.preventDefault();
    // Logique d'envoi du formulaire
    alert('Formulaire envoyé ! (À connecter à un service backend)');
}