const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);         //this function use for only object not functions
        console.log(this);           
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);              // return {} which is global/window functions.

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);                // return undefine becouse this not allow to use in function.
// }

// chai()

// const chai = function () {                     
//     let username = "hitesh"
//     console.log(this.username);             // this method not apply for objects it's only apply for function. so, throw error
//}

const chai =  () => {                            //syntax of arrow function
    let username = "hitesh"
    console.log(this.username);           // gives undefine like function
}


chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                          // return value .
// }

// const addTwo = (num1, num2) =>  num1 + num2               // these three are method of return value in one line

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})
                                                               //noted that if we return in one line use () but for multiline use{}.

// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()