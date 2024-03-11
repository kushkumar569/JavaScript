 /* singleton->is created if we declear as constructor like
 const abc = new Object().constructor;
 but if we assign or litteral like this below this is not singleton this is multiton
 const user = {
      key: values
 } */

// Object.create

// object literals

const mySym = Symbol("key1")    //symbol declearation.


const JsUser = {
    name: "Hitesh",        // key are string datatype.
    "full name": "Hitesh Choudhary",
    mySym: "myKey1",                         //here take mySym takes as a String.
    [mySym]: "mykey1",                       // here takes as a symbol.
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)              //genreal syntax of execute object's values
// console.log(JsUser["email"])             //also use this but rare.
// console.log(JsUser["full name"])          //full name only execute by this syntax
console.log(typeof JsUser[mySym])                //mysym also execute like this.

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                      // here we freeze object so that no furture changes occur in this.
JsUser.email = "hitesh@microsoft.com"        // no change after freez.
// console.log(JsUser); 

JsUser.greeting = function(){               
    console.log("Hello JS user");     // here function assign to objects.
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);               //this use to excess that values of object which we assign.
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());