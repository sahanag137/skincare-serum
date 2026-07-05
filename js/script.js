/* 
    UNKNOWN - Premium Skincare Serum
    Main Script
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Loader
    const loader = document.querySelector('.loader');
    const progress = document.querySelector('.loader-progress');
    
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
                // Trigger Hero Animations
                animateHero();
            }, 500);
        } else {
            width += Math.random() * 10;
            if (width > 100) width = 100;
            progress.style.width = width + '%';
        }
    }, 100);

    // 2. Hero Animations
    function animateHero() {
        const h1 = document.querySelector('.hero h1');
        const p = document.querySelector('.hero p');
        const btns = document.querySelector('.hero-btns');

        h1.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
        p.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s';
        btns.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s';

        h1.style.opacity = '1';
        h1.style.transform = 'translateY(0)';
        p.style.opacity = '1';
        p.style.transform = 'translateY(0)';
        btns.style.opacity = '1';
        btns.style.transform = 'translateY(0)';
    }

    // 6. Before/After Slider
    const slider = document.querySelector('.comparison-slider');
    const beforeImg = document.querySelector('.img-before');
    const container = document.querySelector('.comparison-container');

    if (slider) {
        let isDragging = false;

        const move = (e) => {
            if (!isDragging) return;
            const rect = container.getBoundingClientRect();
            let x = (e.pageX || e.touches[0].pageX) - rect.left;
            if (x < 0) x = 0;
            if (x > rect.width) x = rect.width;
            
            const percent = (x / rect.width) * 100;
            slider.style.left = percent + '%';
            beforeImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
        };

        slider.addEventListener('mousedown', () => isDragging = true);
        window.addEventListener('mouseup', () => isDragging = false);
        window.addEventListener('mousemove', move);
        
        slider.addEventListener('touchstart', () => isDragging = true);
        window.addEventListener('touchend', () => isDragging = false);
        window.addEventListener('touchmove', move);
    }

    // 7. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
            const icon = item.querySelector('span');
            icon.innerText = item.classList.contains('active') ? '-' : '+';
        });
    });
});