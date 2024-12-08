document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert('Thank you for reaching out! Your message has been sent.');
        this.reset(); // Reset the form
    } else {
        alert('Please fill out all the required fields.');
    }
});