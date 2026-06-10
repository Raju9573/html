
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.fill("Kiwi"));


const cars1 = ["Saab", "Volvo", "BMW"];
console.log(cars1);


const cars2 = [];
cars2.push("Saab");
cars2.push("Volv");
cars2.push("BMW");
console.log(cars2);


const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruits3 = fruits2.at(2);
console.log(fruits3);


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2); 
console.log(children);


var cars3 = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{  
  var cars3 = ["Toyota", "Volvo", "BMW"]; 
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Toyota"
console.log(cars3[0]);


const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.shift();

console.log(fruits4);


const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.unshift("Lemon", "Pineapple");

console.log(fruits5);


const fruits6 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits6.slice(1, 3);

console.log(citrus);


const fruits7 = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi"
fruits7.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits7);


const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");

console.log(myMonths);


const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits8.valueOf();

console.log(myArray);

// Create an Array
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterator
const list = fruits9.values();

// List the Keys
let text9 = "";
for (let x of list) {
  text9 += x + "<br>";
}

console.log(text9);






