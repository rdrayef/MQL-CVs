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
  if (matchingCVs.length > 0) {
    if (isDisplayOne) {
      searchResults.innerHTML = "";

      matchingCVs.forEach((cv) => {
        const results = document.createElement("div");
        results.className = "results-container";

        const image = document.createElement("img");
        image.src = cv.profile.photo;
        const sp = document.createElement("span");
        sp.textContent = `${cv.profile.firstName} ${cv.profile.lastName}`;
        sp.addEventListener("click", () => {
          showCv(cvs.indexOf(cv));
          searchInput.value = "";
          searchResults.innerHTML = "";
        });

        results.appendChild(image);
        results.appendChild(sp);
        searchResults.append(results);
      });
    } else {
      let s = "<div class='cv-grid'>";
      matchingCVs.forEach((cv) => {
        let i = cvs.indexOf(cv);
        s += `<div class='cv-tile' onclick='showCv(${i})'>
                  <div class='cv-tile-img'>
                    <img src='${cv.profile.photo}' alt='${cv.profile.firstName} ${cv.profile.lastName}'>
                  </div>
                  <div class='cv-tile-info'>
                    <span>${cv.profile.firstName} ${cv.profile.lastName}</span>
                    <span>${cv.profile.phone}</span>
                    <p><span>${cv.profile.email}</span></p>
                  </div>
                </div>`;
      });
      s += "</div>";
      document.getElementById("cvs").innerHTML = s;
    }
  } else {
    let error = "<span id='error'>Aucune Correspandance !</span>";

    if (isDisplayOne) {
      searchResults.innerHTML = error;
    } else {
      document.getElementById("cvs").innerHTML = error;
    }
  }
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value;
  searchCV(query);
});

const displaySwitchButton = document.getElementById("switch-display");
displaySwitchButton.addEventListener("click", switchDisplay);
