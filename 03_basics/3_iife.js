// Immediately Invoked Function Epression

(function chai(){
    //named IIFE
    console.log(`DB connected`);
    
})();

( (name)=>{
    console.log(`DB connected two ${name}`)
})('Ishan')
