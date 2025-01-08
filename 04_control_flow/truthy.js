//falsy values
//false, "", 0,-0, Null, Undefined,NaN, BigInt 0n

//Truthy values
//[], {}, " ", "0", 'false', function(){}
const userEmail = []
if (userEmail.length === 0){
    console.log("Array is empty");
    
}
const emptyobj ={}
if (Object.keys(emptyobj).length===0){
    console.log("Object is empty");
    
}

//ternary operator
//condition ?true : false
const bookPrice = 90;
bookPrice<= 80? console.log("price is greater than 80"): console.log("less than 80");

