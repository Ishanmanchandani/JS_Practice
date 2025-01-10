const myObj ={
    js: 'javascript',
    cpp : 'c++'
}
for (const key in myObj) {
  // console.log(`${key} shortcut is for ${myObj[key]}`);
   
}

const programming = ["cpp","js","python"]

for (const key in programming) {
  console.log(programming[key]);
   
}

programming.forEach( function (val) {
   // console.log(val);
    
});

function primeMe(item) {
   // console.log(item)
}
programming.forEach(primeMe)

programming.forEach((item, index, arr)=>{
    console.log(item,index,arr);
    
})

const newObj =[
    {
    languageName: 'js',
    languageFileName: 'javasscript'
    },
    {
    languageName: 'py',
    languageFileName: 'python'
    },
    {
    languageName: 'cpp',
    languageFileName: 'c++'
    }

]
newObj.forEach((item)=>{
    console.log(item);
    
})