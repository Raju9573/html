
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


const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
let text1 = fruits10.toString();
console.log(text1);


const fruits11 = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi"
const fruits12 = fruits11.toSpliced(2, 0, "Lemon", "Kiwi");

console.log(fruits12);

const fruits13 = ["Banana", "Orange", "Apple", "Mango"];

// Sort the Array
const fruits14 = fruits13.toSorted();

// Display the New Array
console.log(fruits14) + "<br>" + fruits14;


const fruits15 = ["Banana", "Orange", "Apple", "Mango"];

// Reverse the Array
const fruits16 = fruits15.toReversed();

console.log(fruits16);

const fruits17 = ["Banana", "Orange", "Apple", "Mango"];

// Reverse the Array
const fruits18 = fruits17.toReversed();

console.log(fruits18);


const fruits19 = ["Banana", "Orange", "Apple", "Mango"];
let size1 = fruits19.length;
console.log(size1);


const fruits20 = ["Banana", "Orange", "Apple", "Mango"];
fruits20.length = 2;
console.log(fruits20);

const fruits21 = ["Banana", "Orange", "Apple", "Mango"];

let myList1 = fruits21.toString();
console.log(myList1);


const fruits22 = ["Banana", "Orange", "Apple", "Mango"];
let fruit23 = fruits22.at(2);

console.log(fruit23);


const fruits24 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits24.join(" * "));


const fruits25 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits25);
fruits25.pop();
console.log(fruits25);


const fruits26 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits26);
fruits26.push("Kiwi");
console.log(fruits26);


const fruits27 = ["Banana", "Orange", "Apple", "Mango"];

console.log("The first fruit is: " + fruits27[0]);

delete fruits27[0];

console.log("The first fruit is: " + fruits27[0]);


const fruits28 = ["Banana", "Orange", "Apple", "Mango"];

console.log("The first fruit is: " + fruits28[0]);

delete fruits28[0];

console.log("The first fruit is: " + fruits28[0]);


const fruits29 = ["Apple", "Orange", "Apple", "Mango"];
let position1 = fruits29.indexOf("Apple") + 1;

console.log("Apple is found in position " + position1);


const fruits30 = ["Apple", "Orange", "Apple", "Mango"];
let position2 = fruits30.lastIndexOf("Apple") + 1;

console.log("Apple is found in position " + position2);


const fruits31 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits31.includes("Mango"));


const numbers1 = [4, 9, 16, 25, 29];
let first1 = numbers1.find(myFunction1);

console.log("First number over 18 is " + first1);

function myFunction1(value1, index1, array1) {
  return value1 > 18;
}


const numbers2 = [4, 9, 16, 25, 29];

console.log("First number over 18 has index " + numbers2.findIndex(myFunction2));

function myFunction2(value2, index2, array2) {
  return value2 > 18;
}
 
