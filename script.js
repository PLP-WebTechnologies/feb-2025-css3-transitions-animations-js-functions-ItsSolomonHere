const box = document.getElementById('box');
const button = document.getElementById('animateBtn');

// Load saved color on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('boxColor');
  if (savedColor) {
    box.style.backgroundColor = savedColor;
  }
});

button.addEventListener('click', () => {
  // Trigger CSS animation
  box.classList.add('animate');

  // Change to a random color
  const newColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
  box.style.backgroundColor = newColor;

  // Store new color
  localStorage.setItem('boxColor', newColor);

  // Remove animation class after it ends
  box.addEventListener('animationend', () => {
    box.classList.remove('animate');
  }, { once: true });
});
