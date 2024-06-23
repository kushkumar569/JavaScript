const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// here we create a Object that has a User values.
const tea = Object.create(User)
console.log(tea.email);