/* 
    UNKNOWN - Premium Skincare Serum
    Custom Cursor Script
*/

const cursorOuter = document.createElement('div');
const cursorInner = document.createElement('div');
cursorOuter.className = 'cursor-outer';
cursorInner.className = 'cursor-inner';
document.body.appendChild(cursorOuter);
document.body.appendChild(cursorInner);

let mouseX = 0;
let mouseY = 0;
let outerX = 0;
let outerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorInner.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
});

const animateCursor = () => {
    outerX += (mouseX - outerX) * 0.15;
    outerY += (mouseY - outerY) * 0.15;
    
    cursorOuter.style.transform = `translate(${outerX - 20}px, ${outerY - 20}px)`;
    
    requestAnimationFrame(animateCursor);
};

animateCursor();

// Hover Effects
const links = document.querySelectorAll('a, button, .ingredient-card, .comparison-slider');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorOuter.style.width = '60px';
        cursorOuter.style.height = '60px';
        cursorOuter.style.background = 'rgba(255, 255, 255, 0.1)';
        cursorOuter.style.border = '1px solid rgba(255, 255, 255, 0.5)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursorOuter.style.width = '40px';
        cursorOuter.style.height = '40px';
        cursorOuter.style.background = 'transparent';
        cursorOuter.style.border = '1px solid var(--primary)';
    });
});