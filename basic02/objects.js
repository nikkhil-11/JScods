// singleton
// object.create by constructor

// objects Literals
const mySym = Symbol("key1")
 const jsUser = {
    name : "Nikhil mishra",
    email : "nikhil@google.com",
    location: "Gorakhpur",
    [mySym] : "mykey1",
    age : 18,
    IsLoggedIn : false ,
    lastLoggedIn : ["monday","Tuesday","wednesday"]    
 }
//  console.log(jsUser.name);    // There are two ways to access the keys of object
//  console.log(jsUser["name"]); // Another (best)
 // HOw to access the Symbol keyword????
//  console.log(jsUser[mySym]); // brackets

//  How to edit the keys of the object ?
jsUser.email = "Nikhil@facebook.com"
// console.log(jsUser.email);

// What if we want that no one can change the keys of object
// Object.freeze(jsUser)
jsUser.email = "Nikhil@microsoft.com"
// console.log(jsUser);


 


 jsUser.greeting = function(){
    console.log("Hello js user");   
 }
 jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
 }
 console.log(jsUser.greeting());
 console.log(jsUser.greetingTwo());
 
 