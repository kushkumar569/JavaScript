const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        console.log(`Username: ${this.username}`);   // same o/p as this and below.
        console.log(user.username)
        console.log(this);  // return all kind of operation that object have.
    }

}



console.log(user.username)
console.log(user.getUserDetails());
// console.log(this);  //return all kind of object/operation that window have.


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

/* here userOne value is overridden by userTwo so,no signifance of userOne we get, hense we can use new keyword to create a new object. */
// const userOne = User("hitesh", 12, true)
// const userTwo = User("ChaiAurCode", 11, false)

// here we have a new variable that have their own significance value of userOne and userTwo.
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userTwo);    // same as below.
console.log(userOne.constructor);

console.log(userOne instanceof User);   // return true.