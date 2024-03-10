// Dates

let myDate = new Date()               //date is object datatype
console.log(myDate.toString());       // here are some methord to print date in diffrent format
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)                // these are diffrent format to declear date. note 0th month is jan. and 0th day is sunday
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)          // here we define date and time as well
// let myCreatedDate = new Date("2023-01-14")               
let myCreatedDate = new Date("01-14-2023")         //here declear date in this format.
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()                // compare 1-jan 1970 till now time in milisecond.

// console.log(myTimeStamp);               
// console.log(myCreatedDate.getTime());        //return 1/1/1970 to mycreatedate time in milisecond.
// console.log(Math.floor(Date.now()/1000));     //convert mili sec. to sec.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);     //return month start to 0th and add 1 to it to form in same.
console.log(newDate.getDay());           

// `${newDate.getDay()} and the time `

//here we optimize localstring format more in timezone etc..  (press ctrl+space to see options.)
newDate.toLocaleString('default', {
    weekday: "long",
    calendar:myDate
})