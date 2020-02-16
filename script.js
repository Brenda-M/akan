function birthDate() {
  // Get the values entered in the inputs
  const DD = document.getElementById("date").value;
  const MM = document.getElementById("month").value;
  const YY = document.getElementById("year").value;
  const myGender = document.getElementById("gender").value;

  // Check if the values entered are numbers
  if (!parseInt(DD)) {
    return alert("The date you entered is not valid. Make sure it is a number and try again.");
  }

  if (!parseInt(MM)) {
    return alert("The month you entered is not valid. Make sure it is a number and try again.");
  }

  if (!parseInt(YY)) {
    return alert("The year you entered is not valid. Make sure it is a number and try again.");
  }

  // Check if the values are valid
  if (DD < 1 || DD > 31) {
    return alert("The date you entered is not valid.");
  }

  if (MM < 1 || MM > 12) {
    return alert("The month you entered is not valid.");
  }

  // Get the current year
  const currentYear = new Date().getFullYear();

  if (YY < 1800 || YY > currentYear) {
    return alert("The year you entered is not valid.");
  }

  // Get the century digits
  const CC = YY.toString().substring(0, 2);

  // Create a date object from the users input
  const userDate = new Date(YY, MM, DD);

  // Get the day of the week
  const dayOfTheWeek = userDate.getUTCDay();

  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  const birthDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const day = birthDays[dayOfTheWeek]

  let name = '';

  if (myGender === "male") {
    name = maleNames[dayOfTheWeek];
  } else {
    name = femaleNames[dayOfTheWeek];
  }

  document.getElementById("display").innerHTML = `Your akan name is ${name} because you were born on a ${day}`;
}
