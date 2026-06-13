let age = 18;
let text = "You can Not drive!";

if (age >= 18) {
  text = "You can drive!";
}

document.getElementById("demo").innerHTML = text;


let age1= 16;
let country = "USA";
let text1= "You can Not drive!";

if (country == "USA") {
  if (age1 >= 16) {
    text1 = "You can drive!";
  }
}

document.getElementById("demo1").innerHTML = text1;

const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.getElementById("demo2").innerHTML = greeting;

const time = new Date().getHours();
let greeting1;
if (time < 10) {
  greeting1 = "Good morning";
} else if (time < 20) {
  greeting1 = "Good day";
} else {
  greeting1 = "Good evening";
}
document.getElementById("demo3").innerHTML = greeting1;



let age2 = 16;
let text2 = (age < 18) ?  "Minor" : "Adult";

document.getElementById("demo4").innerHTML = text2;

let x = 6;
let y = 3;

document.getElementById("demo5").innerHTML = 
(x < 10 && y > 1) + "<br>" +
(x < 10 && y < 1);