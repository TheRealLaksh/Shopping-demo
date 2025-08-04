// Contact form logic
function setupContactForm() {
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        alert(`Thank you ${name}! Your message has been sent. We'll get back to you soon at ${email}.`);
        document.getElementById('contactForm').reset();
    });
}
