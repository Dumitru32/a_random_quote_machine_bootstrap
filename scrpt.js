const QUOTEBANK = [
    {
        author: "Napoleon Bonaparte",
        quote: "Death is nothing, but to live defeated and inglorious is to die daily"
    },
    {
        author: "Oscar Wild",
        quote: "Be yourself; everyone else is already taken."
    },
    {
        author: "Marilyn Monroe",
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    {
        author: "Frank Zappa",
        quote: "So many books, so little time."
    }
]
window.onload = init();
function init()  {
    generateQuote();
}

function generateQuote(){
    let quoteSize = QUOTEBANK.length;
    let quoteIndex = Math.floor(Math.random() * quoteSize);
    let quoteRandomData = QUOTEBANK[quoteIndex];
    let xLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
    let quoteApiFormat = encodeURIComponent(quoteRandomData.quote);
    let authorApiFormat = encodeURIComponent(" - " + quoteRandomData.author);
    
    xLink += quoteApiFormat + authorApiFormat;

    document.getElementById("tweet-quote").href = xLink;
    document.getElementById("text").innerText = quoteRandomData.quote;
    document.getElementById("author").innerText = quoteRandomData.author;

}