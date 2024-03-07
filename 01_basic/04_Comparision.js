// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);   /* return true but avoid these becouse of diffrent datatype */
// console.log("02" > 1);  

console.log(null > 0);   /*these all values of null and undefine are converted in some other form than compare */
console.log(null == 0);  /* avoid these comparison also */
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);   

// ===  compare value as well as datatype

console.log("2" === 2);  // return false