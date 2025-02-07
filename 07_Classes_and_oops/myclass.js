class user {
    constructor(username,Email,password){
        this.Username = username;
        this.Email = Email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.Username.toUpperCase()}`
    }
}
const chai = new user('chai','chai@gmail.com','123')
console.log(chai.encryptPassword())
console.log(chai.changeUserName());

function User(username,Email,password){
    this.Username = username;
    this.Email = Email;
    this.password = password
}
User.prototype.encryptPassword= function(){ 
    return `${this.password}abc`
}
const tea = new user('tea','tea@gmail.com','1234')
console.log(tea.encryptPassword())
console.log(tea.changeUserName());

