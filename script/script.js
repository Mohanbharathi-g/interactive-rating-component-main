// creating selecting elements

const inputEls = document.querySelectorAll('.btn-rating');
const btnSubmit = document.getElementById('btn-submit');
const btnReset = document.getElementById('btn-reset');
const messageEl = document.getElementById('message');
const mainCardEl = document.querySelector('#main');
const hiddenCardEl = document.querySelector('#final');

// global variables
let rating;

//function
function init() {
  rating = 0;
  messageEl.innerText = 0;
  mainCardEl.classList.remove('close');
  hiddenCardEl.classList.add('close');

  for (let i = 0; i < inputEls.length; i++) {
    inputEls[i].classList.remove('selected');
  }
}
//original logic
function updateButton(num) {
  for (let i = 0; i < inputEls.length; i++) {
    if (i === num) {
      inputEls[i].classList.add('selected');
    } else {
      inputEls[i].classList.remove('selected');
    }
  }
}

// function updateButton(num) {
//   for (let i = 0; i < num; i++) {
//     inputEls[i].classList.add('selected');
//   }
// }

//event listeners

for (let i = 0; i < inputEls.length; i++) {
  inputEls[i].addEventListener('click', function () {
    init();
    rating = Number(this.value);
    updateButton(rating - 1);
  });
}

btnSubmit.addEventListener('click', function () {
  if (rating === 0) {
    alert('Select a rating');
  } else {
    mainCardEl.classList.add('close');
    hiddenCardEl.classList.remove('close');
    messageEl.innerText = rating;
  }
});

btnReset.addEventListener('click', function () {
  init();
});

//initial settings
init();
