let currentScore = 0;
let answer = 'empty';

const quote = document.querySelector('.quoteGenP');
const answer1 = document.querySelector('#author1');
const answer2 = document.querySelector('#author2');
const answer3 = document.querySelector('#author3');
const answer4 = document.querySelector('#author4');
const score = document.querySelector('.scoreboardField');
const losingQuote = document.querySelector('.wrongFact');
const authorQuotes = document.querySelector('.authorQuotes');

//materialize init
M.AutoInit();

//carousel
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});

// button functions
answer1.addEventListener('click', e => {
  e.preventDefault();
  cleanUp();
  if (answer1.innerText.toLowerCase() === answer.toLowerCase()) {
    console.log('You are correct!');
    currentScore += 1;
    score.innerHTML = currentScore;
    reset();
  } else {
    getWrongAnswer();
  }
});

answer2.addEventListener('click', e => {
  e.preventDefault();
  cleanUp();
  if (answer2.innerText.toLowerCase() === answer.toLowerCase()) {
    console.log('You are correct!');
    currentScore += 1;
    score.innerHTML = currentScore;
    reset();
  } else {
    getWrongAnswer();
  }
});

answer3.addEventListener('click', e => {
  e.preventDefault();
  cleanUp();
  if (answer3.innerText.toLowerCase() === answer.toLowerCase()) {
    console.log('You are correct!');
    currentScore += 1;
    score.innerHTML = currentScore;
    reset();
  } else {
    getWrongAnswer();
  }
});

answer4.addEventListener('click', e => {
  e.preventDefault();
  cleanUp();
  if (answer4.innerText.toLowerCase() === answer.toLowerCase()) {
    console.log('You are correct!');
    currentScore += 1;
    score.innerHTML = currentScore;
    reset();
  } else {
    getWrongAnswer();
  }
});

// functions
function getQuoteAuthor() {
  const quoteAPI = `https://quote-garden.herokuapp.com/quotes/random`;
  get(quoteAPI).then(response => {
    quote.innerHTML = response.quoteText;
    answer = response.quoteAuthor;
  });
}

async function generateAuthorButtons() {
  const quoteAPI = `https://quote-garden.herokuapp.com/quotes/random`;
  let randomAuthors = [];

  while (randomAuthors.length < 3) {
    check = await get(quoteAPI).then(response => {
      return response.quoteAuthor;
    });

    if (check != false) {
      randomAuthors.push(check);
    }
  }
  randomAuthors.push(answer);
  //
  answer1.innerHTML = getRandomAuthor(randomAuthors);
  answer2.innerHTML = getRandomAuthor(randomAuthors);
  answer3.innerHTML = getRandomAuthor(randomAuthors);
  answer4.innerHTML = getRandomAuthor(randomAuthors);
}

function getRandomAuthor(randomAuthors) {
  num = Math.floor(Math.random() * randomAuthors.length);
  author = randomAuthors[num];
  randomAuthors.splice(num, 1);
  return author;
}

async function getNumbersQuote() {
  const numberAPI = `http://numbersapi.com/${currentScore}?json`;
  await get(numberAPI).then(response => {
    text = response.text;
  });
  return text;
}

async function serveQuotes() {
  const authorQuotesApi = `https://quote-garden.herokuapp.com/quotes/author/${answer}`;
  await get(authorQuotesApi).then(response => {
    console.log(response);
    quotes = response.results;
    for (let i = 0; i <= 10; i++) {
      authorQuotes.append(quotes[i].quoteText);
      let newParagraph = document.createElement('p');
      authorQuotes.append(newParagraph);
    }

    //this needs to append onto the class authorQuotes, which appears at the bottom of the page.
  });
}

function askForQuotes() {
  authorQuotes.innerHTML = `Woud you like to see more quotes from ${answer}?`;
  const question = document.createElement('button');
  question.innerHTML = 'Yes';
  authorQuotes.append(question);
  //creates the listener. WIP
  question.addEventListener('click', e => {
    console.log('WORKED!');
    serveQuotes();
    cleanUp();
  });
}

async function wrongAnswer() {
  losingQuote.innerHTML = await getNumbersQuote();
  reset();
  askForQuotes();
}

function cleanUp() {
  authorQuotes.innerHTML = '';
  //   authorQuotes.remove(question);
}

function getWrongAnswer() {
  wrongAnswer();
}

async function startUP() {
  await getQuoteAuthor();
  await generateAuthorButtons();
  await console.log(answer);
}

function reset() {
  startUP();
}

startUP();
