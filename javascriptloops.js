const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

console.log(text);


let text1 = "";

for (let i = 0; i < 5; i++) {
  text1 += "The number is " + i + "<br>";
}

console.log(text1);


let text2 = "";

let i = 0;
while (i < 10) {
  text2 += "The number is " + i + "<br>";
  i++;
}

console.log(text2);


let text3 = ""
let q = 0;

do {
  text3 += "<br>The number is " + q;
  q++;
}
while (q < 10);  

console.log(text3);


let text4 = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) 
    { 
      break; 
    }
  text4 += "The number is " + i + "<br>";
}

console.log(text4);


let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log("Today is " + day);


let text5 = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { break loop1; }
    text5 += i + "<br>";
  }
}
console.log(text5);


const cars1 = ["BMW", "Volvo", "Saab", "Ford"];
let text6 = "";

list: {
  text6 += cars1[0] + "<br>"; 
  text6 += cars1[1] + "<br>"; 
  break list;
  text6 += cars1[2] + "<br>"; 
  text6 += cars1[3] + "<br>"; 
}

console.log(text6);


let text7 = "";

for (let i = 1; i < 10; i++) {
  if (i === 3) { continue; }
  text7 += i*10 + "<br>";
}

console.log(text7);


let text8 = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop1; }
    text8 += i + "<br>";
  }
}
console.log(text8);


let text9 = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop2; }
    text9 += i + "<br>";
  }
}

console.log(text9);

