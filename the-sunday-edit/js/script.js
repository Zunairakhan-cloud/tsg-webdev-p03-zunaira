// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });
}

// Blog category filters
const filterButtons = document.querySelectorAll(".filter-btn");
const journalCards = document.querySelectorAll(".journal-card");
const emptyState = document.querySelector(".empty-state");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.filter;
    let visibleCount = 0;
    journalCards.forEach((card) => {
      const show = category === "all" || card.dataset.category === category;
      card.hidden = !show;
      if (show) visibleCount++;
    });
    if (emptyState) emptyState.hidden = visibleCount !== 0;
  });
});

// Demo newsletter interaction: validates input but does not store/send addresses.
const newsletterForm = document.querySelector("#newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.querySelector("#newsletter-email");
    const message = document.querySelector("#newsletter-message");
    if (!email.checkValidity()) {
      email.reportValidity();
      return;
    }
    message.textContent = "Thanks for your interest! Connect an email service to collect subscriptions.";
    message.classList.add("success");
    newsletterForm.reset();
  });
}

// Contact form front-end validation. A backend/form service is required to receive messages.
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.querySelector("#contact-message");
    if (!contactForm.checkValidity()) {
      message.textContent = "Please complete your name, a valid email address and your message.";
      message.className = "form-message error";
      contactForm.reportValidity();
      return;
    }
    message.textContent = "Your form looks good! This demo does not send messages yet. Connect Formspree or another form service before publishing.";
    message.className = "form-message success";
    contactForm.reset();
  });
}
