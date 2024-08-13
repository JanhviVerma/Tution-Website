document.addEventListener('DOMContentLoaded', () => {
    console.log('Sheetal Teaches website loaded.');

    const navLinks = document.querySelectorAll('#nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value;

        if (name && email && message) {
            formMessage.textContent = 'Thank you for your message!';
            formMessage.style.color = 'green';
        } else {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'red';
        }

        // Clear the form fields
        contactForm.reset();
    });

    const learnMoreButton = document.getElementById('learn-more');
    learnMoreButton.addEventListener('click', () => {
        window.location.href = '#about';
    });

    // Accessibility: Add keyboard navigation for the learn more button
    learnMoreButton.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            window.location.href = '#about';
        }
    });

    // Additional improvements: Sticky navigation on scroll
    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    window.onscroll = () => {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };
});
