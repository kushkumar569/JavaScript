const score = 400    // assign value
console.log(score);   // print only value

const balance = new Number(100)  // assign value and data type
console.log(balance);            // print value and datatype and have some functions with it. given below

// console.log(balance.toString().length);     // print length of balance
// console.log(balance.toFixed(2));            // print decimal after till 2nd place

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));       // round off till value

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));    // convert in indian standard like 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));          //op-4
// console.log(Math.round(4.6));       //op-5
// console.log(Math.ceil(4.2));        //op-5
// console.log(Math.floor(4.9));       //op-4
// console.log(Math.min(4, 3, 6, 8));     //op-3
// console.log(Math.max(4, 3, 6, 8));     //op-8

// console.log(Math.random());                       //  generate random number between 0 to 1
// console.log((Math.random()*10) + 1);                 // op- beetwen 1 to 10 in decimal
// console.log(Math.floor(Math.random()*10) + 1);      //op beetween 1 to 10 in integers

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)    // return op in between 10 and 20

//note:- use ceil to convert number in beetween any number by multiply that