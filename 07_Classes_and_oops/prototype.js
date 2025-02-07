// ALL about New keyword


function multipleBy3(num) {
    return num * 5
}

console.log(multipleBy3(4));
console.log(multipleBy3.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}
createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);

}


const chai = new createUser('chai', 20)
const tea = new createUser('tea', 40)
tea.printMe()


//Prototype
const heros = ['thor', 'spiderman']
const heroPower = {
    thor: ' hammer',
    spider: 'sling'
}
Object.prototype.ishan = function () {
    console.log(`IShan is present in all objects`)
}
Array.prototype.heyIshan = function () {
    console.log("Hello Ishan");

}
heroPower.ishan()
// heroPower.heyIshan()
heros.heyIshan()

// Inheritance

const user = {
    name: 'ishan',
    Email: "ishanmgmial.com"
}

const Teacher = {
    makevideo: true
}

const TeachingSupport={
    isAvaiable: false
}
const TASupport={
    MakeAssignment: 'js assignment',
    __proto__: 'teaching support'
}
Teacher.__proto__ = user
//Modern type
Object.setPrototypeOf(TeachingSupport,TASupport)

let username = "chai aur code    "
String.prototype.trueLength =function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
 
}
username.trueLength()


