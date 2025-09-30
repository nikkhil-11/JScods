const user = {
    name: "Nikhil",
    price : 999,

    welcomeMessage: function (){
        // console.log(`${this.name}, welcome to the website `);
        
    }
}
//  user.welcomeMessage()
//  user.name = "sam"
//  user.welcomeMessage()

// console.log(this);
function chai(){
    let userName = "Nikhil"
    // console.log(this);
    
}
// chai()//****THIS KEYWORD DONT USED IN FUNCTION IT PROVIDES THE VALUE ONLY IN OBJECTS */
// console.log(this);
// IN NODE JS THIS KEYWORD SHOW THE VALUE OF EMPTY OBJECT

const abc = () =>{// ***************THIS IS HOW WE DECLARE THE ARROW FUNCTION
    let userName = "Nikhil mishra"
    // console.log(this)
}


// const add = (num1,num2)=>{// ARROW FUNCTION
//     return num1+num2
// }
// console.log(add(3,7));




// const add = (num1,num2)=> num1+num2********IMPLICIT RETURN
// const add = (num1,num2)=> (num1+num2)//********IMPLICIT RETURN
// ***IF USE THE CURLY BRACKETS WE HAVE TO USE THE RETURN FUNCTION

// HOW CAN WE IMPLIT RETURN THE OBJECTS

const add = (num1,num2)=> ({userName:"nikhil"})//********IMPLICIT RETURN
// WE HAVE TO PUT PARATHETHIS TO IMPLICIT RETURN THE OBJECTS
console.log(add(3,7));
