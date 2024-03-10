// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
const mixarray =[0, 1, 2, 3, 4, 5,"shaktiman", "naagraj",true,false]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)  //push 6 at last position
// myArr.push(7)
// myArr.pop()   //pop elememt of last position

// myArr.unshift(9)     //add element in first position.
// myArr.shift()         // remove element of first position.

// console.log(myArr.includes(9));     // return true/false wheter present or not.
// console.log(myArr.indexOf(3));      // return index value of 3rd index.

const newArr = myArr.join()      // store value of myarr in newArr as string value.

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //store 1 to 2 elemet

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);            // change myArr to remove index from 1 to 3
console.log(myn2);                   // store remove index . 1 to 3