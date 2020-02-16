function birthdate(){
  var Year= document.getElementById("n").value;
  var CC= parseInt(year.slice(0,2));
  var YY= parseInt (year.slice(2.));
  var DD= document.getElementById("date").value;
  var MM= document.getElementById("month").value;
  var myGender=document.getElementById("gender").value;

}

var dayOfTheWeek= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7


var maleNames= ["Kwasi", "Kwadwo","Kwabena", "Kwaku", "Yaw","Kofi", "Kwame"];
var femaleNames= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama" ];
var birthDays= ["sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];



if(myGender==="Male")
{
  document.getElementById("display").innerHTML= "Your akan names is"+ maleNames+" because you were born on a"+ daysOfTheWeek;
  }
else if(gender==="Female"){
    document.getElementById("display").innerHTML= "Your akan names is"+ femaleNames+" because you were born on a"+ daysOfTheWeek;
  }


// var myGender= document.getElelementByName ("gender");
