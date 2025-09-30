// const tinderUser = new Object()
const tinderUser = {}
tinderUser.Name = "Nikhil mishra"
tinderUser.age = 21
tinderUser.Userloggedin = false
// console.log(tinderUser.Name);

const regularUser = {
    email : "nikhilmishra@gmail.com",
    username:{
        fullname:{
            firstName:"Nikhil",
            lastName:"mishra"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.username.fullname);
 
const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3:"a",
    4:"b"
}
const obj3 = {
    5:"a",
    6:"b"
}
// const obj4 = Object.assign({},obj1,obj2,obj3)// it have two methods
const obj4 = {...obj1,...obj2,...obj3} // Spread function 
// console.log(obj4);
 const myArr=[
    {
        id:25,
        email:" nikhilmishra@gmail.com"
    }
    ,
    {
        id:27,
        email:"monu@gmail.com"
    }
 ]
//  console.log(myArr[1].id);
//  console.log(tinderUser);
//  console.log(Object.keys(tinderUser));    //     we can achieve all the keys of object in the form of array
//  console.log(Object.values(tinderUser));   //   and values also
 


// HOW TO DE-STRUCTURE OBJECTS******************************************************************************************************
const course = {
    courseName : "javascript",
    price: 999,
    courseInstructor:"chaiaurcode"
}
const {courseInstructor:instructor,courseName:name} = course
console.log(name);
