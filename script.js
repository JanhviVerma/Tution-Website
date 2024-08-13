document.addEventListener('DOMContentLoaded', () => {
    console.log('Sheetal Teaches website loaded.');

    const navLinks = document.querySelectorAll('#nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
