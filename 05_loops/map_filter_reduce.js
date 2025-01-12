const arr = [1,2,3,4]
 const val = arr.forEach((e) => {
   // console.log(e);
    return e
    
});
console.log(val);

const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynums.filter((e)=>{
//     return e>5
// })
const newnums=[] 
mynums.forEach((e)=>{
    if(e>5){
        newnums.push(e)
    }
})
console.log(newnums);

//MAP
const numbers = [1,2,3,4,5]
//const newnum = numbers.map((e)=> { return e + 10})

//Chaining method

const newnum = numbers.map((e)=>e*10)
.map((e)=> e + 10).filter((e)=> e>30)
console.log(newnum);

const Total = numbers.reduce(function (acc,currval){
    console.log(`acc ${acc} and currval ${currval}`);
    
    return acc + currval
},5)
console.log(Total);


