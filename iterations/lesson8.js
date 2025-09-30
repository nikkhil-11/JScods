//-------REDUCE-----------------------------------------------------------------------
myNums = [1,2,3,4,5]
// myTotal = myNums.reduce(function (acc,currVal){
//     console.log(`value of accumulator ${acc} and the value of currentvalue is ${currVal}`);
//     return acc + currVal
// },0)
myTotal = myNums.reduce((curr,acc) => (curr+acc),0)     /// ARROW FUNCTION

// console.log(myTotal);
const myShopping = [
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"python course",
        price: 9999
    },
    {
        itemName:"IBM course",
        price: 12999
    },
    {
        itemName:"react course",
        price: 3999
    }
]
const myIncome= myShopping.reduce((acc,item) =>(acc+item.price),0 )
console.log(myIncome);
