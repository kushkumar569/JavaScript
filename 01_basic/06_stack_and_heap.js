// stack-> store primitive datatype
// heap-> store non-primitive datatype
let name="kush";
let anothername=name
anothername="lav"
console.log(anothername);  //lav print becouse new value
console.log(name);         // kush print becouse anothername assign does not change

let userone ={
    email: "new.gmail.com",
    upi: "123@okicic"
}

usertwo=userone  // assign reference variavle of userone to usertwo
usertwo.email="kushk569@gmail.com"   //now change reference varibale of both the variable

console.log(userone.email);  // print same value  "kushk569@gmail.com"
console.log(usertwo.email);
