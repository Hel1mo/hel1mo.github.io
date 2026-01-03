const cursor = document.querySelector('.cursor');
const hoverables = document.querySelectorAll('a, button');

hoverables.forEach(elem => {
  elem.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    cursor.style.backgroundColor = 'rgba(240, 95, 92, 0.9)';
  });
  elem.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursor.style.backgroundColor = 'rgba(255, 95, 92, 0.8)';
  });
});
