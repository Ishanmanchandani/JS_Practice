//const tinderUser = new Object()
// const tinderUser={
//     tinderUser.id = "125abc",
//     tinderUser.Email= "ishanmanchandani@gmail.com",
//     tinderUser.name="Ishan
//     }
// tinderUser.id = "125abc"
// tinderUser.Email= "ishanmanchandani@gmail.com"
// tinderUser.name="Ishan"
//console.log(tinderUser)

let regularUser={
    Email : "ishanmanchandani@gmail.com",
    fullname:{
        username:{
            firstname: "ishan",
            lastname: " manchandani"
        }
    }
}
console.log(regularUser.fullname.username.firstname);

const obj1 = {1: "a",2: 'b'}
const obj2 = {3: "a",4: 'b'}
//const obj3 =Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3)

const user =[
    {
     id: 1,
     email: "ishan@mail"   
    },
    {
        id: 1,
        email: "ncedwski"
    },
]
//user[1].email
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.hasOwn(tinderUser));

const course = {
    courseName: "js tutorial",
    courseInstructor: "Hitesh",
    couseFee: '500'
}
const {courseName: Name} = course
console.log(Name);

// {
//     "name": "ishan",
//     "class": "3",
//     "sub": "xyz"
// }
[
    {},
    {},
    {}
]




