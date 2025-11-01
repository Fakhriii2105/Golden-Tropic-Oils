const burger = document.querySelector('.burger');
const megamenu = document.querySelector('.megamenu');

burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    megamenu.classList.toggle('active');
});


const faders = document.querySelectorAll('.fade-up');

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
