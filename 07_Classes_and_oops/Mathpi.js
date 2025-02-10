const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")
console.log(descriptor)

const chai = {
    name : "ginger tea",
    Price : "150",
    IsAvailable: true,
    OrderChai: function(){
        console.log("chai is prepared");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
Object.defineProperty(chai,"name",{
    writable: true,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
 for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
console.log(`${key} : ${value}`);
        
    }
 }
    
 