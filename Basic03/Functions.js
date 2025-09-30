// function add(num1,num2){    
// console.log(num1+num2);
// }
// add(11,12)

function addition(num1,num2){
    // let result = num1+num2
    // return result // after the return line of the function no code is executed this is the last line of the function 
return num1+num2
}
const result = addition(3,5)
// console.log(result);

function logInUsermessage(Username) {
    if (Username===undefined) {
        console.log("please enter the username");  
        return 
    }
    return `${Username} just logged in`
}
// console.log(logInUsermessage())

function allItemsCart(...num1){//       spread* operator is used for the calcuate all the item as it consider all the item in the form of array 
    return num1
}

// console.log(allItemsCart(200,400,500,100));


/// HoW TO ACCESS THE OBJECTS IN FUNCTIONS?
// const user = {
//     name:"Nikhil mishra",
//     price:"499"
// }

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
// }
// handleObject(user)

const libraryBooks = {
    book1 : "science",
    book2 : "maths",
    books3 : "physics"
} 

function bookLibrary(libraryBooks){
    console.log(libraryBooks)
    console.log(`so the student1 issued the ${libraryBooks.book1}`);
    console.log(`so the student2 issued the ${libraryBooks.book2}`);
    console.log(`so the student3 issued the ${libraryBooks.books3}`);    
}
const xyz = {
    book1 : "science",
    book2 : "maths",
    books3 : "physics"
}
// bookLibrary(libraryBooks)

/// HoW TO ACCESS THE ARRAYS IN FUNCTIONS?
const myNewArray = [100,200,400,600]
function returnSecondValue(getArray){
return getArray[1]
}
console.log(returnSecondValue(myNewArray));
