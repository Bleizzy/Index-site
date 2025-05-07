document.addEventListener('DOMContentLoaded', function() {
    const mapToggle = document.getElementById('mapToggle');
    const closeMap = document.getElementById('closeMap');
    const miniMap = document.getElementById('miniMap');

    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .step');
        elements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.style.animationDelay = `${index * 0.1}s`;
                element.classList.add('scale-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});
