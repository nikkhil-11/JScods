// for(let i=0; i<=10;i++){
//     console.log(`outer loop is ${i}`);
//     for(let j=1; j<=10 ; j++){
//         console.log(`the inner loops is ${j}`);
        
//     }
// }
const numbers = [15, 72, 9, 81, 43, 72, 60, 99, 28];
let largest=-Infinity;
let secondLargest = -Infinity;
for(let i = 0 ; i<numbers.length ;i++){
    let num = numbers[i]
    if(num >largest){
       largest  = secondLargest
        largest = num
    }else if(num > secondLargest && num < largest){
        secondLargest = num
    }
}
console.log("Array:", numbers);
console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);