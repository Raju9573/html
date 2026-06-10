const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits5.fill("Kiwi"));


const cars1 = ["Saab", "Volvo", "BMW"];
console.log(cars1);


const cars2 = [];
cars2.push("Saab");
cars2.push("Volv");
cars2.push("BMW");
console.log(cars2);


const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let fruit1 = fruits1.at(2);
console.log(fruit1);


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2); 
console.log(children);


const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let text2 = fruits2.constructor;

console.log(text2);


const ages1 = [32, 33, 16, 40];

console.log(ages1.filter(checkAdult));

function checkAdult(age1) {
  return age1 >= 18;
}


const fruits3 = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits3.copyWithin(2,0));


const fruits4 = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterator
const list4 = fruits4.entries();

// List the Entries
let text3 = list4.next().value + " " + list4.next().value;

console.log(text3);


const ages2 = [32, 33, 16, 40];

// Function to Run for every Element
function checkAge2(age2) {
  return age2 > 18;
}

console.log("Is every element over 18? " + ages.every(checkAge2));


const ages3 = [3, 10, 18, 20];

console.log(ages3.find(checkAge3));

function checkAge3(age3) {
  return age3 > 18;
}


const ages4 = [3, 10, 18, 20];

console.log(ages4.findIndex(checkAge4));

function checkAge4(age4) {
  return age4 > 18;
}


const ages5 = [3, 10, 18, 20];

console.log(ages5.findLast(checkAge5));

function checkAge5(age5) {
  return age5 > 18;
}


const ages6 = [3, 10, 18, 20];

console.log(ages6.findLastIndex(checkAge6));

function checkAge6(age6) {
  return age6 > 18;
}


const myArr1 = [1, 2, [3, [4, 5, 6], 7], 8];

const newArr1 = myArr1.flat(1);

let text3 = JSON.stringify(newArr1);

console.log(text3);


const myArr2 = [1, 2, 3, 4, 5, 6];
const newArr2 = myArr2.flatMap(x => [x, x * 10]);
console.log(newArr2);



