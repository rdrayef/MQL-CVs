function calculateAge(day, month, year) {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function calculateLanguageLevel(level) {
  let percentage;

  switch (level) {
    case "A1":
      percentage = 20;
      break;
    case "A2":
      percentage = 40;
      break;
    case "B1":
      percentage = 60;
      break;
    case "B2":
      percentage = 80;
      break;
    case "C1":
      percentage = 90;
      break;
    case "C2":
      percentage = 100;
      break;
    default:
      percentage = 0;
      break;
  }

  return percentage;
}
