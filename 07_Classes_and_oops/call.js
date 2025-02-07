function setUsername(username) {
    this.username = username
}
function createUser(username, Email, password) {
    setUsername( username)
    this.username = username;
    this.Email = Email;
    this.password = password;
}

const chai = new createUser('Ishan', 'xyz@gmail.com', 'abc122')
console.log(chai)

