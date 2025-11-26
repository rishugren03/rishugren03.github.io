document.addEventListener('DOMContentLoaded', () => {
    // Spotlight Effect
    const backgroundContainer = document.querySelector('.background-container');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        // Update the mask position to follow the mouse
        backgroundContainer.style.maskImage = `radial-gradient(circle 600px at ${x}px ${y}px, black 30%, transparent 100%)`;
        backgroundContainer.style.webkitMaskImage = `radial-gradient(circle 600px at ${x}px ${y}px, black 30%, transparent 100%)`;
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            navbar.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.8)';
        } else {
            navbar.style.background = 'rgba(20, 20, 20, 0.6)';
            navbar.style.border = '1px solid rgba(255, 255, 255, 0.06)';
            navbar.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animate sections on scroll
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
});
