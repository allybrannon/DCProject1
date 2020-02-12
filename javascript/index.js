let currentScore = 3;
let answer = "empty";

function getQuoteAuthor() {
  const quoteAPI = `https://quote-garden.herokuapp.com/quotes/random`;
  get(quoteAPI).then(response => {
    console.log(response);
    answer = response.quoteAuthor;
    console.log(answer);
  });
}

function generateAuthors() {
  console.log("this is to be built out after I have buttons to hook onto.");
}

//get the quote from the numbers API.

function getNumbersQuote() {
  const numberAPI = `http://numbersapi.com/${currentScore}?json`;
  get(numberAPI).then(response => {
    console.log(response.text);
  });
}

function get(url) {
  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      return error;
    });
}

getNumbersQuote();
// getQuoteAuthor();
