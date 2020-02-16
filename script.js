function birthDate(){
  const YEAR= document.getElementById("year").value;
  const CC = parseInt(YEAR.slice(0,2));
  const YY= parseInt (YEAR.slice(2.));
  const DD= document.getElementById("date").value;
  const MM= document.getElementById("month").value;
  const myGender = document.getElementById("gender").value;

var dayOfTheWeek= (((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd )% 7;
var maleNames= ["Kwasi", "Kwadwo","Kwabena", "Kwaku", "Yaw","Kofi", "Kwame"];
var femaleNames= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama" ];
var birthDays= ["sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];



if(myGender==="Male")
{
  document.getElementById("display").innerHTML= "Your akan names is"+ maleNames+" because you were born on a"+ daysOfTheWeek;
  }
else if (gender==="Female"){
    document.getElementById("display").innerHTML= "Your akan names is"+ femaleNames+" because you were born on a"+ daysOfTheWeek;
  }

  else{
          alert("Invalid Entry");
          document.getElementById("display").innerHTML="";
        }
