const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)          //store dc_hero in marvel_hero as a element.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)       //store both value at allHero.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]        //store both value at allHero. can be use to add more than two array.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)     // we can store all value as a element of arrray. here infinty denotes till place value to flat
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))           //return true/false
console.log(Array.from("Hitesh"))                //convert all these value to store in array
console.log(Array.from({name: "hitesh"})) // interesting . since no info. about key store or value so return blank array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));        //store all these in array.