function birthDate(){
  var year= document.getElementById("year").value;
  var cc = parseInt(year.slice(0,2));
  var yy= parseInt (year.slice(2.));
  var dd= document.getElementById("date").value;
  var mm= document.getElementById("month").value;

}

var dayOfTheWeek= (((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd )% 7;
var maleNames= ["Kwasi", "Kwadwo","Kwabena", "Kwaku", "Yaw","Kofi", "Kwame"];
var femaleNames= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama" ];
var birthDays= ["sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var myGender =document.getElementByName("gender").value;


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
