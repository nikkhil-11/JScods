const myArr=[0,1,2,3,4,5,6]

const myHeroes = ["shaktimaan","Haatim taaya","spiderman"]
// console.log(myHeroes);

// myArr.push(6)
// myArr.pop()

// // push is used for the insertion of the element in array whereas pull is used for the removal of the element from the array

// pop is used with no arguments in paranthesis and remove the latest element in the array

// myArr.unshift(9)//unshifts always insert the element on 0th index which is not suitable in the large arrays as all the value is to be shifted

// myArr.shift()//shift is used for opposite of the unshift as like push and pop

// console.log(myArr.includes(3));//includes function used for the number given in the argumenst present or not it will give the output in boolean datatype

// console.log(myArr.includes(9));//includes function used for the number given in the argumenst present or not it will give the output in boolean datatype

// console.log(myArr.indexOf(2));//print the index number of the element passed the arguments
// const newArr= myArr.join()// join function is used the merge the two different arrays but it converts the array into strings

// console.log(myArr);
// console.log(newArr);

//********SLICE / SPLICE*********

console.log("A ", myArr);
const myN1 = myArr.slice(1, 3) //slice only shows the output but do not the manipulate the original array
console.log("b ", myN1);

const myN2 = myArr.splice(1, 3)// splice manipulate the original array
console.log("c" , myArr);
console.log(myN2);
// **********analyze when studied functions

// function Arry (element){
//     this.array= element;
//     this.push= (insert)=>{
//         this.array= [...this.array, insert]
//        return this.array.length
//     }

// }
// let marvelHeroes = new Arry(["Thor","Ironman","Hulk"]);

// // const dcHeroes = ["batman", "superman", "flash"]
// marvelHeroes.push("batman")
// console.log("marvelheros: ",marvelHeroes.push("batman"))