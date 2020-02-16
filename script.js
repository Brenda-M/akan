function birthDate(){
  const YEAR= document.getElementById("year").value;
  const CC = (YEAR-1)/100+1; // parseInt(YEAR.slice(0,2));
  const DD= document.getElementById("date").value;
  const MM= document.getElementById("month").value;

  const myGender = document.getElementById("gender").value;


  const dayOfTheWeek =  Math.round(( CC/4 -2*CC-1 + 5*YEAR/4  + 26*(MM+1)/10 + DD ) % 7);

  const maleNames = ["Kwasi", "Kwadwo","Kwabena", "Kwaku", "Yaw","Kofi", "Kwame"];
  const femaleNames= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama" ];
  const birthDays = ["sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];


  const day = birthDays[dayOfTheWeek]


  let name = '';

  if(myGender === "male"){
    name = maleNames[dayOfTheWeek];
  } else {
    name = femaleNames[dayOfTheWeek];
  }
  
  document.getElementById("display").innerHTML= `Your akan names is ${name} because you were born on a ${day}`;
}
