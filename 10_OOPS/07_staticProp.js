class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
hitesh.logMe()          // here hitesh has access to call logMe becouse it's not static.
// console.log(hitesh.createId())      // but here hitesh can't access createId() becouse it is a type of static.

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();         // similar case of hitesh.
// console.log(iphone.createId());