const user = {
    username: 'Ishan',
    Id: 14589,
    Email: 'ishanmanchandani@gmial.com',

    getDetails: function () {
        console.log("Got user details from database")
        console.log(`username ${this.username}`)

    }

}

console.log(user.username);
console.log(user.getDetails());
console.log(this)

function User(username,Email,Id) {
    this.username = username
    this.Email = Email
    this.Id = Id
    this.greeting =function(){
        console.log(`welcome ${this.username}`)
    }
    return this
}
User()

const userOne = new User("Ishan",20,14589)
const userTwo= new User("xyz",20,75149)
console.log(userOne.constructor);
console.log(userOne);