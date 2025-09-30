/* There are mainly two types of data types in java script based on
 how we can store the data in memory and how we can access the data*/

//  So the Types are PRIMITIVE DATA TYPES AND NON PRIMITIVE DATA TYPES

// PRIMITIVE DATA TYPES HAVE 7 DATATYPES : string, number, boolean, null, undefined, Symbol, bigInt
// REFERENCE (non- primitive): Arrays, Functions, Onjects

// const id = Symbol('123')
// const anotherId = Symbol('123')
// // console.log(id==anotherId);
// {
//     name"Shaktimaan":
// }
//  let bigInt= 37461239847817834n //int
// let superHeroes = ["Shaktimaan","Superman","Thor"]; //arrays
// // console.log(typeof superHeroes);

// ************************************************************************************************************************************
// STACK memory(primitive) HEAP memory(non primitive)
let myYoutubeName="Nikhil"
let anotherName = myYoutubeName
anotherName="the name is nikhil"
// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
    email: "nkmishra@gmail.com",
    upi: "nikhilsbi"
}

let userTwo=userOne
userTwo.email="shubhmishra@gmail.com" 
console.log(userOne.email);
console.log(userTwo.email);

