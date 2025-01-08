const  fruits = ['mango','Apple','papaya','Kiwi']
const Vegetables = ['gourd','cabbage']
fruits.push(Vegetables)
fruits.concat(Vegetables)

const newarr = fruits.flat(Infinity)
console.log(newarr);

const num = [1,2,3,4,4,5,[8,9],[10,11,12],[13,14,15]]
const numArray = num.flat(Infinity)
console.log(numArray);

console.log(Array.from("Ishan"));
console.log(Array.from({name:"Ishan"}))   //Interesting
const score1 =100
const score2= 200
const score3 =300
console.log(Array.of(score1,score2,score3));



