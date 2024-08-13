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

    // Add this to the existing JavaScript

    // Testimonial slider
    let currentSlide = 0;

    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

    document.getElementById('next-testimonial').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    document.getElementById('prev-testimonial').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Course filter functionality
    document.getElementById('course-category').addEventListener('change', function () {
        const category = this.value;
        const courseItems = document.querySelectorAll('.course-item');

        courseItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Contact form validation
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            document.getElementById('form-message').innerText = 'Thank you for your message! We will get back to you soon.';
            this.reset();
        } else {
            document.getElementById('form-message').innerText = 'Please fill out all required fields.';
        }
    });

    // Login form functionality
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email && password) {
            document.getElementById('login-message').innerText = 'Login successful! Welcome back.';
            this.reset();
        } else {
            document.getElementById('login-message').innerText = 'Please fill out all required fields.';
        }
    });

    // Login form functionality
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email && password) {
            document.getElementById('login-message').innerText = 'Login successful! Welcome back.';
            this.reset();
        } else {
            document.getElementById('login-message').innerText = 'Please fill out all required fields.';
        }
    });

    // Newsletter form functionality
    document.getElementById('newsletter-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('newsletter-email').value;

        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Back to Top Button
    document.getElementById('back-to-top').addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Testimonial slider functionality
    currentSlide = 0;
    slides = document.querySelectorAll('#testimonial-slider .testimonial-slide');
    totalSlides = slides.length;

    document.getElementById('next-testimonial').addEventListener('click', function () {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].style.display = 'block';
    });

    document.getElementById('prev-testimonial').addEventListener('click', function () {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides[currentSlide].style.display = 'block';
    });

    // Initialize slider
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? 'block' : 'none';
    });

    // FAQ toggle functionality
    document.querySelectorAll('#faq .faq-item h3').forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            const content = parent.querySelector('p');
            parent.classList.toggle('open');
            content.style.maxHeight = parent.classList.contains('open') ? content.scrollHeight + 'px' : '0';
        });
    });

    // Newsletter form submission
    document.getElementById('newsletter-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        alert(`Thank you for subscribing to our newsletter, ${email}!`);
    });

    // Login form submission
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        alert(`Welcome back, ${username}!`);
    });

    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        alert(`Thank you for reaching out, ${name}! We will get back to you at ${email}.`);
    });

    // Blog comment form submission
    document.querySelector('.comment-form form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('comment-name').value;
        const comment = document.getElementById('comment-text').value;
        alert(`Thank you for your comment, ${name}!`);
    });

});
