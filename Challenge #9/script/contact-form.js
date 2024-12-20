document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Show a thank you message
        const thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = 'Thank you for your message!';
        form.parentNode.replaceChild(thankYouMessage, form);
    });
});
