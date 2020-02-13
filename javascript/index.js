<<<<<<< HEAD
function firstFunction() {
  console.log('HELLO!');
=======
let currentScore = 0;
let answer = "empty";

const quote = document.querySelector(".quoteGenP");
const answer1 = document.querySelector("#author1");
const answer2 = document.querySelector("#author2");
const answer3 = document.querySelector("#author3");
const answer4 = document.querySelector("#author4");
const score = document.querySelector(".scoreboardField");
const losingQuote = document.querySelector(".wrongFact");

// button functions

answer1.addEventListener("click", e => {
  e.preventDefault();
  if (answer1.innerText.toLowerCase() === answer.toLowerCase()) {
    console.log("You are correct!");
    currentScore += 1;
    score.innerHTML = currentScore;
    reset();
  } else {
    getWrongAnswer();
  }
});

answer2.addEventListener("click", e => {
  e.preventDefault();
  if (answer2.innerText.toLowerCase() === answer.toLowerCase()) {
    console.log("You are correct!");
    currentScore += 1;
    score.innerHTML = currentScore;
    reset();
  } else {
    getWrongAnswer();
  }
});

answer3.addEventListener("click", e => {
  e.preventDefault();
  if (answer3.innerText.toLowerCase() === answer.toLowerCase()) {
    console.log("You are correct!");
    currentScore += 1;
    score.innerHTML = currentScore;
    reset();
  } else {
    getWrongAnswer();
  }
});

answer4.addEventListener("click", e => {
  e.preventDefault();
  if (answer4.innerText.toLowerCase() === answer.toLowerCase()) {
    console.log("You are correct!");
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
>>>>>>> 1730aa4a798d54efbe8191d9a658afeda6b55494
}

async function generateAuthorButtons() {
  const quoteAPI = `https://quote-garden.herokuapp.com/quotes/random`;
  let randomAuthors = [];
  for (let i = 0; i < 3; i++) {
    randomAuthors.push(
      await get(quoteAPI).then(response => {
        return response.quoteAuthor;
      })
    );
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

async function wrongAnswer() {
  losingQuote.innerHTML = await getNumbersQuote();
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
