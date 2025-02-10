class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
        
    }
     static createId(){
        return '123'
    }
}
const xyz = new User("Ishan")

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

}
const iphone =  new Teacher("iphone","ishan@gmail.com","231")
console.log(iphone.createId())