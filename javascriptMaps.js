const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

let numb = fruits.get("apples");

console.log("There are " + numb + " apples.");


const fruits1 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

let numb1 = fruits1.get("apples");

console.log("There are " + numb1 + " apples.");


const fruits3 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

fruits3.set("mangos", 100);

let numb3 = fruits3.get("mangos");

console.log("There are " + numb + " mangos.");


const fruits4 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

fruits4.set("apples", 200);

let numb4 = fruits4.get("apples");

console.log("There are " + numb4 + " apples.");


const fruits5 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits5.get("apples"));


const fruits6 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(typeof fruits6);



const fruits7 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits7 instanceof Map);


const fruits8 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let numb5 = fruits8.get("apples");

console.log("There are " + numb5 + " apples.");


const fruits9 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits9.get("apples"));




const fruits10 = new Map();

// Set Map Values
fruits10.set("apples", 500);
fruits10.set("bananas", 300);
fruits10.set("oranges", 200);

let numb6 = fruits10.get("apples");

console.log("There are " + numb + " apples.");





const fruits11 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

fruits11.set("apples", 200);

let numb7 = fruits11.get("apples");

console.log("There are " + numb7 + " apples.");




const fruits12 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits12.size);



const fruits13 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Delete an Element
fruits13.delete("apples");
console.log(fruits13.size);




const fruits14 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Clear the Map
fruits14.clear();

console.log(fruits14.size);




// Create a Map
const fruits15 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits15.has("apples"));




const fruits16 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Delete an Element
fruits16.delete("apples");

console.log(fruits16.has("apples"));



const fruits17 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text = "";
fruits17.forEach (function(value, key) {
  text += key + ' = ' + value + "<br>"
})

console.log(text);



const fruits18 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text1 = "";
for (const x of fruits18.entries()) {
  text1 += x + "<br>";
}

console.log(text1);



const fruits19 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text2 = "";
for (const x of fruits19.keys()) {
  text2 += x + "<br>";
}

console.log(text2);



const fruits20 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text3 = "";
for (const x of fruits20.values()) {
  text3 += x + "<br>";
}

console.log(text3);



const fruits21 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let total = 0;
for (const x of fruits21.values()) {
  total += x;
}

console.log(total);



const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits22 = new Map();

// Add the Objects to the Map
fruits22.set(apples, 500);
fruits22.set(bananas, 300);
fruits22.set(oranges, 200);

console.log(fruits22.get(apples));



const apples1 = {name: 'Apples'};
const bananas1 = {name: 'Bananas'};
const oranges1 = {name: 'Oranges'};

// Create a Map
const fruits23 = new Map();

// Add Elements to the Map
fruits23.set(apples1, 500);
fruits23.set(bananas1, 300);
fruits23.set(oranges1, 200);

console.log(fruits23.get("apples"));



const fruits24 = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to select low volumes 
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by ok and low
const result = Map.groupBy(fruits24, myCallback);

// Display Results
let text4 ="These fruits are Ok: <br>";
for (let x of result.get("ok")) {
  text4 += x.name + " " + x.quantity + "<br>";
}
text4+= "<br>These fruits are low: <br>";
for (let x of result.get("low")) {
  text4 += x.name + " " + x.quantity + "<br>";
}
console.log(text4);