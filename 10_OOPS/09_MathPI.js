const descripter = Object.getOwnPropertyDescriptor(Math, "PI")  // get descripton of any property.

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);    //not change.

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// print all the propery of the name of the object of the chai.
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// here we can change the property of the name of object chai.  if enumerable is false, so we can't access(name) at the time of iteration.

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    // we want to skip function type of object. and we can't get name if enumerable is false.
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}