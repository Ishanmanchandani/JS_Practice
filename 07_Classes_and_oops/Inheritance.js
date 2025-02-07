class user {
    constructor(username) {
        this.username = username

    }
    LogMe() {
        console.log(`username is ${this.username}`);

    }
}
class Teacher extends user{
    constructor(username, email, Password){
        super(username)
        this.email = email
        this.Password = Password
    }
    addcourse(){
    console.log(`A new course was added by ${this.username}`)
    
    }
 }
 const chai = new Teacher("chai",'chai@GMAIL.com',"123")
 chai.LogMe()

 const masalaChai = new user("masalaChai")
 masalaChai.LogMe()
 console.log(chai  instanceof Teacher);
 
 