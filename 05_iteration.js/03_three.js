// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
/*this is for of type of array which is use to access value of array directly no need to find length/start/end/increment.  */
for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
/*similar to hashmap concept*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
/* here key and value store key and value of map respectivly in same order as they put in map. */
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
//this print key and value in pair.
for (const key of map) {
    console.log(key);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

 /*  throw erroe becouse in object we can't use for of iteration methord.  */

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }