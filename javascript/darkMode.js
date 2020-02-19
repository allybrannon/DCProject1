const moonBtn = document.querySelector(".moonBtn");

function darkMode() {
  const bodyElement = document.body;
  const cardElement = document.querySelector(".card");
  const btnImage = document.querySelector(".darkIcon");

  cardElement.classList.toggle("darkMode");
  bodyElement.classList.toggle("darkMode");

  if (bodyElement.className == "darkMode") {
    btnImage.src = "/images/icons8-summer-50.png";
  } else if (bodyElement.className !== "darkMode") {
    btnImage.src = "/images/icons8-moon-symbol-30.png";
  }
}

moonBtn.addEventListener("click", e => {
  e.preventDefault();
  darkMode();
});
