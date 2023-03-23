let currentIndex = 0;

const firstButton = document.getElementById("first");
firstButton.addEventListener("click", goToFirstCV);

const previousButton = document.getElementById("previous");
previousButton.addEventListener("click", goToPreviousCV);

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", goToNextCV);

const lastButton = document.getElementById("last");
lastButton.addEventListener("click", goToLastCV);

const newCVButton = document.getElementById("new-cv");
newCVButton.addEventListener("click", createNewCV);

function goToFirstCV() {
  currentIndex = 0;
  loadCV(currentIndex);
}

function goToPreviousCV() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cvs.length - 1;
  }
  loadCV(currentIndex);
}

function goToNextCV() {
  currentIndex++;
  if (currentIndex >= cvs.length) {
    currentIndex = 0;
  }
  loadCV(currentIndex);
}

function goToLastCV() {
  currentIndex = cvs.length - 1;
  loadCV(currentIndex);
}
