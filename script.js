document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        alert("Thank you for reaching out!");
        contactForm.reset();
    });
});
