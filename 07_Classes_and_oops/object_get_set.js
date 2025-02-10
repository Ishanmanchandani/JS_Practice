const User={
    _email: 'ab@.ai',
    _password: 'abc23',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }

}
const tea = Object.create(User)
console.log(tea.email);
