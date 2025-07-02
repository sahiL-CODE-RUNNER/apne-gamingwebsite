// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Typed text animation
const typedTextElement = document.querySelector('.typed-text');
const words = ['Your Ultimate Gaming Hub', 'Epic Battles Await', 'Join the Action'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function type() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1500); // pause after word complete
      return;
    }
  } else {
    typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(type, isDeleting ? 100 : 150);
}
type();

// Dropdown toggle logic
document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();

    const currentDropdown = this.nextElementSibling;

    // Close all other dropdowns
    document.querySelectorAll('.dropdown-content').forEach(menu => {
      if (menu !== currentDropdown) {
        menu.classList.remove('show');
      }
    });

    // Toggle current
    currentDropdown.classList.toggle('show');
  });
});

// Close all dropdowns when clicking outside
document.addEventListener('click', function () {
  document.querySelectorAll('.dropdown-content').forEach(menu => {
    menu.classList.remove('show');
  });
});

// Prevent closing when clicking inside
document.querySelectorAll('.dropdown-content').forEach(menu => {
  menu.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});

