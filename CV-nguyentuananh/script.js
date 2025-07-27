const sections = document.querySelectorAll('.content section');
const overlay = document.querySelector('.overlay');
const toggleBtn = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

const revealSections = () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', () => {
  revealSections();
  document.querySelectorAll('.languages .progress-bar').forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width;
  });
});

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Progress bar animation
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach((bar) => {
    const value = bar.getAttribute("data-value");
    setTimeout(() => {
      bar.style.width = value + "%";
    }, 500);
  });
});