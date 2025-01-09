for ( index = 0; index <= 10; index++) {
    const element = index
    if (element ==5) {

        console.log("5 is the element")
}
console.log(element);
      
}

for(let i = 0; i <=10; i++) {
    const element = i;
    console.log(`outer loop ${i}`);
    for (let j = 0; j<= 10; j++) {
        const element = j;
        //console.log(i + '*' + j + ' = ' + i*j);
        
        
    }

    
    
}
let myarray = ["Batman", "Padman", "superman"]
console.log(myarray.length);

for (let index = 0; index <= myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
    
}
for (let index = 1; index <= 20; index++) {
    const element = index;
    if (index == 5){
        console.log("detected 5");
        break
    }
   // console.log(element);
}
let k = 0
while (k <= 10) {
    console.log(`value of index is ${k}`);
    k = k+2

}
let arr =0
while (arr < myarray.length) {
    console.log(`value is ${myarray[arr]}`);
   arr = arr+ 1
    
}