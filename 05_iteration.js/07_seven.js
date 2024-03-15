const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* filter use to store that elements which satisfy some conditions. map is use to modify the element. */

const newNums = myNumers.map( (num) => { return num + 10})   

// here we use chaining methord.
// const newNums = myNumers
//                 .map((num) => num * 10 )            // here num is elements in myNumbers
//                 .map( (num) => num + 1)              // here num is value of upper part of elements of map.
//                 .filter( (num) => num >= 40)          // here value in filter is upper value of map.

console.log(newNums);