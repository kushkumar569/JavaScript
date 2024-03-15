const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
/* for object type use for-in. it contains key has key index and it's value can be access by use myObject[key].*/
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
/* for-in also use in array but here key return index of array and value at that index can be access by use array[key]. */
for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
/*here this return nothing becouse map not access by for-in.*/
for (const key in map) {
    console.log(key);
}