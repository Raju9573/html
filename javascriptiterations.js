let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

console.log(text);

let text1 = "";

let i = 0;
while (i < 10) {
  text1 += "The number is " + i + "<br>";
  i++;
}

console.log(text1);


let text2 = ""
let i1 = 0;

do {
  text2 += "<br>The number is " + i1;
  i1++;
}
while (i1 < 10);  

console.log(text2);


const person = {fname:"John", lname:"Doe", age:25}; 

let txt3 = "";
for (let x in person) {
  txt3 += person[x] + " ";
}

console.log(txt3);


const name = "W3Schools";

// Iterate over the string elements
let text4 = ""
for (const x of name) {
  text4 += x + "<br>";
}

console.log(text4);


const letters = ["a","b","c"];

// Iterate over the array elements
let text5 = "";
for (const x of letters) {
  text5 += x + "<br>";
}
 console.log(text5);


 const numbers = [2,4,6,8];

// Iterate over the array elements
let text6 = "";
for (const x of numbers) {
  text6 += x + "<br>";
}

console.log(text6);


const letters1 = new Set(["a","b","c"]);

// Iterate over the set elementss
let text7 = "";
for (const x of letters1) {
  text7 += x + "<br>";
}

console.log(text7);


const letters2 = new Set(["a","b","c"]);

// Iterate over the set elementss
let text8 = "";
for (const x of letters2) {
  text8 += x + "<br>";
}

text8;
console.log(text8);


// Create a Map
const fruits1 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Iterate over the map elements
let text9 = "";
for (const x of fruits1) {
  text9 += x + "<br>";
}

console.log(text9);


const myIterator = Iterator.from([1, 2, 3]);

// Iterate over the elements
let text10 = ""
for (const x of myIterator) {
  text10 += x + "<br>";
}

console.log(text10);


const myIterator1 = Iterator.from([1, 2, 3, 4, 5, 6]);

// Remove the first five
const firstFive = myIterator1.drop(5);

// Iterate over all elements
let text11 = "";
for (const x of firstFive) {
  text11 += x + "<br>";
}

console.log(text11);


const myIterator2 = Iterator.from("123456789");

// Is every Element greater than 7?
let result = myIterator2.every(x => x > 7);

console.log(result);


const myIterator3 = Iterator.from([32, 33, 16, 40]);

// Filter the iterator
const filteredIterator = myIterator3.filter(x => x > 18);

// Iterate over the filtered elements
let text12 = "";
for (const x of filteredIterator) {
  text12 += x + "<br>";
}

console.log(text12);


const myIterator4 = Iterator.from([3, 10, 18, 30, 20]);

// Find first greater than 18
let result1 = myIterator4.find(x => x > 18);

console.log(result1);


const myIterator5 = Iterator.from([1, 2, 3, 4, 5, 6]);

// Map the Iterator
const mappedIterator5 = myIterator5.flatMap(x => [x, x * 10]);

// Iterate over the elements
let text13 = "";
for (const x of mappedIterator5) {
  text13 += x + "<br>";
}

console.log(text13);


const myIterator6 = Iterator.from("123456789");

// Iterate over all elements
let text14 = "";
myIterator6.forEach (x => text += "<br>" + x);

console.log(text14);


const myIterator7 = Iterator.from("123456789");

// Map the Iterator
const mappedIterator6 = myIterator7.map(x => x * 2);

// Iterate over all elements
let text15 = "";
for (const x of mappedIterator6) {
  text15 += x + "<br>";
}

console.log(text15);



function myFunc(total, num) {
  return total + num;
}

// Create an Iterator
const myIterator8 = Iterator.from([175, 50, 25]);

// Reduce the Iterator
let result16 = myIterator8.reduce(myFunc);

console.log("The sum of all items is: " + result16);



const myIterator9 = Iterator.from("123456789");

// Is some Elements  greater than 7?
let result17 = myIterator9.some(x => x > 7);
console.log(result17);



const myIterator10 = Iterator.from([1, 2, 3, 4, 5, 6]);

// Take the first five elements
const firstFive1 = myIterator10.take(5);

// Iterate over all elements
let text16 = "";
for (const x of firstFive1) {
  text16 += x + "<br>";
}

console.log(text16);



function* myStream() {
// return {value:1, done:false}
yield 1;

// return {value:2, done:false}
yield 2;

// return {value:3, done:true}
return 3;
}

// Create a Generator
let myGenerator = myStream();
let text17 = "";

// Loop the Generator
for (let value of myGenerator) {
  text17 += value + "<br>";
}

console.log(text17);



function* myStream() {
// return {value:1, done:false}
yield 1;

// return {value:2, done:false}
yield 2;

// return {value:3, done:false}
yield 3;
}

// Create a Generator
let myGenerator1 = myStream();
let text18 = "";

// Loop the Generator
for (let value of myGenerator1) {
  text18 += value + "<br>";
}

console.log(text18);