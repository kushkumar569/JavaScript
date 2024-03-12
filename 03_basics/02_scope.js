//var c = 300   it's global scope. so rarely use this.
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);    //output--10
    
}



// console.log(a);       //output--300
// console.log(b);
// console.log(c);


function one(){                
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))         //return error becouse we call before declear it.

function addone(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))
