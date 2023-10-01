document.addEventListener('DOMContentLoaded', function() {
  const divs = document.querySelectorAll('.uspsDivContainerCarrusel > div');
  let currentDiv = 0;

  function showDiv(index) {
    for (let i = 0; i < divs.length; i++) {
      if (i === index) {
        divs[i].classList.add('show');
        divs[i].classList.remove('hide');
      } else {
        divs[i].classList.remove('show');
        divs[i].classList.add('hide');
      }
    }
  }

  function showNextDiv() {
    currentDiv = (currentDiv + 1) % divs.length;
    showDiv(currentDiv);
  }

  function showPrevDiv() {
    currentDiv = (currentDiv - 1 + divs.length) % divs.length;
    showDiv(currentDiv);
  }

  document.getElementById('prevButton').addEventListener('click', showPrevDiv);
  document.getElementById('nextButton').addEventListener('click', showNextDiv);
});