function loadCV(index = 0) {
  let cv = cvs[index];
  console.log(cv);
  let s = "";
  s += loadPersonalInfos(cv);
  if (cv.education.length > 0) {
    s += ` <div class="educations">
      <span class="title">Formations</span>`;
    s += loadEdcuationInfos(cv);
    s += `</div>`;
  }
  if (cv.languages.length > 0) {
    s += `<div class="languages">
      <span class="title">Langues</span>`;
    s += loadLanguagesInfos(cv);
    s += `</div>`;
  }
  s += `<div class="profile">
      <span class="title">Summary</span>
      <p>
       ${cv.profile.professionalSummary}
      </p>
    </div>`;
  if (cv.experiences.length > 0) {
    s += `<div class="experiences">
      <span class="title">Expériences</span>`;
    s += loadExperienceInfos(cv);
    s += `</div>`;
  }
  if (cv.technologySkills.length > 0) {
    s += `<div class="skills">
    <span class="title">Technologies</span>
      <div class="technologies">
      `;
    s += loadTechnologiesInfos(cv);

    if (cv.softSkills.length > 0) {
      s += `</div></div><div class="soft">
        <span class="title">Soft skills</span>
        <div class="softskills">
        `;
      s += loadSoftSkillsInfos(cv);
      s += `</div>`;
    }

    s += `</div></div>`;
  }

  if (cv.interests.length > 0) {
    s += `<div class="interest">
      <span class="title">Centres d'intérêt</span>
      <div class="interests">
      `;
    s += loadInterstsInfos(cv);
    s += `</div>`;
  }
  document.getElementById("cv").innerHTML = s;
}

function loadPersonalInfos(cv) {
  return `<div class="image">
    <img src="${cv.profile.photo}" alt="Profile Photo" />
  </div>
  <div class="info">
    <div class="personalinfos">
      <span>${cv.profile.firstName} ${cv.profile.lastName}</span>
      <span>Etudiant en MQL</span>
    </div>
    <div class="contactinfos">
      <span class="title">Contact info</span>
      <span>${cv.profile.phone}</span>
      <span>${cv.profile.email}</span>
      <span>${calculateAge(
        cv.profile.birthday["day"],
        cv.profile.birthday["month"],
        cv.profile.birthday["year"]
      )} ans</span>
      <span>${cv.profile.address}</span>
    </div>
  </div>`;
}

function loadEdcuationInfos(cv) {
  let s = "";
  for (let i = 0; i < cv.education.length; i++) {
    s += `<div class="education">
        <span>${cv.education[i].year}</span>
        <span>${cv.education[i].diploma}</span>
        <span>${cv.education[i].organisation}</span>
      </div>`;
  }
  return s;
}

function loadLanguagesInfos(cv) {
  let s = "";
  for (let i = 0; i < cv.languages.length; i++) {
    s += `<div class="language">
        <span>${cv.languages[i].language}</span>
        <span>${cv.languages[i].level}</span>
      </div>`;
  }
  return s;
}
function loadExperienceInfos(cv) {
  let s = "";
  for (let i = 0; i < cv.experiences.length; i++) {
    s += `<div class="experience">
    <div class="experiencedetails">`;
    for (let j = 0; j < cv.experiences[i].technologies.length; j++) {
      s += `<span>${cv.experiences[i].technologies[j]}</span>`;
    }
    s += "</div>";
    s += `<div class="experienceinfo">
          <span>${cv.experiences[i].title}</span>
          <span>${cv.experiences[i].organisation}</span>
          <span>${cv.experiences[i].duration}</span>
          <span>${cv.experiences[i].type}</span>
          <span>${cv.experiences[i].year}</span>
        </div>
      </div>`;
  }
  return s;
}

function loadTechnologiesInfos(cv) {
  let s = "";
  for (let i = 0; i < cv.technologySkills.length; i++) {
    s += `<div class='technology'>`;
    s += `<span>${cv.technologySkills[i].skill}</span>`;
    s += `<div class="technologydetails">`;
    for (let j = 0; j < cv.technologySkills[i].details.length; j++) {
      s += `<span>${cv.technologySkills[i].details[j]}</span>`;
    }
    s += "</div>";
    s += "</div>";
  }
  return s;
}

function loadSoftSkillsInfos(cv) {
  let s = "";
  for (let i = 0; i < cv.softSkills.length; i++) {
    s += `<span>${cv.softSkills[i]}</span>`;
  }
  return s;
}

function loadInterstsInfos(cv) {
  let s = "";
  for (let i = 0; i < cv.interests.length; i++) {
    s += `<span>${cv.interests[i]}</span>`;
  }
  return s;
}
