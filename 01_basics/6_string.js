const name ="ishan"
const myRepo =5
console.log(name + myRepo)
console.log(`Hello my name is ${name} and I have made ${myRepo} repository till now`)
const gameName = new String ("IshanIm")
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('s'))
const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-4,3)
console.log(anotherString)

const newString1 = '   Ishan    '
console.log(newString1);
console.log(newString1.trim())

const url = "https://google.com/Ishan%20manchandani"
console.log(url.replace('%20','-'));

console.log(url.includes('Ishan'))
console.log(url.includes('ishan'))













