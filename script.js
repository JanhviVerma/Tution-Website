document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#nav-links li a');
    const nav = document.getElementById('nav-links');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
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

    // Sticky navigation on scroll
    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    window.onscroll = () => {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };

    const newsletterForm = document.getElementById('newsletter-form');

    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const newsletterEmail = document.getElementById('newsletter-email').value.trim();

        if (newsletterEmail) {
            alert('Thank you for subscribing to our newsletter!');
        } else {
            alert('Please enter a valid email address.');
        }

        newsletterForm.reset();
    });
});
