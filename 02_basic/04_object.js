// const tinderUser = new Object()         // singleton
const tinderUser = {}                      // multiton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {             //add objects in object.(nested).
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);         // access objects of objects.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                   // here obj2 add to obj1 and assign to obj3.
// const obj3 = Object.assign({}, obj1, obj2, obj4)     //here obj1 & obj2 & obj4 add to {} and assign to obj3.

const obj3 = {...obj1, ...obj2}                // here directly obj1 and obj2 added to obj3. also use for multiple objects.
// console.log(obj3);


const users = [             //generally database return in array of objects form.
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email           // to access.
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));          //return arrays of keys of tinderuser.
// console.log(Object.values(tinderUser));        //return arrays of values of tinderuser.
// console.log(Object.entries(tinderUser));        //return arrays of key-value pair of tinderuser.

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));           // return true if 'isLoggedIn' if present else not.


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
// const {courseInstructor} = course        // here we assign course.courseInstructor to simoly courseInstructor.
// console.log(courseInstructor);

const {courseInstructor: instructor} = course  // here we furute simplify course.courseInstructor to instructor.

console.log(instructor);

/*format of json api*/

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// this is also a format of multiple api store in array
[
    {},
    {},
    {}
]