let currentIndex = 0;

const firstButton = document.getElementById("first");
firstButton.addEventListener("click", goToFirstCV);

const previousButton = document.getElementById("previous");
previousButton.addEventListener("click", goToPreviousCV);

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", goToNextCV);

const lastButton = document.getElementById("last");
lastButton.addEventListener("click", goToLastCV);

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

const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

function searchCV(searchTerm) {
  const matchingCVs = cvs.filter((cv) => {
    const Match =
      cv.profile.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cv.profile.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cv.technologySkills.some(
        (tech) =>
          tech.skill.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tech.details.some((detail) =>
            detail.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    return Match;
  });

  searchResults.innerHTML = "";

  matchingCVs.forEach((cv) => {
    const results = document.createElement("div");
    results.className = "results-container";

    const image = document.createElement("img");
    image.src = cv.profile.photo;
    const sp = document.createElement("span");
    sp.textContent = `${cv.profile.firstName} ${cv.profile.lastName}`;
    sp.addEventListener("click", () => {
      loadCV(cvs.indexOf(cv));

      searchInput.value = "";
      searchResults.innerHTML = "";
    });

    results.appendChild(image);
    results.appendChild(sp);
    searchResults.append(results);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value;
  searchCV(query);
});
