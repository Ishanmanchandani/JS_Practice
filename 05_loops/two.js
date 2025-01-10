//for of
//["","",""]
//[{},{},{}]
const arr = [1,2,3,5]
for (const num of arr) {
    console.log(num)
}

const string = "ishan manchandani"
for (const str of string) {
    
    //console.log(`Each of ${str}`);
 
}

const map = new Map()
map.set('In', "india")
map.set('uk', "united kingdom")
map.set('Fr', "france")
console.log(map);

for (const [key, value] of map) {
    console.log(key);
  
}


