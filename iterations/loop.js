/* 
for (i=-0 ;i <=10 ; i++) {
    console.log(`the outer loop is ${i}`);
    for (let j = 0; j <=10 ; j++) {
        //console.log(`the inner loop value is ${j} and inner loop is ${i}`);      
        console.log( i + "*" + j + '=' + i * j );
        
    }
    
}*/

// for ( let i=1 ; i<=20; i++){
//     if (i % 2 !== 0 ){                   ///// ODD NUMBERS
//         console.log(i);
        
//     };
    
// }

// let a = 0
// let b = 1
                                                // FIBONACCHII SERIES
// for(i=0 ; i<=10 ; i++){
//     let next= a + b;
//     console.log(next);
//     a = b ;
//     b = next;
    
// }

//************BREAK AND CONTINUE */
// for (let index = 1; index < 20; index++) {
//     if (index == 5) {
//         console.log("detected 5");
//         break
//     }
//     console.log(index);  
// }
for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log("detected 5");
        continue
}
console.log(index);

}