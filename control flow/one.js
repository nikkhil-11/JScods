// if
// all the comparison operator
// < , >, <=, >= , !=, ==, ===
// const temp = 41
// if (temp<41) {
//     console.log("Temp is less than 50");    
// }else{
//     console.log("temp is greater than 50");
    
// }

//************************************************************************************************************** */
// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power : ${power}`); 
//******************************************************************************************************************* */
 // NESTED IF STATEMENT

// const balance = 1000
// if (balance < 500) {
//     console.log("The balance is less than 500");
// }else if(balance < 750){
//     console.log("the balance is less than 750");
// }else if (balance < 900) {
//     console.log("the balance is less than 900");      
// }else{
//     console.log("the balance is less than 1200");    
// }
//********************************************************************************************** */

// const userLoggedin = 0
// if (userLoggedin == true){
//     console.log("You have access to see the information");
//     name : "Nikhil mishra";
// }else{
//     console.log("You cant access the information");
    
// }
///////////////////////////////////////////////////////////////////////////////////////////////////

// const userLoggedin = true           // when there is mutliple condition to be true
// const debitCard = true
// const adultAge = true 

// if (userLoggedin && debitCard && adultAge) {
//     console.log("You are allowed in the club");    
// }

loggedInFromGoogle = false                  
loggedInFromEmail = true                                   // when there is mutliple (OR) condition to be true
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("You are allowed in the cart");
    
}