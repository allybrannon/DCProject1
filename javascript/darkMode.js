function darkMode() {
  const bodyElement = document.body;
  const cardElement = document.querySelector('.card');
  cardElement.classList.toggle('darkMode');
  bodyElement.classList.toggle('darkMode');
}
