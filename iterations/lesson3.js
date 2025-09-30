// For of       //The for...of loop in JavaScript is used to iterate over the values of an iterable object — like an array, string, Map, Set, etc.
// ["","",""]     
//[{},{},{},]

// const arr = [1,2,3,4,5,6,7,8,9]
// for (const num of arr) {
//     console.log(num);
  
const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(greet);
}

//******************************************************************************************************************************************* */

/*const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(greet);
    if (greet == " ") {
        // console.log("space is detected ");
        break
    }
}

//******************************************************************************************************************************************* */
/*const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(greet);
    if (greet == " ") {
        // console.log("space is detected ");
        continue
    }
}
//******************************************************************************************************************************************* */


//********MAPS */
 
// const map = new Map()
// map.set('name',"Nikhil")
// map.set('age',21)
// map.set('nationality',"indian")
// map.set('height',"6ft")
// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }
// // for (const [key,value] of map) {
// //     // console.log(key,':-',value);
    
// // }
//**************FOR OF LOOPS ON OBJECTS */

const myObj={
    userId : 2794,
    nameofEmp : "Nikhil mishra",
    age : 21
}
for (const content of myObj) {
    console.log(content);
    
}