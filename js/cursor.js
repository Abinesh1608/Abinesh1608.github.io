const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const animateCursor = () => {
  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;
  
  // Use easing for the outline
  outlineX += (mouseX - outlineX) * 0.1;
  outlineY += (mouseY - outlineY) * 0.1;
  
  cursorOutline.style.left = `${outlineX}px`;
  cursorOutline.style.top = `${outlineY}px`;
  
  requestAnimationFrame(animateCursor);
};

animateCursor();

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseover', () => {
        cursorDot.classList.add('hover');
        cursorOutline.classList.add('hover');
    });
    el.addEventListener('mouseout', () => {
        cursorDot.classList.remove('hover');
        cursorOutline.classList.remove('hover');
    });
}); 