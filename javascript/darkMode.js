const moonBtn = document.querySelector('.moonBtn');

function darkMode() {
  const bodyElement = document.body;
  const cardElement = document.querySelector('.card');
  cardElement.classList.toggle('darkMode');
  bodyElement.classList.toggle('darkMode');
}

function buttonChange() {
  const bodyElement = document.body;
  const btnImage = document.querySelector('.darkIcon');
  if (bodyElement.className == 'darkMode') {
    btnImage.src = '/images/icons8-summer-50.png';
  } else if (bodyElement.className !== 'darkMode') {
    btnImage.src = '/images/icons8-moon-symbol-30.png';
  }
}

moonBtn.addEventListener('click', function(e) {
  e.preventDefault();
  darkMode();
  buttonChange();
});
