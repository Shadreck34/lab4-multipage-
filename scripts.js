// Real-time Clock
function updateClock() {
  const clockElement = document.getElementById('realTimeClock');
  if (clockElement) {
      clockElement.textContent = new Date().toLocaleTimeString();
  }
}
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
}

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("messageInput").value.trim();
    const response = document.getElementById("response");

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill out all fields.");
    } else {
      response.innerText = `Thanks, ${name}. We'll get back to you soon!`;
      e.target.reset();
    }
  });
}

// Load Users from API
const loadUsersBtn = document.getElementById("loadUsersBtn");
if (loadUsersBtn) {
  loadUsersBtn.addEventListener("click", async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      const userList = document.getElementById("userList");
      userList.innerHTML = "";
      users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        userList.appendChild(li);
      });
    } catch (err) {
      console.error("Failed to load users:", err);
    }
  });
}

// FAQ Toggle
document.querySelectorAll(".question").forEach((q) => {
  q.addEventListener("click", () => {
    q.nextElementSibling.classList.toggle("visible");
  });
});

/// Back to Top Button
const backToTopBtn = document.getElementById('backToTopBtn');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
// Image Slider
const images = [
  'images/custom-website-design.png',
  'images/full stack.jpeg',
  'images/SEO.jpeg',
  'images/Consulting.jpeg'
];

let currentSlide = 0;

function initializeSlider() {
  const sliderContainer = document.querySelector('.slider-container');
  if (sliderContainer) {
      // Create slides
      images.forEach((img, index) => {
          const slide = document.createElement('div');
          slide.className = `slide ${index === 0 ? 'active' : ''}`;
          slide.style.backgroundImage = `url(${img})`;
          sliderContainer.appendChild(slide);
      });

      // Start rotation
      setInterval(() => {
          const slides = document.querySelectorAll('.slide');
          slides[currentSlide].classList.remove('active');
          currentSlide = (currentSlide + 1) % images.length;
          slides[currentSlide].classList.add('active');
      }, 5000);
  }
}
initializeSlider();