// Dark Mode Toggle

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

// Contact Form Demo

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert(
        "Thank you for contacting Medicare.pk! We will get back to you shortly."
    );

    contactForm.reset();
});

// CTA Button

const ctaBtn = document.querySelector(".cta-btn");

ctaBtn.addEventListener("click", () => {
    document
        .getElementById("contact")
        .scrollIntoView({ behavior: "smooth" });
});