
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
let size1 = fruits17.length;
console.log(size1);


const fruits18 = ["Banana", "Orange", "Apple", "Mango"];
fruits18.length = 2;
console.log(fruits18);

const fruits19 = ["Banana", "Orange", "Apple", "Mango"];

let myList1 = fruits19.toString();
console.log(myList1);


const fruits20 = ["Banana", "Orange", "Apple", "Mango"];
let fruit21 = fruits20.at(2);

console.log(fruit21);


const fruits22 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits22.join(" * "));


const fruits23 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits23);
fruits23.pop();
console.log(fruits23);


const fruits24 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits24);
fruits24.push("Kiwi");
console.log(fruits24);


const fruits25 = ["Banana", "Orange", "Apple", "Mango"];

console.log("The first fruit is: " + fruits25[0]);

delete fruits25[0];

console.log("The first fruit is: " + fruits25[0]);


const fruits26 = ["Banana", "Orange", "Apple", "Mango"];

console.log("The first fruit is: " + fruits26[0]);

delete fruits26[0];

console.log("The first fruit is: " + fruits26[0]);


const fruits27 = ["Apple", "Orange", "Apple", "Mango"];
let position1 = fruits27.indexOf("Apple") + 1;

console.log("Apple is found in position " + position1);


const fruits28 = ["Apple", "Orange", "Apple", "Mango"];
let position2 = fruits28.lastIndexOf("Apple") + 1;

console.log("Apple is found in position " + position2);


const fruits29 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits29.includes("Mango"));


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
 

const temp1 = [27, 28, 30, 40, 42, 35, 30];
let high = temp1.findLast(x => x > 40);

console.log("The last temperature over 40 was " + high);


const temp2 = [27, 28, 30, 40, 42, 35, 30];
let pos = temp2.findLastIndex(x => x > 40);

console.log("The last temperature over 40 was in position " + pos);


const fruits30 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits30);

// First sort the array
fruits30.sort();

// Then reverse it:
fruits30.reverse();

console.log(fruits30);


const months2 = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months2.toSorted();

console.log(sorted);


const months3 = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months3.toReversed();

console.log(reversed);


const arr3=[10,20,30,40,50];
let sum=0;
for(let i=0;i<arr3.length;i++){
  sum=sum+arr3[i];
}
console.log(sum);


const arr4=[10,20,50,70,30];
let arr5=arr4[0];
for(i=0;i<arr4.length;i++){
         if (arr4[i]>arr5){   
          arr5=arr4[i];
         }     
}
console.log(arr5);


const arr6 = ['a', 'b', 'e', 'f', 'i', 'o', 'u', 'x'];

const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < arr6.length; i++) {
    if (vowels.includes(arr6[i].toLowerCase())) {
        console.log(arr6[i]);
    }
}


let arr7 = [10, 15, 22, 7, 8];

for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] % 2 === 0) {
        console.log(arr7[i] + " is Even");
    } else {
        console.log(arr7[i] + " is Odd");
    }
}


let arr8 = [10, 5, 20, 8, 15];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr8) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log("Second Largest Element:", secondLargest);
