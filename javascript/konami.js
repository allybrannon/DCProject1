const konamiCode = document.querySelector('.konamiCode');

if (window.addEventListener) {
  var state = 0,
    konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; //up, up, down, down, left, right, left, right, b, a.
  window.addEventListener('keydown', e => {
    if (e.keyCode == konami[state]) state++;
    else state = 0;
    if (state == 10) konamiCode.style.opacity = '1';
  });
}
