document.addEventListener('DOMContentLoaded', () => {
    // Section fade-in observer
    const sections = document.querySelectorAll('.section');
    const sectionOptions = {
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optionally stop observing once the section has faded in
            }
        });
    }, sectionOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Navbar sticky observer
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero');
    const navbarOptions = {
        root: null,
        threshold: 0.1
    };

    const navbarObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });
    }, navbarOptions);

    navbarObserver.observe(heroSection);
    
    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Blog section fade-in observer
    const blogCards = document.querySelectorAll(".blog-card");
    const blogObserverOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const blogObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 300); // Stagger the appearance of each card by 300ms
            }
        });
    }, blogObserverOptions);

    blogCards.forEach(card => {
        blogObserver.observe(card);
    });
});
