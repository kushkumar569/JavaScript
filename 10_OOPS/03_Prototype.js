// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);   // here not define truelength but use console.log(myName.trim().length).


/* NOTE:->  String,Array and function inherite all the property and method of Object.
            so, if we create a object of datatype object then Array,String and function can be access,but 
            if we define a object of datatype Array,String and function then object can't be access. */

let anotherUsername = "ChaiAurCode     "

// here we create a object of datatype String that can be use to remove all the spaces.and can be access by all kind of String.
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()    //  this value is Chaiaurcode and o/p is 11.
"hitesh".trueLength()           // similarly this value is hitesh and o/p is 6.
"iceTea".trueLength()


// simialr to upper. i.e:- Array.
let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// here we create a object of datatype object that can be access by all Arrays. also String,function.
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

// here we create aobject of Array that only myHeros can access not,heroPower.
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()    //not access becouse heyHitesh is type of Array.

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport      // synatx  of inheritane TASupport inherite TeachingSupport
}

Teacher.__proto__ = User        // here Teacher inherite User.

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)         // here TeachingSupport inherit Teacher.
