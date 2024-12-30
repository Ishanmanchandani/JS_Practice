function addTwoNumbers(num1,num2) {
  
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNumbers(9,5)
console.log("Result",result);

function loginUserMsg(username ="abc") {

    if(!username){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}
//console.log(loginUserMsg("Ishan"))
console.log(loginUserMsg())

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,300,900))

const user={
    username: "ishan",
    price: "900"
}
function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}` );
    
    
}
handleobject({
     username: "ishan",
    price: "400"
})

const myNewArray = [20,30,40,50]
function returnsecondvalue(getarray) {
    return getarray[1]
    
}
console.log(returnsecondvalue(myNewArray));
