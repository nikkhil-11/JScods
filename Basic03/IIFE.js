//**********IMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE) */
(function chai (){
    console.log(`DB CONNECTED`);
    
})();//*****AFTER FINISHING THE IIFE FUNCTION SEMICOLON (;) IS MUST */

( () =>  {
    console.log(`DB TWO CONNECTED` );
    
})();

// HOW TO PASS  THE VALUE
( (name) =>  {
    console.log(`DB TWO CONNECTED ${name}` );    
})("NIkhil")