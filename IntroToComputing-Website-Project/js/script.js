// Random Quotes
const quotes = [
    "The journey of a thousand miles begins with a single step. - Lao Tzu",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
];

function displayRandomQuote() {
    const quoteElement = document.getElementById('random-quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Display quote on page load
document.addEventListener('DOMContentLoaded', displayRandomQuote);
