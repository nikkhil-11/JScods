// const coding = ["java", "js", "cpp", "swift", "rb", "python"]
// const values =  coding.forEach( (item) => {
// console.log(item);
//     return item
// })
// console.log(values)

// AS WE KNOW TILL NOW FOR EACH DO NOT RETURN ANY VALUE
//-------------------------------------------------------------------------------------------------------------

// const myNums = [1,2,3,4,5,6,7,8,9]
// let values = myNums.filter( (nums) => nums > 4)
// console.log(values);                                 //implicit return when ever use the curly brackets must have to use return 
// 
/*const newNums = []
myNums.forEach((nums) => {
    if (nums > 4 ) {
        newNums.push(nums)
    }
})
console.log(newNums); */
//-----------------------------------SELF PRACTICE----------------------------------------------------------------------
// myNums.forEach( (nums) =>{
//     let square = nums*nums;
//     // console.log(`The number is ${nums} and square is ${square}`);
  
// })


// myNums.forEach( (nums) =>{
//     let add = nums + nums;
//     console.log(`The number is ${nums} and sum is ${add}`);
  
// })
// let sum = 0
// myNums.forEach((n) =>{
//    sum += n 
// })
// console.log(sum);

//------STRINGS-----------------------------------------------------
// const fruits = ["apple", "banana", "mango", "orange", "grape"];
// fruits.forEach( (items , index) => {
//     // console.log(items.toUpperCase());
//     console.log(items , index);
    
// } )
//------OBJECTS---------------------------------------------------------
// const products = [
//   { id: 1, name: "Laptop", price: 800 },
//   { id: 2, name: "Phone", price: 500 },
//   { id: 3, name: "Tablet", price: 300 }
// ];

// 
// NOW CONDITIONS
// products.forEach( (item) => {
//    if (item.price>300) {
//     console.log(item);
    
//    }
    //---------------------------------------------------------------------------------------------------------------------------------------------------------
// })
// FILTER METHOD FOR CONDITIONS ON OBJECTS
const gadgets = [
  { name: "Smartphone", brand: "Apple", price: 999 },
  { name: "Laptop", brand: "Dell", price: 850 },
  { name: "Tablet", brand: "Samsung", price: 450 },
  { name: "Smartwatch", brand: "Apple", price: 399 },
  { name: "Bluetooth Earbuds", brand: "Sony", price: 199 },
  { name: "Gaming Console", brand: "Microsoft", price: 499 },
  { name: "Camera", brand: "Canon", price: 699 },
  { name: "Wireless Keyboard", brand: "Logitech", price: 79 },
  { name: "Portable Speaker", brand: "JBL", price: 129 },
  { name: "External SSD", brand: "Samsung", price: 159 }
];

// const data =  gadgets.filter( (items) =>items.brand== "Apple")
// console.log(data);
const data = gadgets.filter( (items) => { return  items.price>200 && items.brand === "Apple"})
console.log(data);
