let text = "John Doe";  // String written inside quotes
console.log(text);


let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text1.length);
console.log(text1.charAt(0));
console.log(text1.toLowerCase());



let text2 = "Hello";
let text3 = "World!";
let text4 = text2.concat(" ",text3);
console.log(text4);


let text5 = "Apple, Banana, Kiwi";
let part = text5.slice(7,13);
console.log(part); 


let text6 = "Apple, Banana, Kiwi";
let part1 = text6.slice(-12,-6)
console.log(part1);


let str = "Apple, Banana, Kiwi";
console.log(str.substring(7,13));


let text7 = "Hello world!";
let result = text7.isWellFormed();

console.log(result);


let text8 = "     Hello World!     ";
let text9 = text8.trimstart();

console.log("Length text1 = " + text8.length + "<br>Length text2 = " + text9.length);


let text10 = "5";
text10 = text10.padStart(4,"0");

console.log(text10);


let text11 = "5";
text11 = text11.padEnd(4,"0");

console.log(text11);


let text12 = "Hello world!";
let result1 = text12.repeat(2);

console.log(result1);


let text13 = "a,b,c,d,e,f";
const myArray = text13.split(",");
console.log(myArray[0]);


let text = "Hello";
const myArr1 = text.split("");

text14 = "";
for (let i = 0; i < myArr1.length; i++) {
  text14 += myArr1[i] + "<br>"
}
console.log(text14);