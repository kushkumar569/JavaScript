const coding = ["js", "ruby", "java", "python", "cpp"]
/* for-each use with callbreak/annonymus function that function has no name but, contains some value(val) which store value of
array and iterate over the array and store it in them. */
coding.forEach( function (val){
    // console.log(val);
} )
// coding.forEach( (item) => {                // here we also use arrow function.
//     console.log(item);
// } )
 
// function printMe(item){                    //here we declear function and furture store them value of array
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {         //here item store value of index and arr store whole array.         
    console.log(item, index, arr);               //NOTE:- in all cases name can be diffrent. 
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        // languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {                 // here take each object as a item and item.lagunagename check for language in
    console.log(item.languageName);           // each object if any has not present than return as undefined.
} )