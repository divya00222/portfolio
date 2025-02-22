// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate sending an email (replace with actual backend logic)
    setTimeout(function() {
        document.getElementById('message-sent').style.display = 'block';
        document.getElementById('contactForm').reset();
    }, 1000);
});
