
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display the thank you message as a pop-up
    var thankYouMessage = document.createElement('div');
    thankYouMessage.innerText = 'Thank you for your order!';
    thankYouMessage.style.position = 'fixed';
    thankYouMessage.style.top = '10px';
    thankYouMessage.style.left = '50%';
    thankYouMessage.style.transform = 'translateX(-50%)';
    thankYouMessage.style.backgroundColor = '#4CAF50';
    thankYouMessage.style.color = 'white';
    thankYouMessage.style.padding = '10px 20px';
    thankYouMessage.style.borderRadius = '5px';
    thankYouMessage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    
    // Add the message to the body and remove it after 3 seconds
    document.body.appendChild(thankYouMessage);
    setTimeout(function() {
        document.body.removeChild(thankYouMessage);
    }, 3000);
    
    // Optionally clear the form
    document.getElementById('order-form').reset();
});
