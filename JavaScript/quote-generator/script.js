const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');
const loader = document.getElementById('loader');

// Get Quotes from API
let apiQuotes = [];


function hideLoader(flag) {
    if (flag) {
        loader.hidden = true;
        quoteContainer.hidden = false;
    } else {
        loader.hidden = false;
        quoteContainer.hidden = true;
    }
}


function newQuote() {
    hideLoader(0);
    //Pick a random quote from quote API
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
    // Check is author is null
    if (quote.author) {
        authorText.textContent = quote.author;
    } else {
        authorText.textContent = "Unknown";
    }
    // Check quote length to see styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set quote and hide loader
    quoteText.textContent = quote.text;
    hideLoader(1);
}

async function getQuotes() {
    hideLoader(0);
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch(error) {
        console.log("Error Fetching API");
    }
}

// To tweet
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);

// On Load
getQuotes(); 