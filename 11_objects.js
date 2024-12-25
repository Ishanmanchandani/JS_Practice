//singleton

//Objects
//Literals
const mySym = Symbol("key")
const myObj ={
    name:"ishan",
    EmailId :"ishanmanchandani@gmail.com",
    age: 20,
    isLoggedIn: true,
   [mySym]: "mykey"
}
console.log(typeof myObj[mySym])

myObj.EmailId = "ishanmanchandani02@gmail.com"
console.log(myObj.EmailId);
Object.freeze(myObj)
myObj.EmailId = "ishangmail.com"
console.log(myObj);

