function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username)   // here username pass to Set username to set username but SetUsername use their own this(method) so, after stack pop time.
                            // this of SetUsername also pop and nothing change in the createuser.
   
    SetUsername.call(this, username)    // but here we pass to set this to setusername of the createuser function.and SetUsername change's reflect in it.
                                        // BTW this in parementer in optional if we use call methord.
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);