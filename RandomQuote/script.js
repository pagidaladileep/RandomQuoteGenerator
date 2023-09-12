// Select the elements
const quoteElement = document.querySelector('.quote p');
const newQuoteButton = document.getElementById('new-quote-btn');

// Define the URL of the quote API endpoint
const quoteApiUrl = 'https://type.fit/api/quotes'; // Replace with your API endpoint URL

// Function to fetch a random quote and update the HTML
function fetchRandomQuote() {
    quoteElement.textContent = 'Loading...';

    // Make a GET request to the quote API
    fetch(quoteApiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then((quoteData) => {
            // Get a random quote object from the array
            const randomIndex = Math.floor(Math.random() * quoteData.length);
            const randomQuote = quoteData[randomIndex];

            // Extract the text and author from the quote object
            const quoteText = randomQuote.text;
            const quoteAuthor = randomQuote.author || 'Unknown';

            // Create the formatted quote string
            const formattedQuote = `"${quoteText}" - ${quoteAuthor}`;

            // Update the HTML with the random quote
            quoteElement.textContent = formattedQuote;
        })
        .catch((error) => {
            console.error('Error fetching random quote:', error);
            // Display an error message in case of an error
            quoteElement.textContent = 'Failed to fetch a quote';
        });
}

// Add an event listener to the button to fetch a new random quote when clicked
newQuoteButton.addEventListener('click', fetchRandomQuote);

// Fetch and display a random quote when the page loads
fetchRandomQuote();
