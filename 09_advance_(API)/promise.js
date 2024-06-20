const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    // DB call,cryptography,network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve() //call then after excuted all task inside. do not matter it's postion.it call after complete inside.
    },1000)
})

promiseOne.then(function(){
    console.log("prmise consumed");
})

/* same work no need to assign in any variable. */

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed");
        resolve()
    },1000)
}).then(function(){
    console.log("prmise 2 consumed");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        /* here we also pass values of any type by resolve. */
        resolve({username: "kush",email:"kushk569@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
});

const promisefour = new Promise(function(resolve,reject){
    let error=true;
    setTimeout(function(){
        /* if error found then reject is call.if not error found then resolve call.*/
        if(!error)
          resolve({username: "kush",email:"kushk569@gmail.com"})
        else
          reject("Error: data not found")
    },1000)
})

promisefour.then(function(user){
    console.log(user);
    return user.username;   // return to the next then statment.
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);       // if reject call than will not print, print catch statment.
}).finally(()=> console.log("The promise is either resolved or rejected")) // always print either resolve or reject.


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

/* here we declear a type of async function call consumePromiseFive. it try if resolve and catch if reject. await use for waiting to execution of preivious process. */
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()   // call function.

/* here call a api and wait(await) and then it's data convert to json. and print them. else print error.
 NOTE:- here also use await to converting at json becouse wait to get data and till process to convert in json typev in synchonise way.*/

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()  // call function.

// same code written in diffrent format.

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()  // after getting data convvert to json then pass so,no need to await function.
})
.then((data) => {
    console.log(data);  // print that data.
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.