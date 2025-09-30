const userLoggedin = []
if (userLoggedin) {
    console.log("user is loggedin ");
    
}
// FALSY VALLUES :
// binInt 0n, 0 , -0 , false , "", null , undefined , NaN

// TRUTHY VALUES 
// " ", 'false', "0", [], {}, function (){}

// if (userLoggedin.length == 0) {
//     console.log("array is empty");    
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length=== 0 ) {
    
// // }console.log("The object is array");
//

//********************************************************************************** */

//******NULLISH COALESCING OPERATOR (??): NULL DEFINED //

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = 5 ?? 10
// console.log(val1);



//********TERNIARY OPERATOR*/
// condition ? true : false

const iceTeaprice = 100 
iceTeaprice >= 80 ? console.log("more than 80") : console.log("less than 80");

