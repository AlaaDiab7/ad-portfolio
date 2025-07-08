document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');

    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

        if (!isExpanded) {
            navList.style.maxHeight = navList.scrollHeight + "px";
            navList.classList.add('show');
            navToggle.setAttribute('aria-expanded', 'true');
        } else {
            navList.style.maxHeight = "0";
            navList.classList.remove('show');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Smooth scroll behavior + collapse menu on click
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            navList.style.maxHeight = "0";
            navList.classList.remove('show');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Reset nav if screen is resized to large view
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navList.style.maxHeight = null;
            navList.classList.remove('show');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Contact form interactivity
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
        form.reset();
    });
});
