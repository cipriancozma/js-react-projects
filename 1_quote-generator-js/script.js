const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const newQuoteBtn = document.querySelector("#button");
const loader = document.querySelector("#loader");

let apiQuotes = [];

const progressLoading = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

const completeLoading = () => {
  quoteContainer.hidden = false;
  loader.hidden = true;
};

const getNewQuote = () => {
  progressLoading();

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  authorText.textContent = quote.author || "Unknown";
  if (quoteText.textContent.length > 40) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  completeLoading();
};

async function getQuotes() {
  progressLoading();

  const api = "https://cipriancozma.github.io/quotes-api/quotes.json";

  try {
    const response = await fetch(api);
    apiQuotes = await response.json();
    getNewQuote();
  } catch (error) {
    console.log(error);
  }
  completeLoading();
}

getQuotes();

newQuoteBtn.addEventListener("click", getNewQuote);
