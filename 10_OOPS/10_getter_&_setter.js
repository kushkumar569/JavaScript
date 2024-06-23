class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // set use to set. and get to get somethig from outside.
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        // use _ ti override password unless this.passward and this both try to modify password and ultimatly stackover flow.
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);