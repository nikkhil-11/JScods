const myPurchase1={
    shoes:100,
    stateTax : 1.2,
    totalprice : function(shoes,tax){
        var calculation = this.shoes * this.stateTax
       return `the price to pay is ${calculation}`
    }
}
let priceToPay=myPurchase1.totalprice()
console.log(priceToPay);

const myPurchase2={
    shoes:50,
    stateTax : 1.2,
    totalprice : function(shoes,tax){
        var calculation = this.shoes * this.stateTax
       return `the price to pay is ${calculation}`
    }
}
let toPay = myPurchase2.totalprice()
console.log(toPay);
//all the data are in the form of objct