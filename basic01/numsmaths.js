//**********NUMBERS*********************************************************************** */
const score = 350
// console.log(score);

const balance = new Number(584);
// console.log(balance.toFixed(2));
const anotherNumber = 23.1
// console.log(anotherNumber.toPrecision(2));
const hundred = 100000000000
// console.log(hundred.toLocaleString('en-IN'));

// **********MATHS*********************************************************************************************

// console.log(Math);
// console.log(Math.abs(-4))//only negative values get changed not the positive
// console.log(Math.round(4.3));//for the rounding off the values
// console.log(Math.round(4.7));//for the rounding off the values
// there are tow more values for rounding off ciel() 4.2=5 and floor()4.9=4
// console.log(Math.floor((Math.random()*10)+1));
const max = 10
const min = 4 
console.log(Math.floor(Math.random()*(max-min)+1))