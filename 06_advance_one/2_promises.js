const PromiseOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Api is executed")
        resolve()

    },1000)

})
 PromiseOne.then(function(){
  console.log("promise executed");
    
})


const PromiseTwo = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({username: "ishan", Email: "ishan@gmail.com"})
    },1000)
}).then(function(user){
    console.log(user)
})
const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true
        if (!error){
            resolve({username: 'ishan', Email:"ishan@gmail.com"})
        }
        else{
            reject('something went wrong')
        }
    },1000)
})
PromiseThree.then(function(user){
    return user.username
})
.then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("The promise is either resolve or reject"))

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true
        if (!error){
            resolve({username: 'ishan', Email:"ishan@gmail.com"})
        }
        else{
            reject('Error: something went wrong')
        }
    },1000)
})
async function consumepromiseFive() {
    try {
      const res = await promiseFive
      console.log("promise resolved");
        
    } catch (error) {
      console.log(error)  
    }
}
consumepromiseFive()



